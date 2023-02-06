import axios from "axios";
import moment from "moment";
import { apiURL } from "./init";

const SECOND = 1000; // ms
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function formatDate(date) {
  const publishedTime = new Date(date).getTime();
  const now = new Date().getTime();
  const elapsedTime = now - publishedTime;
  let timeString = `há `;
  if (elapsedTime >= (30 * DAY)) {
    timeString = moment(date).format('HH:mm DD/mm');
  } else if (elapsedTime >= DAY) {
    const days = Math.round(elapsedTime / DAY);
    timeString += `${days} dias`;
  } else if (elapsedTime >= HOUR) {
    const hours = Math.round(elapsedTime / HOUR);
    timeString += `${hours} horas`;
  } else if (elapsedTime >= MINUTE) {
    const minutes = Math.round(elapsedTime / MINUTE);
    timeString += `${minutes} minutos`;
  } else {
    timeString += "poucos segundos";
  }
  return timeString;
}

async function getArticleList(page, strategy) {
  const response = await axios.get(
    `${apiURL}/contents`,
    {
      params: {
        page: page,
        strategy: strategy,
        per_page: 45
      }
    }
  );
  return response.data;
}

export { formatDate, getArticleList };