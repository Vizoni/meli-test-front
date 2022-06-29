import { api } from './Api'

export function getCategoryPathById (id: String) {
//   return api.get(`api/items?q=${id}`)
  return api.get(`categories/${id}`)
}
