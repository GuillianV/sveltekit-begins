import traductions from './traductions.json'

let actualLang = 'fr'
let validLangs = Object.keys(traductions)

function getValidLangs(lang) {
    if(!validLangs.includes(lang))
      return false

    actualLang = lang
    return true
}

function getTraduction(key) {
    let actualLangTranslation = traductions[actualLang]
    if(actualLangTranslation == null)
        throw new Error("Lang not found")

    let translation = actualLangTranslation[key]
    if(translation == null)
        throw new Error("Translation not found")
        
    return translation

}




export { getValidLangs, getTraduction } 