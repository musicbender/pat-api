import * as moment from 'moment';

//--//--//--// private //--//--//--//
const formatInputDuration = (input: string): string => {
  let newDuration = `${input}`;

  switch (true) {
    case newDuration === "0":
      newDuration = '0.00:00:00';
      break;
    case newDuration.length === 4 && newDuration.indexOf(':') === 1:
      newDuration = '0.00:0' + newDuration;
      break;
    case newDuration.length === 7 && newDuration.indexOf(':') === 1:
      newDuration = '0' + newDuration;
      break;
    case newDuration.length === 5 && newDuration.indexOf(':') === 2:
      newDuration = '0.00:' + newDuration;
      break;
    case newDuration.length === 1 && newDuration.indexOf(':') < 0:
      newDuration = '0.00:00:0' + newDuration;
      break;
    case newDuration.length === 2 && newDuration.indexOf(':') < 0:
      newDuration = '0.00:00:' + newDuration;
      break;
  }

  return newDuration;
}

//--//--//--// public //--//--//--//
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

  let newDuration = formatInputDuration(input);
  let total = inputTotal;

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
