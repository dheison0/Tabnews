import axios from "axios";
import { formatDate } from "../../utils";

function errorHandler(error) {
  let errorMessage;
  if (error.code == axios.AxiosError.ERR_NETWORK) {
    errorMessage = "Falha ao conectar com o servidor!";
  } else if (error.code == axios.AxiosError.ERR_BAD_RESPONSE) {
    errorMessage = "A resposta do servidor não é válida!";
  } else if (error.response) {
    switch (error.response.status) {
      case 403:
        errorMessage = "Acesso negado!";
        break
      case 404:
        errorMessage = "Página não encontrada!";
        break;
      case 500:
        errorMessage = "Ocorreu um erro interno no servidor!";
        break;
      case 502:
        errorMessage = "Não foi possivel alcançar o servidor!";
        break;
      default:
        errorMessage = "Erro desconhecido no servidor!\n";
        errorMessage += `Código de status ${error.response.status}`;
    }
  } else {
    errorMessage = `Erro desconhecido: ${error.message}`;
  }
  return errorMessage;
}

function prepareArticleData(article) {
  const formatedDate = formatDate(article.published_at);
  return {
    id: article.id,
    title: article.title,
    owner: article.owner_username,
    tabcoins: article.tabcoins,
    published: formatedDate
  }
}

export { errorHandler, prepareArticleData };