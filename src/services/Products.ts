import { api } from './Api'

export function getProductsByTextWithPagination(text: string, offset: number) {
  return api.get(`api/items?q=${text}&offset=${offset}`).then(response => response.data)
}

export function getProductById(id: string) {
  return api.get(`api/items/${id}`).then(response => response.data)
}
