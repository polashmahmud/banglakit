import { convertToBanglaNumber } from './numbers.js';
import { banglaMonths, banglaDays } from './calendar.js';

/**
 * Returns Bangla date as an object.
 * If no date is provided, it returns the current Bangla date.
 *
 * Example:
 * getBanglaDateObject(); // current date
 * getBanglaDateObject(new Date("2025-05-12")); // custom date
 */
export const getBanglaDateObject = (dateInput?: Date) => {
    const today = dateInput ?? new Date();

    const day = today.getDate();
    const month = today.getMonth();
    const weekday = today.getDay();
    const year = today.getFullYear();

    // বাংলা বছর নির্ধারণ (১৪ এপ্রিল থেকে শুরু)
    const isBeforeBoishakh = month < 3 || (month === 3 && day < 14);
    const banglaYear = year - (isBeforeBoishakh ? 594 : 593);

    return {
        day: convertToBanglaNumber(day),
        month: banglaMonths[month],
        weekday: banglaDays[weekday],
        year: convertToBanglaNumber(banglaYear)
    };
};
