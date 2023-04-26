import moment from 'moment'
import 'moment/locale/pt'

moment.locale('pt')

export const humanReadableDate = (time) => moment(time).fromNow()
