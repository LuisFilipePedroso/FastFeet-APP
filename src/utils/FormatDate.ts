import { format as dateFormat, parseISO } from 'date-fns';

export function formatDate(date: string) {
  return dateFormat(parseISO(date), 'dd/MM/yyyy');
}
