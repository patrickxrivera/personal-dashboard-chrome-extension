import moment from 'moment';
import { pipe } from 'ramda';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm';
const CURRENT_TIME_FORMAT = 'h:mm';
const MILITARY_TIME_FORMAT = 'H';

const getTime = (timeType) => () =>
  pipe(getUtcDate, formatUtcDate, getLocalTime(timeType))(DATE_FORMAT);

const getUtcDate = (format) => moment.utc().format(format);

const formatUtcDate = (date) => moment.utc(date).toDate();

const getLocalTime = (timeType) => (date) =>
  moment(date)
    .local()
    .format(timeType);

export const getCurrentTime = getTime(CURRENT_TIME_FORMAT);

export const getMilitaryTime = (timeFormat) => getTime(timeFormat)();

export const getGreeting = () => pipe(getMilitaryTime, setGreeting)(MILITARY_TIME_FORMAT);

const setGreeting = (time) => {
  switch (true) {
    case time >= 0 && time < 12:
      return 'morning';
    case time >= 12 && time < 17:
      return 'afternoon';
    case time >= 17 && time < 21:
      return 'evening';
    default:
      return 'night';
  }
};

export default getCurrentTime;
