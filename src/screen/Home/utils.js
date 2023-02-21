import moment from 'moment';
import 'moment/locale/pt';

moment.locale('pt');

const prepareData = (item) => ({
  title: item.title,
  owner: item.owner_username,
  slug: item.slug,
  tabcoins: item.tabcoins,
  time: moment(item.created_at).fromNow()
});


export { prepareData };