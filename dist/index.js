export function useBanglaDate() {
    const banglaMonths = [
        'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
        'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
    ];
    const banglaDays = [
        'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'
    ];
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const convertToBanglaNumber = (num) => {
        const str = num.toString();
        return str
            .split('')
            .map(digit => (/\d/.test(digit) ? banglaDigits[parseInt(digit, 10)] : digit))
            .join('');
    };
    const getTodayInBangla = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth();
        const dayName = today.getDay();
        return `${convertToBanglaNumber(day)} ${banglaMonths[month]}, ${banglaDays[dayName]}`;
    };
    const getFormattedBanglaDate = (format = "D MMMM, dddd, YYYY") => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth();
        const dayName = today.getDay();
        const year = today.getFullYear();
        // monthIndex is 0–11 → convert to 1–12
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
        // Sort tokens by length (replace longer ones first)
        const sortedTokens = Object.keys(tokens).sort((a, b) => b.length - a.length);
        let result = format;
        for (const token of sortedTokens) {
            const regex = new RegExp(token, "g");
            result = result.replace(regex, tokens[token]);
        }
        return result;
    };
    const getBanglaMonth = (monthIndex) => {
        var _a;
        const index = monthIndex - 1;
        return (_a = banglaMonths[index]) !== null && _a !== void 0 ? _a : '';
    };
    const getBanglaDay = (dayIndex) => {
        var _a;
        const index = dayIndex - 1;
        return (_a = banglaDays[index]) !== null && _a !== void 0 ? _a : '';
    };
    const convertToEnglishNumber = (str) => {
        const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        return str
            .split('')
            .map(char => {
            const index = banglaDigits.indexOf(char);
            return index !== -1 ? englishDigits[index] : char;
        })
            .join('');
    };
    return {
        getTodayInBangla, convertToBanglaNumber, getFormattedBanglaDate, getBanglaMonth,
        getBanglaDay, convertToEnglishNumber
    };
}
