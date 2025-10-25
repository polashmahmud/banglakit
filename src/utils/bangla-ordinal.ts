import { convertToBanglaNumber } from './numbers.js';

/**
 * Converts a number into its Bangla ordinal representation.
 * উদাহরণ:
 * convertToBanglaOrdinal(1); // "প্রথম"
 * convertToBanglaOrdinal(3); // "তৃতীয়"
 * convertToBanglaOrdinal(11); // "একাদশ"
 */
export const convertToBanglaOrdinal = (num: number): string => {
    const ordinals: Record<number, string> = {
        1: "প্রথম",
        2: "দ্বিতীয়",
        3: "তৃতীয়",
        4: "চতুর্থ",
        5: "পঞ্চম",
        6: "ষষ্ঠ",
        7: "সপ্তম",
        8: "অষ্টম",
        9: "নবম",
        10: "দশম",
        11: "একাদশ",
        12: "দ্বাদশ",
        13: "ত্রয়োদশ",
        14: "চতুর্দশ",
        15: "পঞ্চদশ",
        16: "ষোড়শ",
        17: "সপ্তদশ",
        18: "অষ্টাদশ",
        19: "ঊনবিংশ",
        20: "বিংশ",
        21: "একবিংশ",
        22: "দ্বাবিংশ",
        23: "ত্রয়োবিংশ",
        24: "চতুর্বিংশ",
        25: "পঞ্চবিংশ",
        30: "ত্রিংশ",
        40: "চতুর্দশ",
        50: "পঞ্চাশতম",
        100: "শততম"
    };

    if (ordinals[num]) {
        return ordinals[num];
    }

    // For large or unknown numbers, fallback to generic pattern:
    // "২১" → "২১তম"
    return `${convertToBanglaNumber(num)}তম`;
};
