/**
 * Converts English 24-hour time (HH:mm) to Bangla time with AM/PM context.
 * Example:
 * convertToBanglaTime("14:35") ➜ "দুপুর ২:৩৫"
 * convertToBanglaTime("07:10") ➜ "সকাল ৭:১০"
 * convertToBanglaTime("19:45") ➜ "রাত ৭:৪৫"
 */
export declare const convertToBanglaTime: (time: string) => string;
