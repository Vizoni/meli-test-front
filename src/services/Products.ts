import { api } from './Api'

export function getProductsByText (text: String) {
//   return api.get(`api/items?q=${text}`)
  return api.get(`sites/MLA/search?q=${text}&limit=4`)
}
