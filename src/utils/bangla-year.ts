import { convertToBanglaNumber, convertToEnglishNumber } from './numbers.js';

/**
 * Get the current Bangla (Bengali) year based on Gregorian calendar date.
 * বাংলা সাল (বঙ্গাব্দ) ক্যালকুলেটর
 */
export const getBanglaYear = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // 1–12
    const date = today.getDate();

    // বাংলা নববর্ষ শুরু ১৪ এপ্রিল থেকে
    const isBeforeBoishakh = month < 4 || (month === 4 && date < 14);
    const banglaYear = year - (isBeforeBoishakh ? 594 : 593);

    return convertToBanglaNumber(banglaYear);
};

export const getEnglishToBanglaYear = (englishYear: number, month = 4, date = 14): string => {
    const isBeforeBoishakh = month < 4 || (month === 4 && date < 14);
    const banglaYear = englishYear - (isBeforeBoishakh ? 594 : 593);
    return convertToBanglaNumber(banglaYear);
};

export const getBanglaToEnglishYear = (banglaYear: number): string => {
    const englishYear = banglaYear + 593;
    return englishYear.toString();
};

export const getBanglaNewYearDate = (englishYear?: number): string => {
    const year = englishYear ?? new Date().getFullYear();
    const newYearDate = new Date(year, 3, 14);
    return newYearDate.toDateString();
};

export const isBanglaLeapYear = (banglaYear?: number): boolean => {
    const today = new Date();
    const year = banglaYear ? parseInt(convertToEnglishNumber(banglaYear.toString())) + 593 : today.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const getBanglaYearInfo = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const isBeforeBoishakh = month < 4 || (month === 4 && date < 14);
    const banglaYear = year - (isBeforeBoishakh ? 594 : 593);

    return {
        englishYear: year,
        banglaYear: convertToBanglaNumber(banglaYear),
        newYearDate: `১৪ এপ্রিল, ${convertToBanglaNumber(year)}`,
        isLeapYear: isBanglaLeapYear(banglaYear),
    };
};

