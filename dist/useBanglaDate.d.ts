export declare function useBanglaDate(): {
    getTodayInBangla: () => string;
    convertToBanglaNumber: (num: number | string) => string;
    convertToEnglishNumber: (str: string) => string;
    getFormattedBanglaDate: (format?: string) => string;
    getBanglaMonth: (monthIndex: number) => string;
    getBanglaDay: (dayIndex: number) => string;
};
