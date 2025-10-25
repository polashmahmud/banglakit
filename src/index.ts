export function useBanglaDate() {
    const banglaMonths = [
        'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
        'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
    ];

    const banglaDays = [
        'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'
    ];

    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

    const convertToBanglaNumber = (num: number): string => {
        return num
            .toString()
            .split('')
            .map(digit => (/\d/.test(digit) ? banglaDigits[parseInt(digit)] : digit))
            .join('');
    };

    const getTodayInBangla = (): string => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth();
        const dayName = today.getDay();

        return `${convertToBanglaNumber(day)} ${banglaMonths[month]}, ${banglaDays[dayName]}`;
    };

    return { getTodayInBangla, convertToBanglaNumber };
}
