


function GetCodes(){
    return ['fr','en','es']
}

function GetTraductions (traductions, key) {
    return typeof traductions[key] != 'undefined' ? traductions[key] : `Empty traduction ${key}` 
}


export {  GetTraductions,GetCodes } 