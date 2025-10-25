import { convertToBanglaNumber } from './numbers.js';
import { banglaDays } from './calendar.js';
/**
 * Returns the current Bangla calendar date in full sentence format.
 * Example: ৮ কার্তিক ১৪৩২ বঙ্গাব্দ
 */
export const getBanglaCalendarDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // 1–12
    const weekday = banglaDays[today.getDay()];
    const year = today.getFullYear();
    const isBeforeBoishakh = month < 4 || (month === 4 && day < 14);
    const banglaYear = year - (isBeforeBoishakh ? 594 : 593);
    // Approximate mapping of Gregorian → Bangla months
    const banglaMonths = [
        'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
        'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'
    ];
    // Map English month to Bangla month approximately
    const monthMapping = {
        1: 'পৌষ',
        2: 'মাঘ',
        3: 'ফাল্গুন',
        4: day < 14 ? 'চৈত্র' : 'বৈশাখ',
        5: 'জ্যৈষ্ঠ',
        6: 'আষাঢ়',
        7: 'শ্রাবণ',
        8: 'ভাদ্র',
        9: 'আশ্বিন',
        10: 'কার্তিক',
        11: 'অগ্রহায়ণ',
        12: 'পৌষ'
    };
    const banglaMonth = monthMapping[month];
    // Final formatted date
    return `${convertToBanglaNumber(day)} ${banglaMonth} ${convertToBanglaNumber(banglaYear)} বঙ্গাব্দ`;
};
