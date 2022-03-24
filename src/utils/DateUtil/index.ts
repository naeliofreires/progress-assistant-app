import { format, parseISO } from 'date-fns';

function formatDateToDayMonthYear(date: string) {
  return format(parseISO(date), 'PPP');
}

export const DateUtil = {
  formatDateToDayMonthYear,
};
