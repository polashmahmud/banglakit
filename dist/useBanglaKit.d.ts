import { convertToBanglaWords } from './utils/index.js';
export declare function useBanglaKit(): {
    getTodayInBangla: () => string;
    convertToBanglaNumber: (num: number | string) => string;
    convertToEnglishNumber: (str: string) => string;
    getFormattedBanglaDate: (format?: string) => string;
    getBanglaMonth: (monthIndex: number) => string;
    getBanglaDay: (dayIndex: number) => string;
    getBanglaYear: () => string;
    getEnglishToBanglaYear: (englishYear: number, month?: number, date?: number) => string;
    getBanglaToEnglishYear: (banglaYear: number) => string;
    getBanglaNewYearDate: (englishYear?: number) => string;
    isBanglaLeapYear: (banglaYear?: number) => boolean;
    getBanglaYearInfo: () => {
        englishYear: number;
        banglaYear: string;
        newYearDate: string;
        isLeapYear: boolean;
    };
    getBanglaDateObject: (dateInput?: Date) => {
        day: string;
        month: string;
        weekday: string;
        year: string;
    };
    getBanglaCalendarDate: () => string;
    getBanglaDateRange: (startDate: string | Date, endDate: string | Date) => string;
    convertToBanglaTime: (time: string) => string;
    convertToBanglaOrdinal: (num: number) => string;
    convertToBanglaWords: typeof convertToBanglaWords;
};
