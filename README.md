# @polashmahmud/banglakit

A lightweight JavaScript utility for displaying Bangla (Bengali) dates and converting English numbers into Bangla digits.
It allows developers to easily localize their applications with Bangla date and number formatting.

## Features

- Convert English numbers to Bangla digits
- Display today’s date in Bangla
- Works with Vue, React, Next.js, Node.js, or any JavaScript/TypeScript project
- Built with TypeScript and has zero dependencies

---

## Installation

You can install the package using npm or yarn:

```bash
npm install @polashmahmud/banglakit
# or
yarn add @polashmahmud/banglakit
```

## Usage Examples

### Display Today’s Date in Bangla

```ts
import { useBanglaKit } from "@polashmahmud/banglakit";

const { getTodayInBangla } = useBanglaKit();

console.log(getTodayInBangla());
// Output: ২৫ অক্টোবর, শনিবার
```

## **convertToBanglaNumber()**

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

## **convertToEnglishNumber()**

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

## **getBanglaMonth()**

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

console.log(getBanglaMonth(0));
// Output: (empty string, since index is invalid)
```

## **getBanglaDay()**

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

console.log(getBanglaDay(0));
// Output: (empty string, since index is invalid)
```

## **getFormattedBanglaDate()**

Formats and returns the **current English date** in a **Bangla localized format**.
You can customize the format using tokens similar to date libraries like `dayjs` or `moment.js`.

### **Syntax**

```ts
getFormattedBanglaDate(format?: string): string
```

**Default format:**
`"D MMMM, dddd, YYYY"`

### **Available Format Tokens**

| Token  | Description                          | Example Output |
| :----- | :----------------------------------- | :------------- |
| `D`    | Day (Bangla number)                  | ২৫             |
| `DD`   | Day (2-digit Bangla number)          | ০৫             |
| `M`    | Month number (Bangla number)         | ১০             |
| `MM`   | Month number (2-digit Bangla number) | ০৭             |
| `MMM`  | Month short name in Bangla           | অক্টো          |
| `MMMM` | Full month name in Bangla            | অক্টোবর        |
| `YYYY` | Year in Bangla                       | ২০২৫           |
| `dddd` | Day name in Bangla                   | শনিবার         |

### **Example Usage**

```ts
import { useBanglaKit } from "@polashmahmud/banglakit";

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

### **Example – Custom Format for UI Display**

You can use different formats based on your interface needs.

```ts
const { getFormattedBanglaDate } = useBanglaKit();

// Short numeric date
console.log(getFormattedBanglaDate("DD-MM-YYYY"));
// Output: ২৬-১০-২০২৫

// With full weekday and month
console.log(getFormattedBanglaDate("dddd, D MMMM YYYY"));
// Output: রবিবার, ২৬ অক্টোবর ২০২৫
```

## **getBanglaYear()**

Returns the **current Bangla year (in Bangla digits)** based on today’s Gregorian date.

### **Syntax**

```ts
getBanglaYear(): string
```

### **Example Usage**

```ts
import { useBanglaKit } from "@polashmahmud/banglakit";

const { getBanglaYear } = useBanglaKit();

console.log(getBanglaYear());
// Output: ১৪৩২
```

## **getEnglishToBanglaYear()**

Converts a given **English year** (optionally with month and date) into a **Bangla year**.

### **Syntax**

```ts
getEnglishToBanglaYear(englishYear: number, month?: number, date?: number): string
```

### **Example Usage**

```ts
const { getEnglishToBanglaYear } = useBanglaKit();

// Default conversion (mid-year)
console.log(getEnglishToBanglaYear(2025));
// Output: ১৪৩২

// Before 14 April, Bangla year decreases by 1
console.log(getEnglishToBanglaYear(2025, 3, 10));
// Output: ১৪৩১

// After 14 April, Bangla year remains current
console.log(getEnglishToBanglaYear(2025, 4, 20));
// Output: ১৪৩২
```

## **getBanglaToEnglishYear()**

Converts a **Bangla year** into an **English (Gregorian) year**.

### **Syntax**

```ts
getBanglaToEnglishYear(banglaYear: number): string
```

### **Example Usage**

```ts
const { getBanglaToEnglishYear } = useBanglaKit();

console.log(getBanglaToEnglishYear(১৪৩২));
// Output: 2025

console.log(getBanglaToEnglishYear(১৪৩১));
// Output: 2024
```

## **getBanglaNewYearDate()**

Returns the **Gregorian date** of Bangla New Year (**Pohela Boishakh**) for a given English year.

### **Syntax**

```ts
getBanglaNewYearDate(englishYear?: number): string
```

### **Example Usage**

```ts
const { getBanglaNewYearDate } = useBanglaKit();

// Current year
console.log(getBanglaNewYearDate());
// Output: Mon Apr 14 2025

// For a specific English year
console.log(getBanglaNewYearDate(2023));
// Output: Fri Apr 14 2023
```

## **isBanglaLeapYear()**

Checks whether a **Bangla year** corresponds to a **leap year** in the Gregorian calendar.

### **Syntax**

```ts
isBanglaLeapYear(banglaYear?: number): boolean
```

### **Example Usage**

```ts
const { isBanglaLeapYear } = useBanglaKit();

console.log(isBanglaLeapYear(১৪৩১));
// Output: false

console.log(isBanglaLeapYear(১৪৩২));
// Output: true or false (depending on current Gregorian leap year)

console.log(isBanglaLeapYear());
// Output: true or false (for current year)
```

## **getBanglaYearInfo()**

Returns detailed information about the current Bangla year, including:

- English year
- Bangla year
- Pohela Boishakh date
- Leap year status

### **Syntax**

```ts
getBanglaYearInfo(): {
  englishYear: number;
  banglaYear: string;
  newYearDate: string;
  isLeapYear: boolean;
}
```

### **Example Usage**

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

## **getBanglaDateObject()**

Returns the **Bangla date as an object** containing the Bangla day, month, weekday, and year.
If no date is provided, it returns the **current Bangla date**.

### **Syntax**

```ts
getBanglaDateObject(dateInput?: Date): {
  day: string;
  month: string;
  weekday: string;
  year: string;
}
```

### **Example Usage**

```ts
import { useBanglaKit } from "@polashmahmud/banglakit";

const { getBanglaDateObject } = useBanglaKit();

// Get today's Bangla date
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

// Get Bangla date for a specific Gregorian date
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

### **Example – Custom Dates**

You can pass any `Date` object to get its Bangla equivalent.

```ts
const { getBanglaDateObject } = useBanglaKit();

// Example 1: Beginning of the year
console.log(getBanglaDateObject(new Date("2025-01-01")));
/*
Output:
{
  day: '১',
  month: 'জানুয়ারি',
  weekday: 'বুধবার',
  year: '১৪৩১'
}
*/

// Example 2: Pohela Boishakh (Bangla New Year)
console.log(getBanglaDateObject(new Date("2025-04-14")));
/*
Output:
{
  day: '১৪',
  month: 'এপ্রিল',
  weekday: 'সোমবার',
  year: '১৪৩২'
}
*/
```

## **getBanglaCalendarDate()**

```ts
import { useBanglaKit } from "@polashmahmud/banglakit";

const { getBanglaCalendarDate } = useBanglaKit();

console.log(getBanglaCalendarDate());
// Output: ২৬ কার্তিক ১৪৩২ বঙ্গাব্দ
```

```ts
import { useBanglaKit } from "@polashmahmud/banglakit";

const { getBanglaDateRange } = useBanglaKit();

// Example 1: Same month range
console.log(getBanglaDateRange("2025-10-25", "2025-10-30"));
// Output: ২৫ - ৩০ অক্টোবর ২০২৫

// Example 2: Different month range
console.log(getBanglaDateRange("2025-10-25", "2025-11-10"));
// Output: ২৫ অক্টোবর - ১০ নভেম্বর ২০২৫

// Example 3: Custom range across years
console.log(getBanglaDateRange("2024-12-20", "2025-01-05"));
// Output: ২০ ডিসেম্বর - ৫ জানুয়ারি ২০২৪

// Example 4: Short range in the same month
console.log(getBanglaDateRange("2025-04-01", "2025-04-03"));
// Output: ১ - ৩ এপ্রিল ২০২৫

// Example 5: Pohela Boishakh period
console.log(getBanglaDateRange("2025-04-10", "2025-04-16"));
// Output: ১০ এপ্রিল - ১৬ এপ্রিল ২০২৫
```

```ts
import { useBanglaKit } from "@polashmahmud/banglakit";

const { convertToBanglaTime } = useBanglaKit();

// Example 1: Morning time
console.log(convertToBanglaTime("07:10"));
// Output: সকাল ৭:১০

// Example 2: Noon time
console.log(convertToBanglaTime("12:35"));
// Output: দুপুর ১২:৩৫

// Example 3: Afternoon time
console.log(convertToBanglaTime("15:20"));
// Output: বিকেল ৩:২০

// Example 4: Evening time
console.log(convertToBanglaTime("18:45"));
// Output: সন্ধ্যা ৬:৪৫

// Example 5: Night time
console.log(convertToBanglaTime("22:15"));
// Output: রাত ১০:১৫

// Example 6: Midnight
console.log(convertToBanglaTime("00:05"));
// Output: রাত ১২:০৫
```

## Author

**Polash Mahmud**

- npm: [npmjs.com/~polashmahmud](https://www.npmjs.com/~polashmahmud)
- GitHub: [github.com/polashmahmud](https://github.com/polashmahmud)

---

## License

This package is licensed under the [MIT License](./LICENSE).
You can freely use it in personal or commercial projects.

---

## Contributing

If you’d like to suggest a new feature or report a bug, feel free to open an issue or submit a pull request on the GitHub repository.
