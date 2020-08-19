let chauffeurLanguageMapping = {
    "en": "English",
    "hi": "Hindi",
    "ml": "Malayalam",
    "ta": "Tamil",
    "mr": "Marathi",
    "bn": "Bengali",
    "kn": "Kannada",
    "te": "Telugu"
  }
  let language = ["en","kn","te","ta","bn"]
  let convertEnumToLanguage = function(languages=[]){
    console.log(languages)
    let lastLanguage = chauffeurLanguageMapping[languages.pop()];
    if (languages.length < 1) return lastLanguage;
    console.log("lastLanguage: "+lastLanguage)
    return (languages.map((language) => {
      return chauffeurLanguageMapping[language]
    }).join(', ') + ' and ' + lastLanguage);
  }
  
  console.log(convertEnumToLanguage())