import * as moment from 'moment';

export const isWithinInterval = (interval: moment.unitOfTime.StartOf, date: string, sampledOn: Date): boolean => {
    if (!interval) return true;
    return moment(date).isSame(sampledOn, interval);
}
