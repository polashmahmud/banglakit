/**
 * Get the current Bangla (Bengali) year based on Gregorian calendar date.
 * বাংলা সাল (বঙ্গাব্দ) ক্যালকুলেটর
 */
export declare const getBanglaYear: () => string;
export declare const getEnglishToBanglaYear: (englishYear: number, month?: number, date?: number) => string;
export declare const getBanglaToEnglishYear: (banglaYear: number) => string;
export declare const getBanglaNewYearDate: (englishYear?: number) => string;
export declare const isBanglaLeapYear: (banglaYear?: number) => boolean;
export declare const getBanglaYearInfo: () => {
    englishYear: number;
    banglaYear: string;
    newYearDate: string;
    isLeapYear: boolean;
};
