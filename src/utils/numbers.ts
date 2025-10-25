const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const convertToBanglaNumber = (num: number | string): string => {
    const str = num.toString();
    return str
        .split('')
        .map(digit => (/\d/.test(digit) ? banglaDigits[parseInt(digit, 10)] : digit))
        .join('');
};

export const convertToEnglishNumber = (str: string): string => {
    return str
        .split('')
        .map(char => {
            const index = banglaDigits.indexOf(char);
            return index !== -1 ? englishDigits[index] : char;
        })
        .join('');
};
