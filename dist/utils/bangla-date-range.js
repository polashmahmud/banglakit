import { convertToBanglaNumber } from './numbers.js';
import { banglaMonths } from './calendar.js';
/**
 * Returns a Bangla date range between two Gregorian dates.
 * Example: ২৫ অক্টোবর - ১০ নভেম্বর ২০২৫
 */
export const getBanglaDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const startDay = convertToBanglaNumber(start.getDate());
    const endDay = convertToBanglaNumber(end.getDate());
    const startMonth = banglaMonths[start.getMonth()];
    const endMonth = banglaMonths[end.getMonth()];
    const year = convertToBanglaNumber(start.getFullYear());
    // যদি একই মাস হয় → "২৫ - ৩০ অক্টোবর ২০২৫"
    if (start.getMonth() === end.getMonth()) {
        return `${startDay} - ${endDay} ${startMonth} ${year}`;
    }
    // আলাদা মাস হলে → "২৫ অক্টোবর - ১০ নভেম্বর ২০২৫"
    return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${year}`;
};
