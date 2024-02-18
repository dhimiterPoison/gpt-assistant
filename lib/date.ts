import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { it, enUS, es } from 'date-fns/locale';

export const formatDate = (date: Date) => {
	return format(date, 'eeee dd MMMM', { locale: enUS });
	//=> "Today is a Sunday"
};

formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });
//=> "3 days ago"

formatRelative(subDays(new Date(), 3), new Date());
//=> "last Friday at 7:26 p.m."

formatRelative(subDays(new Date(), 3), new Date(), { locale: enUS });
//=> "el viernes pasado a las 19:26"
