/**
 * @param {string} param
 */
import { getValidLangs } from "$lib/lang/traductions"
export function match(param){
   let valid = RegExp('^[a-z]{2}$').test(param)
   if(!valid)
      return false
   
   if(!getValidLangs(param))
      return false

   return valid
}