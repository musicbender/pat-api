import * as moment from 'moment';

export const formatDuration = (duration: moment.Duration): string => {
  if (!duration || !moment.isDuration(duration)) {
    throw new Error('Must give duration paramter');
  }

  const time = moment.utc(duration.asMilliseconds()).format('HH:mm:ss')
  const days = duration.days();
  return `${days}.${time}`;
}

export const addToDuration = (input: string = '0.00:00:00', inputTotal: string = '0.00:00:00'): string => {
  if (!moment.isDuration(moment.duration(inputTotal))) {
    throw new Error('Total must be duration string');
  }

  let newDuration = input;
  let total = inputTotal;

  if (newDuration === "0") {
    newDuration = '0.00:00:00';
  }

  // missing a leading 0
  if (newDuration.length === 4 && newDuration.indexOf(':') === 1) {
    newDuration = '0' + newDuration;
  }

  // missing a leading 0
  if (newDuration.length === 7 && newDuration.indexOf(':') === 1) {
    newDuration = '0' + newDuration;
  }

  // if only minutes/seconds provided to input
  if (newDuration.length === 5 && newDuration.indexOf(':') === 2) {
    newDuration = '0.00:' + newDuration;
  }

  // if only minutes/seconds provided to total
  if (total.length === 5 && total.indexOf(':') === 2) {
    total = '0.00:' + total;
  }

  if (!moment.isDuration(moment.duration(newDuration))) {
    return total;
  }

  const sum = moment.duration(total).add(moment.duration(newDuration));
  return formatDuration(sum);
}
