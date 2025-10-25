/**
 * সংখ্যাকে বাংলায় কথায় রূপান্তর করে (টাকা ও পয়সা সহ)
 * উদাহরণ:
 * convertToBanglaWords(2025.5) -> "দুই হাজার পঁচিশ টাকা পঞ্চাশ পয়সা"
 * convertToBanglaWords(20987.88) -> "বিশ হাজার নয় শত সাতাশি টাকা আটাশি পয়সা"
 */

export function convertToBanglaWords(amount: number | string): string {
    const wordsBelowHundred: Record<number, string> = {
        0: "শূন্য", 1: "এক", 2: "দুই", 3: "তিন", 4: "চার", 5: "পাঁচ", 6: "ছয়", 7: "সাত", 8: "আট", 9: "নয়",
        10: "দশ", 11: "এগারো", 12: "বারো", 13: "তেরো", 14: "চৌদ্দ", 15: "পনেরো", 16: "ষোলো", 17: "সতেরো",
        18: "আঠারো", 19: "উনিশ", 20: "বিশ", 21: "একুশ", 22: "বাইশ", 23: "তেইশ", 24: "চব্বিশ", 25: "পঁচিশ",
        26: "ছাব্বিশ", 27: "সাতাশ", 28: "আটাশ", 29: "উনত্রিশ", 30: "তিরিশ", 31: "একত্রিশ", 32: "বত্রিশ",
        33: "তেত্রিশ", 34: "চৌত্রিশ", 35: "পঁয়ত্রিশ", 36: "ছত্রিশ", 37: "সাঁইত্রিশ", 38: "আটত্রিশ",
        39: "উনচল্লিশ", 40: "চল্লিশ", 41: "একচল্লিশ", 42: "বিয়াল্লিশ", 43: "তেতাল্লিশ", 44: "চুয়াল্লিশ",
        45: "পঁয়তাল্লিশ", 46: "ছেচল্লিশ", 47: "সাতচল্লিশ", 48: "আটচল্লিশ", 49: "উনপঞ্চাশ", 50: "পঞ্চাশ",
        51: "একান্ন", 52: "বায়ান্ন", 53: "তিপ্পান্ন", 54: "চুয়ান্ন", 55: "পঞ্চান্ন", 56: "ছাপ্পান্ন",
        57: "সাতান্ন", 58: "আটান্ন", 59: "উনষাট", 60: "ষাট", 61: "একষট্টি", 62: "বাষট্টি", 63: "তেষট্টি",
        64: "চৌষট্টি", 65: "পঁয়ষট্টি", 66: "ছেষট্টি", 67: "সাতষট্টি", 68: "আটষট্টি", 69: "উনসত্তর",
        70: "সত্তর", 71: "একাত্তর", 72: "বাহাত্তর", 73: "তিহাত্তর", 74: "চুয়াত্তর", 75: "পঁচাত্তর",
        76: "ছিয়াত্তর", 77: "সাতাত্তর", 78: "আটাত্তর", 79: "উনআশি", 80: "আশি", 81: "একাশি", 82: "বিরাশি",
        83: "তিরাশি", 84: "চুরাশি", 85: "পঁচাশি", 86: "ছিয়াশি", 87: "সাতাশি", 88: "আটাশি", 89: "উননব্বই",
        90: "নব্বই", 91: "একানব্বই", 92: "বিরানব্বই", 93: "তিরানব্বই", 94: "চুরানব্বই", 95: "পঁচানব্বই",
        96: "ছিয়ানব্বই", 97: "সাতানব্বই", 98: "আটানব্বই", 99: "নিরানব্বই"
    };

    const numberToWords = (num: number): string => {
        if (num === 0) return "শূন্য";
        if (num < 100) return wordsBelowHundred[num];

        let result: string[] = [];

        const crore = Math.floor(num / 10000000);
        const lakh = Math.floor((num % 10000000) / 100000);
        const thousand = Math.floor((num % 100000) / 1000);
        const hundred = Math.floor((num % 1000) / 100);
        const rest = num % 100;

        if (crore) result.push(numberToWords(crore) + " কোটি");
        if (lakh) result.push(numberToWords(lakh) + " লক্ষ");
        if (thousand) result.push(numberToWords(thousand) + " হাজার");
        if (hundred) result.push(wordsBelowHundred[hundred] + " শত");
        if (rest) result.push(wordsBelowHundred[rest]);

        return result.join(" ").trim();
    };

    // 🪙 টাকার ও পয়সার অংশ আলাদা করা
    const [takaPart, poishaPartRaw] = amount.toString().split(".");

    const taka = parseInt(takaPart, 10);
    let words = `${numberToWords(taka)} টাকা`;

    if (poishaPartRaw) {
        // ঠিক দুই ডিজিট পর্যন্ত নাও (যেমন 5 → 50, 05 → 5)
        let poishaFixed = poishaPartRaw.padEnd(2, "0").slice(0, 2);
        const poisha = parseInt(poishaFixed, 10);

        if (poisha > 0) {
            words += ` ${numberToWords(poisha)} পয়সা`;
        }
    }

    return words.trim();
}
