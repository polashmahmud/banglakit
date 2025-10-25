import { convertToBanglaNumber, convertToEnglishNumber, getFormattedBanglaDate, getBanglaMonth, getBanglaDay, getBanglaYear, getEnglishToBanglaYear, getBanglaToEnglishYear, getBanglaNewYearDate, isBanglaLeapYear, getBanglaYearInfo } from './utils/index.js';
export function useBanglaDate() {
    const getTodayInBangla = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth();
        const dayName = today.getDay();
        return `${convertToBanglaNumber(day)} ${getBanglaMonth(month + 1)}, ${getBanglaDay(dayName + 1)}`;
    };
    return {
        getTodayInBangla,
        convertToBanglaNumber,
        convertToEnglishNumber,
        getFormattedBanglaDate,
        getBanglaMonth,
        getBanglaDay,
        getBanglaYear,
        getEnglishToBanglaYear,
        getBanglaToEnglishYear,
        getBanglaNewYearDate,
        isBanglaLeapYear,
        getBanglaYearInfo
    };
}
