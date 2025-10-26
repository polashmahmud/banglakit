# @polashmahmud/banglakit

A lightweight JavaScript utility for displaying Bangla (Bengali) dates and converting English numbers into Bangla digits.
It allows developers to easily localize their applications with Bangla date and number formatting.

---

## Installation

```bash
npm install @polashmahmud/banglakit
# or
yarn add @polashmahmud/banglakit
```

---

## Usage Examples

```ts
import { useBanglaKit } from "@polashmahmud/banglakit";

const { getTodayInBangla } = useBanglaKit();

console.log(getTodayInBangla());
// Output: ২৫ অক্টোবর, শনিবার
```

```ts
const { convertToBanglaNumber } = useBanglaKit();

console.log(convertToBanglaNumber(123));
// Output: ১২৩

console.log(convertToBanglaNumber("2025"));
// Output: ২০২৫

console.log(convertToBanglaNumber("Price: 500 Tk"));
// Output: Price: ৫০০ Tk

console.log(convertToBanglaNumber(3.14));
// Output: ৩.১৪

console.log(convertToBanglaNumber("Phone: 01712345678"));
// Output: Phone: ০১৭১২৩৪৫৬৭৮
```

```ts
const { convertToEnglishNumber } = useBanglaKit();

console.log(convertToEnglishNumber("১২৩"));
// Output: 123

console.log(convertToEnglishNumber("২০২৫"));
// Output: 2025

console.log(convertToEnglishNumber("মূল্য: ৫০০ টাকা"));
// Output: মূল্য: 500 টাকা

console.log(convertToEnglishNumber("৩.১৪"));
// Output: 3.14

console.log(convertToEnglishNumber("ফোন: ০১৭১২৩৪৫৬৭৮"));
// Output: ফোন: 01712345678
```

```ts
const { getBanglaMonth } = useBanglaKit();

console.log(getBanglaMonth(1));
// Output: জানুয়ারি

console.log(getBanglaMonth(5));
// Output: মে

console.log(getBanglaMonth(10));
// Output: অক্টোবর

console.log(getBanglaMonth(12));
// Output: ডিসেম্বর
```

```ts
const { getBanglaDay } = useBanglaKit();

console.log(getBanglaDay(1));
// Output: রবিবার

console.log(getBanglaDay(2));
// Output: সোমবার

console.log(getBanglaDay(5));
// Output: বৃহস্পতিবার

console.log(getBanglaDay(6));
// Output: শুক্রবার

console.log(getBanglaDay(7));
// Output: শনিবার
```

```ts
const { getFormattedBanglaDate } = useBanglaKit();

console.log(getFormattedBanglaDate());
// Output: ২৬ অক্টোবর, রবিবার, ২০২৫

console.log(getFormattedBanglaDate("D MMMM, YYYY"));
// Output: ২৬ অক্টোবর, ২০২৫

console.log(getFormattedBanglaDate("DD/MM/YYYY"));
// Output: ২৬/১০/২০২৫

console.log(getFormattedBanglaDate("dddd, D MMMM"));
// Output: রবিবার, ২৬ অক্টোবর

console.log(getFormattedBanglaDate("MMM YYYY"));
// Output: অক্টো ২০২৫
```

```ts
const { getBanglaYear } = useBanglaKit();

console.log(getBanglaYear());
// Output: ১৪৩২
```

```ts
const { getEnglishToBanglaYear } = useBanglaKit();

console.log(getEnglishToBanglaYear(2025));
// Output: ১৪৩২

console.log(getEnglishToBanglaYear(2025, 3, 10));
// Output: ১৪৩১

console.log(getEnglishToBanglaYear(2025, 4, 20));
// Output: ১৪৩২
```

```ts
const { getBanglaToEnglishYear } = useBanglaKit();

console.log(getBanglaToEnglishYear(১৪৩২));
// Output: 2025

console.log(getBanglaToEnglishYear(১৪৩১));
// Output: 2024
```

```ts
const { getBanglaNewYearDate } = useBanglaKit();

console.log(getBanglaNewYearDate());
// Output: Mon Apr 14 2025

console.log(getBanglaNewYearDate(2023));
// Output: Fri Apr 14 2023
```

```ts
const { isBanglaLeapYear } = useBanglaKit();

console.log(isBanglaLeapYear(১৪৩১));
// Output: false

console.log(isBanglaLeapYear(১৪৩২));
// Output: true or false

console.log(isBanglaLeapYear());
// Output: true or false
```

```ts
const { getBanglaYearInfo } = useBanglaKit();

console.log(getBanglaYearInfo());
/*
Output:
{
  englishYear: 2025,
  banglaYear: '১৪৩২',
  newYearDate: '১৪ এপ্রিল, ২০২৫',
  isLeapYear: false
}
*/
```

```ts
const { getBanglaDateObject } = useBanglaKit();

console.log(getBanglaDateObject());
/*
Output:
{
  day: '২৬',
  month: 'অক্টোবর',
  weekday: 'রবিবার',
  year: '১৪৩২'
}
*/

console.log(getBanglaDateObject(new Date("2025-05-12")));
/*
Output:
{
  day: '১২',
  month: 'মে',
  weekday: 'সোমবার',
  year: '১৪৩২'
}
*/
```

```ts
const { getBanglaCalendarDate } = useBanglaKit();

console.log(getBanglaCalendarDate());
// Output: ২৬ কার্তিক ১৪৩২ বঙ্গাব্দ
```

```ts
const { getBanglaDateRange } = useBanglaKit();

console.log(getBanglaDateRange("2025-10-25", "2025-10-30"));
// Output: ২৫ - ৩০ অক্টোবর ২০২৫

console.log(getBanglaDateRange("2025-10-25", "2025-11-10"));
// Output: ২৫ অক্টোবর - ১০ নভেম্বর ২০২৫

console.log(getBanglaDateRange("2024-12-20", "2025-01-05"));
// Output: ২০ ডিসেম্বর - ৫ জানুয়ারি ২০২৪

console.log(getBanglaDateRange("2025-04-01", "2025-04-03"));
// Output: ১ - ৩ এপ্রিল ২০২৫

console.log(getBanglaDateRange("2025-04-10", "2025-04-16"));
// Output: ১০ এপ্রিল - ১৬ এপ্রিল ২০২৫
```

```ts
const { convertToBanglaTime } = useBanglaKit();

console.log(convertToBanglaTime("07:10"));
// Output: সকাল ৭:১০

console.log(convertToBanglaTime("12:35"));
// Output: দুপুর ১২:৩৫

console.log(convertToBanglaTime("15:20"));
// Output: বিকেল ৩:২০

console.log(convertToBanglaTime("18:45"));
// Output: সন্ধ্যা ৬:৪৫

console.log(convertToBanglaTime("22:15"));
// Output: রাত ১০:১৫

console.log(convertToBanglaTime("00:05"));
// Output: রাত ১২:০৫
```

```ts
const { convertToBanglaOrdinal } = useBanglaKit();

console.log(convertToBanglaOrdinal(1));
// Output: প্রথম

console.log(convertToBanglaOrdinal(2));
// Output: দ্বিতীয়

console.log(convertToBanglaOrdinal(3));
// Output: তৃতীয়

console.log(convertToBanglaOrdinal(4));
// Output: চতুর্থ

console.log(convertToBanglaOrdinal(11));
// Output: একাদশ

console.log(convertToBanglaOrdinal(15));
// Output: পঞ্চদশ

console.log(convertToBanglaOrdinal(21));
// Output: একবিংশ

console.log(convertToBanglaOrdinal(30));
// Output: ত্রিংশ

console.log(convertToBanglaOrdinal(50));
// Output: পঞ্চাশতম

console.log(convertToBanglaOrdinal(100));
// Output: শততম

console.log(convertToBanglaOrdinal(33));
// Output: ৩৩তম

console.log(convertToBanglaOrdinal(77));
// Output: ৭৭তম
```

```ts
const { convertToBanglaWords } = useBanglaKit();

console.log(convertToBanglaWords(1));
// Output: এক টাকা

console.log(convertToBanglaWords(25));
// Output: পঁচিশ টাকা

console.log(convertToBanglaWords(105));
// Output: এক শত পাঁচ টাকা

console.log(convertToBanglaWords(2025));
// Output: দুই হাজার পঁচিশ টাকা

console.log(convertToBanglaWords(1.1));
// Output: এক টাকা দশ পয়সা

console.log(convertToBanglaWords(1.5));
// Output: এক টাকা পঞ্চাশ পয়সা

console.log(convertToBanglaWords(2025.5));
// Output: দুই হাজার পঁচিশ টাকা পঞ্চাশ পয়সা

console.log(convertToBanglaWords(20987.88));
// Output: বিশ হাজার নয় শত সাতাশি টাকা আটাশি পয়সা

console.log(convertToBanglaWords(100000));
// Output: এক লক্ষ টাকা

console.log(convertToBanglaWords(1500000));
// Output: পনেরো লক্ষ টাকা

console.log(convertToBanglaWords(10000000));
// Output: এক কোটি টাকা

console.log(convertToBanglaWords(0));
// Output: শূন্য টাকা

console.log(convertToBanglaWords(0.5));
// Output: শূন্য টাকা পঞ্চাশ পয়সা

console.log(convertToBanglaWords(1234567.75));
// Output: বারো লক্ষ চৌত্রিশ হাজার পাঁচ শত সাতষট্টি টাকা পঁচাত্তর পয়সা
```

---

## Author

**Polash Mahmud**

- npm: [npmjs.com/~polashmahmud](https://www.npmjs.com/~polashmahmud)
- GitHub: [github.com/polashmahmud](https://github.com/polashmahmud)

---

## License

This package is licensed under the [MIT License](./LICENSE).
You can freely use it in personal or commercial projects.
