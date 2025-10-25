import { convertToBanglaNumber } from './numbers.js';
/**
 * Converts English 24-hour time (HH:mm) to Bangla time with AM/PM context.
 * Example:
 * convertToBanglaTime("14:35") ➜ "দুপুর ২:৩৫"
 * convertToBanglaTime("07:10") ➜ "সকাল ৭:১০"
 * convertToBanglaTime("19:45") ➜ "রাত ৭:৪৫"
 */
export const convertToBanglaTime = (time) => {
    if (!/^\d{1,2}:\d{2}$/.test(time)) {
        throw new Error("Invalid time format. Use 'HH:mm' (24-hour).");
    }
    let [hour, minute] = time.split(":").map(num => parseInt(num, 10));
    let period = "";
    // Determine period in Bangla
    if (hour >= 4 && hour < 12)
        period = "সকাল";
    else if (hour >= 12 && hour < 15)
        period = "দুপুর";
    else if (hour >= 15 && hour < 18)
        period = "বিকেল";
    else if (hour >= 18 && hour < 20)
        period = "সন্ধ্যা";
    else
        period = "রাত";
    // Convert to 12-hour format
    const twelveHour = hour % 12 === 0 ? 12 : hour % 12;
    const banglaHour = convertToBanglaNumber(twelveHour);
    const banglaMinute = convertToBanglaNumber(minute.toString().padStart(2, "0"));
    return `${period} ${banglaHour}:${banglaMinute}`;
};
