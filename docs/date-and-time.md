## Function 1: `getTodayInBangla()`

This function returns the current date in Bangla format.

### **Usage:**

```ts
const { getTodayInBangla } = useBanglaKit();

console.log(getTodayInBangla());
// Output: "আজকের তারিখ: ১২ই মার্চ, ২০২৫"
```

## Function 2: `getBanglaMonth()`

This function returns the current month in Bangla format.

### **Usage:**

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

## Function 3: `getBanglaDay()`

This function returns the current day in Bangla format.

### **Usage:**

```ts
const { getBanglaMonth } = useBanglaKit();

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

## Function 4: `getFormattedBanglaDate()`

This function returns the current date in Bangla format.

### **Usage:**

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

## Function 5: `getBanglaYear()`

This function returns the current year in Bangla format.

### **Usage:**

```ts
const { getBanglaYear } = useBanglaKit();

console.log(getBanglaYear());
// Output: ১৪৩২
```

## Function 6: `getEnglishToBanglaYear()`

This function converts an English year to Bangla format.

### **Usage:**

```ts
const { getEnglishToBanglaYear } = useBanglaKit();

console.log(getEnglishToBanglaYear(2025));
// Output: ১৪৩২

console.log(getEnglishToBanglaYear(2025, 3, 10));
// Output: ১৪৩১

console.log(getEnglishToBanglaYear(2025, 4, 20));
// Output: ১৪৩২
```

## Function 7: `getBanglaToEnglishYear()`

This function converts a Bangla year to English format.

### **Usage:**

```ts
const { getBanglaToEnglishYear } = useBanglaKit();

console.log(getBanglaToEnglishYear(১৪৩২));
// Output: 2025

console.log(getBanglaToEnglishYear(১৪৩১));
// Output: 2024
```

## Function 8: `getBanglaNewYearDate()`

This function converts a Bangla year to English format.

### **Usage:**

```ts
const { getBanglaNewYearDate } = useBanglaKit();

console.log(getBanglaNewYearDate());
// Output: Mon Apr 14 2025

console.log(getBanglaNewYearDate(2023));
// Output: Fri Apr 14 2023
```

## Function 9: `isBanglaLeapYear()`

This function checks if a Bangla year is a leap year.

### **Usage:**

```ts
const { isBanglaLeapYear } = useBanglaKit();

console.log(isBanglaLeapYear(১৪৩১));
// Output: false

console.log(isBanglaLeapYear(১৪৩২));
// Output: true or false

console.log(isBanglaLeapYear());
// Output: true or false
```

## Function 10: `getBanglaYearInfo()`

This function checks if a Bangla year is a leap year.

### **Usage:**

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

## Function 11: `getBanglaDateObject()`

This function checks if a Bangla year is a leap year.

### **Usage:**

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

## Function 11: `getBanglaCalendarDate()`

This function checks if a Bangla year is a leap year.

### **Usage:**

```ts
const { getBanglaCalendarDate } = useBanglaKit();

console.log(getBanglaCalendarDate());
// Output: ২৬ কার্তিক ১৪৩২ বঙ্গাব্দ
```

## Function 12: `getBanglaDateRange()`

This function checks if a Bangla year is a leap year.

### **Usage:**

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

## Function 13: `convertToBanglaTime()`

This function checks if a Bangla year is a leap year.

### **Usage:**

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
