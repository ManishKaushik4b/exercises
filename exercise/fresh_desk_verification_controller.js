const gtDispatchModels = require('gt-dispatch-models');
const gtCommon = require('gt-common');
const logger = gtCommon.Logger(__filename);

const UtilUtil = gtCommon.UtilUtil;

const FreshDeskVerification = gtDispatchModels.FreshDeskVerification;

const Constants = gtDispatchModels.Constants;
const FleetOwnerConstants = Constants.FleetOwnerConstants;
const FreshDeskVerificationConstants = Constants.FreshDeskVerificationConstants;

const FreshDeskController = {

  /*
   * Update Verification Request
   */
  updateVerificationTicket: function (req, res, next) {

    if (!req.body.response) {
      let err = new Error('Invalid FreshDesk WebHook');
      return next(err);
    }

    let params = {
      ticketId: req.body.response.ticket_id,
      userId: req.body.response.user_id,
      verificationStatus: req.body.response.verification_status,
      status: req.body.response.status,
      message: req.body.response.message,
      agentName: req.body.response.agent_name,
      agentEmail: req.body.response.agent_email,
      fleetOwnerMessages: {}
    };
    const verificationMessagesMapping = FleetOwnerConstants.verificationMessagesMapping;

    for (let key in verificationMessagesMapping) {
      params.fleetOwnerMessages[key] = req.body.response[verificationMessagesMapping[key].freshDeskKey]
        || UtilUtil.convertSnakeToWords(verificationMessagesMapping[key].onboardingType.toLowerCase()) + ' is incorrect';
    }

    FreshDeskVerification.updateVerificationRequestFromFreshDesk(params, function (err, freshDeskVerificationRequest) {
      if (err || !freshDeskVerificationRequest) {
        err = err || new Error('Error updating verification request for fleet owner');
        logger.debug(err);
        return next(err);
      }
      req.freshDeskVerificationRequest = freshDeskVerificationRequest;
      next();
    })
  },

  isTicketVerified: function (req, res, next) {

    if (!req.freshDeskVerificationRequest || !req.freshDeskVerificationRequest.is_verified) {
      let err = new Error('Ticket not verified');
      logger.debug(err);
      err.httpCode = 200;
      return next(err);
    }
    next()
  }
};

module.exports = FreshDeskController;
