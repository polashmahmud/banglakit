import { convertToBanglaNumber } from './numbers.js';
import { banglaMonths, banglaDays } from './calendar.js';
export const getFormattedBanglaDate = (format = "D MMMM, dddd, YYYY") => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const dayName = today.getDay();
    const year = today.getFullYear();
    const monthNumber = month + 1;
    const tokens = {
        "DD": convertToBanglaNumber(day.toString().padStart(2, '0')),
        "D": convertToBanglaNumber(day),
        "MMMM": banglaMonths[month],
        "MMM": banglaMonths[month].slice(0, 3),
        "MM": convertToBanglaNumber(monthNumber.toString().padStart(2, '0')),
        "M": convertToBanglaNumber(monthNumber),
        "YYYY": convertToBanglaNumber(year),
        "dddd": banglaDays[dayName]
    };
    const sortedTokens = Object.keys(tokens).sort((a, b) => b.length - a.length);
    let result = format;
    for (const token of sortedTokens) {
        const regex = new RegExp(token, "g");
        result = result.replace(regex, tokens[token]);
    }
    return result;
};
