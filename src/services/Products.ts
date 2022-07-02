import { api } from './Api'

export function getProductsByText(text: string) {
  return api.get(`api/items?q=${text}`)
}

export function getProductById(id: string) {
  return api.get(`api/items/${id}`)
}
