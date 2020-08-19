'use strict';

const gtCommon = require('gt-common');
const gtDispatchModels = require('gt-dispatch-models');
const Chauffeur = gtDispatchModels.Chauffeur;
const logger = gtCommon.Logger(__filename);

const Constants = gtDispatchModels.Constants;

const Components = require('../../../../../components');

let ChauffeurController = {

  /*
   * CRM Verify Chauffeur
   */
  crmVerify: function(req, res, next) {

    if (!req.freshDeskVerificationRequest || !req.freshDeskVerificationRequest.chauffeur_id) {
      let err = new Error('No Valid Fresh Desk Request present to verify chauffeur');
      return next(err);
    }

    if (!req.chauffeur) {
      let err = new Error('No chauffeur found');
      return next(err);
    }

    req.chauffeur.crmVerifyChauffeur(function (err, chauffeur) {
      if (err || !chauffeur) {
        err = err || new Error('Error finding chauffeur');
        return next(err);
      }
      Components.ChauffeurComponent.updateOnChauffeurVerification(chauffeur, function () {});
      req.response = {
        success: true,
        message: 'Successfully Validated Chauffeur'
      };
      next();
    })
  },

  /*
   * Find Chauffeur
   */
  find: function(req, res, next) {

    if (!req.freshDeskVerificationRequest || !req.freshDeskVerificationRequest.chauffeur_id) {
      let err = new Error('No Valid Fresh Desk Request present to verify chauffeur');
      return next(err);
    }

    if (!req.freshDeskVerificationRequest.is_verified) {
      return next();
    }

    Chauffeur.findOne({_id: req.freshDeskVerificationRequest.chauffeur_id}, function (err, chauffeur) {
      if (err || !chauffeur) {
        err = err || new Error('Error finding chauffeur');
        return next(err);
      }
      req.chauffeur = chauffeur;
      next();
    })
  },

  /*
   * Delete Old Chauffeurs
   */
  deleteOldChauffeurs: function(req, res, next) {

    if (!req.fleetOwner || !req.freshDeskVerificationRequest) {
      let err = new Error('No Fleet Owner or Verification Request Found');
      return next(err);
    }

    if (req.fleetOwner.operator_type != Constants.FleetOwnerConstants.operatorType.vehicleOwner) return next();

    let params = {
      chauffeurId: req.freshDeskVerificationRequest.chauffeur_id,
      fleetOwnerId: req.fleetOwner._id
    };

    Chauffeur.deleteOldChauffeurs(params, function (err, deletedUsers) {
      if (err) {
        logger.debug(err);
        return next(err);
      }
      req.deletedUsers = deletedUsers;
      next();
    })
  },

  /*
   * Add Chauffeur Public Url
   */
  addPublicUrl: function(req, res, next) {

    if (!req.freshDeskVerificationRequest || !req.freshDeskVerificationRequest.chauffeur_id) {
      let err = new Error('No Valid Fresh Desk Request present to verify chauffeur');
      return next(err);
    }

    if (!req.chauffeur) {
      let err = new Error('No chauffeur found');
      return next(err);
    }

    if (!req.freshDeskVerificationRequest.data || !req.freshDeskVerificationRequest.data.chauffeur || !req.freshDeskVerificationRequest.data.chauffeur.image) {
      return next();
    }

    req.chauffeur.addChauffeurPublicUrl(req.freshDeskVerificationRequest.data.chauffeur.image, function (err, chauffeur) {
      next();
    })
  },

};

module.exports = ChauffeurController;

