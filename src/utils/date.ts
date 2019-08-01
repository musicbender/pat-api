import * as moment from 'moment';

export const addToDuration = (input: string = '00:00:00', inputTotal: string = '00:00:00'): string => {
  if (!moment.isDuration(moment.duration(inputTotal))) {
    throw new Error('Total must be duration string');
  }

  let newDuration = input;
  let total = inputTotal;

  if (newDuration === "0") {
    newDuration = '00:00:00';
  }

  // if only minutes/seconds provided to input
  if (newDuration.length === 5 && newDuration.indexOf(':') === 2) {
    newDuration = '00:' + newDuration;
  }

  // if only minutes/seconds provided to total
  if (total.length === 5 && total.indexOf(':') === 2) {
    total = '00:' + total;
  }

  if (!moment.isDuration(moment.duration(newDuration))) {
    return total;
  }

  const sum = moment.duration(total).add(moment.duration(newDuration));
  return moment.utc(sum.asMilliseconds()).format('HH:mm:ss');
}
