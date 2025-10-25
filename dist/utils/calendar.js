export const banglaMonths = [
    'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
    'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
];
export const banglaDays = [
    'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'
];
export const getBanglaMonth = (monthIndex) => {
    var _a;
    const index = monthIndex - 1;
    return (_a = banglaMonths[index]) !== null && _a !== void 0 ? _a : '';
};
export const getBanglaDay = (dayIndex) => {
    var _a;
    const index = dayIndex - 1;
    return (_a = banglaDays[index]) !== null && _a !== void 0 ? _a : '';
};
