import * as moment from 'moment';

export const isWithinInterval = (interval: moment.unitOfTime.StartOf, date: string, sampledOn: string): boolean => {
    if (!interval) return true;

    const date1 = moment(date, 'YYYY-MM-DD');
    const date2 = moment(sampledOn, 'YYYY-MM-DD');

    return moment(date1).isSame(moment(date2), 'day');
}
