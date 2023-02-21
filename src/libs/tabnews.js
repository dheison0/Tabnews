import axios from 'axios'

const homepageStrategies = [
  { title: "Relevantes", value: 'relevant' },
  { title: "Recentes", value: 'new' },
  { title: "Antigos", value: 'old' }
];

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

export { TabNews, homepageStrategies };