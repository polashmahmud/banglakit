/**
 * Returns Bangla date as an object.
 * If no date is provided, it returns the current Bangla date.
 *
 * Example:
 * getBanglaDateObject(); // current date
 * getBanglaDateObject(new Date("2025-05-12")); // custom date
 */
export declare const getBanglaDateObject: (dateInput?: Date) => {
    day: string;
    month: string;
    weekday: string;
    year: string;
};
