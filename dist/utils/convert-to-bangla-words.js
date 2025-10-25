export function convertToBanglaWords(amount) {
    const banglaNumbers = ["শূন্য", "এক", "দুই", "তিন", "চার", "পাঁচ", "ছয়", "সাত", "আট", "নয়"];
    const teenMap = {
        10: "দশ", 11: "এগারো", 12: "বারো", 13: "তেরো", 14: "চৌদ্দ",
        15: "পনেরো", 16: "ষোলো", 17: "সতেরো", 18: "আঠারো", 19: "উনিশ"
    };
    const tens = {
        2: "কুড়ি", 3: "তিরিশ", 4: "চল্লিশ", 5: "পঞ্চাশ",
        6: "ষাট", 7: "সত্তর", 8: "অশি", 9: "নব্বই"
    };
    const twoDigitToWord = (num) => {
        if (num === 0)
            return "";
        if (num < 10)
            return banglaNumbers[num];
        if (num < 20)
            return teenMap[num];
        const ten = Math.floor(num / 10);
        const one = num % 10;
        return one ? `${tens[ten]} ${banglaNumbers[one]}` : tens[ten];
    };
    const threeDigitToWord = (num) => {
        if (num === 0)
            return "";
        if (num < 100)
            return twoDigitToWord(num);
        const hundred = Math.floor(num / 100);
        const rest = num % 100;
        return `${banglaNumbers[hundred]} শত${rest ? ` ${twoDigitToWord(rest)}` : ""}`;
    };
    const integerToBanglaWords = (num) => {
        if (num === 0)
            return "শূন্য";
        let result = [];
        const crore = Math.floor(num / 10000000);
        const lakh = Math.floor((num % 10000000) / 100000);
        const thousand = Math.floor((num % 100000) / 1000);
        const hundred = num % 1000;
        if (crore)
            result.push(integerToBanglaWords(crore) + " কোটি");
        if (lakh)
            result.push(integerToBanglaWords(lakh) + " লক্ষ");
        if (thousand)
            result.push(integerToBanglaWords(thousand) + " হাজার");
        if (hundred)
            result.push(threeDigitToWord(hundred));
        return result.join(" ").trim();
    };
    // 🔹 হাজারের নিচের সংখ্যাগুলো সঠিকভাবে হ্যান্ডেল করার ফিক্স
    const refinedIntegerToBanglaWords = (num) => {
        if (num < 1000)
            return threeDigitToWord(num);
        if (num < 100000) {
            const thousand = Math.floor(num / 1000);
            const rest = num % 1000;
            return `${integerToBanglaWords(thousand)} হাজার${rest ? " " + threeDigitToWord(rest) : ""}`.trim();
        }
        return integerToBanglaWords(num);
    };
    // 🪙 মূল কাজ শুরু
    const [takaPart, poishaPart] = amount.toString().split(".");
    const taka = parseInt(takaPart, 10);
    let words = `${refinedIntegerToBanglaWords(taka)} টাকা`;
    if (poishaPart) {
        const poisha = parseInt(poishaPart.substring(0, 2), 10);
        if (poisha > 0) {
            words += ` ${integerToBanglaWords(poisha)} পয়সা`;
        }
    }
    return words.trim();
}
