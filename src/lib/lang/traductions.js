

function GetTraductions (traductions, key) {
    return typeof traductions[key] != 'undefined' ? traductions[key] : `Empty traduction ${key}` 
}

export {  GetTraductions } 