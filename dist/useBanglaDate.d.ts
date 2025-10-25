export declare function useBanglaDate(): {
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
    getBanglaDateObject: () => {
        day: string;
        month: string;
        weekday: string;
        year: string;
    };
};
