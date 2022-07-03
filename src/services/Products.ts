import { api } from './Api'

export function getProductsByTextWithPagination(text: string, offset = 1) {
  return api.get(`api/items?q=${text}&offset=${offset}`).then(response => response.data)
}

export function getProductById(id: string) {
  return api.get(`api/items/${id}`).then(response => response.data)
}
