import { convertToBanglaNumber } from './numbers.js';
import { banglaMonths, banglaDays } from './calendar.js';

/**
 * Returns the current Bangla date as an object
 * {
 *   day: "২৫",
 *   month: "অক্টোবর",
 *   weekday: "শনিবার",
 *   year: "১৪৩২"
 * }
 */
export const getBanglaDateObject = () => {
    const today = new Date();

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
