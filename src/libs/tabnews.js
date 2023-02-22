import axios, { AxiosError } from 'axios'

const homepageStrategies = [
  { title: "Relevantes", value: 'relevant' },
  { title: "Recentes", value: 'new' },
  { title: "Antigos", value: 'old' }
];

function findStrategyInformationsByValue(value) {
  const strategy = homepageStrategies.filter((item) => item.value == value);
  return strategy[0] || null;
}

class TabNews {
  baseUrl = "https://www.tabnews.com.br/api/v1"

  async apiGet(path, params) {
    const response = await axios.get(`${this.baseUrl}/${path}`, { params });
    return response.data;
  }

  async getContents(page, strategy) {
    const response = await this.apiGet("contents", { page, strategy, per_page: 30 });
    return response;
  }

  async getPost(user, postSlug) {
    const response = this.apiGet(`contents/${user}/${postSlug}`);
    return response
  }
}

function errorHandler(err) {
  switch (err.code) {
    case AxiosError.ERR_NETWORK:
      return `Não foi possivel alcançar a API!`;
    case AxiosError.ERR_BAD_RESPONSE:
      return "A resposta enviada pelo servidor não é válida!";
    case AxiosError.ERR_NOT_SUPPORT:
      return "O pedido enviado não é suportado no servidor!";
  }
  switch (err.response.status) {
    case 503:
      return "O servidor não conseguiu processar o pedido!";
    case 502:
      return "O gateway não conseguiu acessar o servidor principal!";
    case 500:
      return "Ocorreu um erro interno no servidor!";
    case 404:
      return "A página desejada não foi encontrada no servidor!";
    case 403:
      return "O acesso a essa página foi negado!";
    case 401:
      return "Você não tem alteração para acessar!";
    case 400:
      return "O pedido não foi bem formatado!";
  }
  return `Erro desconhecido!\n${toString(err)}`;
}


export { TabNews, homepageStrategies, findStrategyInformationsByValue, errorHandler };