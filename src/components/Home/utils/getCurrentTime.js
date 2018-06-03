import moment from 'moment';
import { pipe } from 'ramda';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm';
const TIME_FORMAT = 'h:mm';

// export const initCurrentTimeInterval = () => {
//   setInterval(getCurrentTime, 1000);
// };

const getCurrentTime = (format = DATE_FORMAT) => {
  return pipe(getUtcDate, formatUtcDate, getLocalTime)(format);
};

const getUtcDate = (format) => moment.utc().format(format);

const formatUtcDate = (date) => moment.utc(date).toDate();

const getLocalTime = (date) =>
  moment(date)
    .local()
    .format(TIME_FORMAT);

export default getCurrentTime;
