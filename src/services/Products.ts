import { api } from './Api'

export function getProductsByText(text: string) {
  return api.get(`api/items?q=${text}`).then(response => response.data)
}

export function getProductById(id: string) {
  return api.get(`api/items/${id}`).then(response => response.data)
}
