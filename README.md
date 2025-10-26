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
