import { convertToBanglaNumber } from './numbers.js';
/**
 * Get the current Bangla (Bengali) year based on Gregorian calendar date.
 * বাংলা সাল (বঙ্গাব্দ) ক্যালকুলেটর
 */
export const getBanglaYear = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // 1–12
    const date = today.getDate();
    // বাংলা নববর্ষ শুরু ১৪ এপ্রিল থেকে
    const isBeforeBoishakh = month < 4 || (month === 4 && date < 14);
    const banglaYear = year - (isBeforeBoishakh ? 594 : 593);
    return convertToBanglaNumber(banglaYear);
};
