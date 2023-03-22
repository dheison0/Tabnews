import axios, { AxiosError } from 'axios'

const strategy = (title, value) => ({ title, value })

export const homepageStrategies = [
  strategy('Relevantes', 'relevant'),
  strategy('Recentes', 'new'),
  strategy('Antigos', 'old')
]

export function findStrategyInformationByValue (value) {
  return homepageStrategies.find((item) => item.value === value)
}

export class TabNews {
  baseUrl = 'https://www.tabnews.com.br/api/v1'

  async apiGet (path, params) {
    const response = await axios.get(`${this.baseUrl}/${path}`, { params })
    return response.data
  }

  async getContents (page, strategy) {
    const response = await this.apiGet('contents', { page, strategy, per_page: 30 })
    return response
  }

  async getPost (user, slug) {
    const response = await this.apiGet(`contents/${user}/${slug}`)
    return response
  }

  async getComments (user, slug) {
    const response = await this.apiGet(`contents/${user}/${slug}/children`)
    return response
  }
}

export function errorHandler (err) {
  switch (err.code) {
    case AxiosError.ERR_NETWORK:
      return 'Não foi possível alcançar a API!'
    case AxiosError.ERR_BAD_RESPONSE:
      return 'A resposta enviada pelo servidor não é válida!'
    case AxiosError.ERR_NOT_SUPPORT:
      return 'O pedido enviado não é suportado no servidor!'
  }
  switch (err.response?.status) {
    case 503:
      return 'O servidor não conseguiu processar o pedido!'
    case 502:
      return 'O gateway não conseguiu acessar o servidor principal!'
    case 500:
      return 'Ocorreu um erro interno no servidor!'
    case 404:
      return 'A página desejada não foi encontrada no servidor!'
    case 403:
      return 'O acesso a essa página foi negado!'
    case 401:
      return 'Você não tem alteração para acessar!'
    case 400:
      return 'O pedido não foi bem formatado!'
  }
  return `Erro desconhecido!\n${toString(err)}`
}
