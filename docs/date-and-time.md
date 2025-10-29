# Date & Time Formatting

A comprehensive guide to date and time utilities in BanglaKit for working with Bangla calendar, dates, and time formatting.

## Table of Contents

- [Date Formatting](#date-formatting)
  - [getTodayInBangla()](#gettodayinbangla)
  - [getFormattedBanglaDate()](#getformattedbangladate)
  - [getBanglaDateObject()](#getbangladateobject)
  - [getBanglaDateRange()](#getbangladaterange)
- [Calendar Components](#calendar-components)
  - [getBanglaMonth()](#getbanglamonth)
  - [getBanglaDay()](#getbangladay)
  - [getBanglaCalendarDate()](#getbanglacalendardate)
- [Year Conversions](#year-conversions)
  - [getBanglaYear()](#getbanglayear)
  - [getEnglishToBanglaYear()](#getenglishtobanlagyear)
  - [getBanglaToEnglishYear()](#getbanglatoenglishyear)
  - [getBanglaYearInfo()](#getbanglayearinfo)
- [Bangla Calendar Utilities](#bangla-calendar-utilities)
  - [getBanglaNewYearDate()](#getbanglanewyeardate)
  - [isBanglaLeapYear()](#isbanglaleapyear)
- [Time Formatting](#time-formatting)
  - [convertToBanglaTime()](#converttobanglatime)

## Date Formatting

### `getTodayInBangla()`

Returns the current date in a human-readable Bangla format with "আজকের তারিখ" prefix.

#### **Syntax**

```ts
getTodayInBangla(): string
```

#### **Returns**

`string` - Formatted Bangla date string

#### **Example**

```ts
const { getTodayInBangla } = useBanglaKit();

console.log(getTodayInBangla());
// Output: "আজকের তারিখ: ১২ই মার্চ, ২০২৫"
```

### `getFormattedBanglaDate()`

Formats dates in Bangla with customizable format patterns. Supports various date format tokens for flexible output.

#### **Syntax**

```ts
getFormattedBanglaDate(format?: string): string
```

#### **Parameters**

| Parameter | Type     | Default                | Description           |
| --------- | -------- | ---------------------- | --------------------- |
| `format`  | `string` | `"D MMMM, dddd, YYYY"` | Format pattern string |

#### **Format Tokens**

| Token  | Output    | Description                    |
| ------ | --------- | ------------------------------ |
| `D`    | ১-৩১      | Day of month (no leading zero) |
| `DD`   | ০১-৩১     | Day of month (2 digits)        |
| `M`    | ১-১২      | Month number                   |
| `MM`   | ০১-১২     | Month number (2 digits)        |
| `MMM`  | জানু, ফেব | Short month name               |
| `MMMM` | জানুয়ারি | Full month name                |
| `dddd` | রবিবার    | Full weekday name              |
| `YYYY` | ২০২৫      | 4-digit year                   |

#### **Returns**

`string` - Formatted date in Bangla

#### **Examples**

```ts
const { getFormattedBanglaDate } = useBanglaKit();

// Default format
console.log(getFormattedBanglaDate());
// Output: ২৬ অক্টোবর, রবিবার, ২০২৫

// Custom formats
console.log(getFormattedBanglaDate("D MMMM, YYYY"));
// Output: ২৬ অক্টোবর, ২০২৫

console.log(getFormattedBanglaDate("DD/MM/YYYY"));
// Output: ২৬/১০/২০২৫

console.log(getFormattedBanglaDate("dddd, D MMMM"));
// Output: রবিবার, ২৬ অক্টোবর

console.log(getFormattedBanglaDate("MMM YYYY"));
// Output: অক্টো ২০২৫
```

### `getBanglaDateObject()`

Returns a structured object containing individual date components in Bangla format.

#### **Syntax**

```ts
getBanglaDateObject(date?: Date): BanglaDateObject
```

#### **Parameters**

| Parameter | Type   | Default      | Description    |
| --------- | ------ | ------------ | -------------- |
| `date`    | `Date` | `new Date()` | Date to format |

#### **Returns**

```ts
{
  day: string; // Day in Bangla digits
  month: string; // Month name in Bangla
  weekday: string; // Weekday name in Bangla
  year: string; // Year in Bangla digits
}
```

#### **Examples**

```ts
const { getBanglaDateObject } = useBanglaKit();

// Current date
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

// Specific date
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

### `getBanglaDateRange()`

Formats a date range in Bangla with intelligent formatting based on whether dates share the same month or year.

#### **Syntax**

```ts
getBanglaDateRange(startDate: string, endDate: string): string
```

#### **Parameters**

| Parameter   | Type     | Description                           |
| ----------- | -------- | ------------------------------------- |
| `startDate` | `string` | Start date in ISO format (YYYY-MM-DD) |
| `endDate`   | `string` | End date in ISO format (YYYY-MM-DD)   |

#### **Returns**

`string` - Formatted date range in Bangla

#### **Examples**

```ts
const { getBanglaDateRange } = useBanglaKit();

// Same month
console.log(getBanglaDateRange("2025-10-25", "2025-10-30"));
// Output: ২৫ - ৩০ অক্টোবর ২০২৫

// Different months, same year
console.log(getBanglaDateRange("2025-10-25", "2025-11-10"));
// Output: ২৫ অক্টোবর - ১০ নভেম্বর ২০২৫

// Different years
console.log(getBanglaDateRange("2024-12-20", "2025-01-05"));
// Output: ২০ ডিসেম্বর - ৫ জানুয়ারি ২০২৪

// Short range
console.log(getBanglaDateRange("2025-04-01", "2025-04-03"));
// Output: ১ - ৩ এপ্রিল ২০২৫
```

## Calendar Components

### `getBanglaMonth()`

Converts a month number (1-12) to its Bangla name.

#### **Syntax**

```ts
getBanglaMonth(month: number): string
```

#### **Parameters**

| Parameter | Type     | Description         |
| --------- | -------- | ------------------- |
| `month`   | `number` | Month number (1-12) |

#### **Returns**

`string` - Month name in Bangla

#### **Examples**

```ts
const { getBanglaMonth } = useBanglaKit();

console.log(getBanglaMonth(1)); // Output: জানুয়ারি
console.log(getBanglaMonth(5)); // Output: মে
console.log(getBanglaMonth(10)); // Output: অক্টোবর
console.log(getBanglaMonth(12)); // Output: ডিসেম্বর
```

### `getBanglaDay()`

Converts a day number (1-7) to its Bangla weekday name.

#### **Syntax**

```ts
getBanglaDay(day: number): string
```

#### **Parameters**

| Parameter | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| `day`     | `number` | Day number (1=Sunday, 7=Saturday) |

#### **Returns**

`string` - Weekday name in Bangla

#### **Examples**

```ts
const { getBanglaDay } = useBanglaKit();

console.log(getBanglaDay(1)); // Output: রবিবার
console.log(getBanglaDay(2)); // Output: সোমবার
console.log(getBanglaDay(5)); // Output: বৃহস্পতিবার
console.log(getBanglaDay(6)); // Output: শুক্রবার
console.log(getBanglaDay(7)); // Output: শনিবার
```

### `getBanglaCalendarDate()`

Returns the current date in traditional Bangla calendar format with "বঙ্গাব্দ" suffix.

#### **Syntax**

```ts
getBanglaCalendarDate(): string
```

#### **Returns**

`string` - Date in Bangla calendar format

#### **Example**

```ts
const { getBanglaCalendarDate } = useBanglaKit();

console.log(getBanglaCalendarDate());
// Output: ২৬ কার্তিক ১৪৩২ বঙ্গাব্দ
```

## Year Conversions

### `getBanglaYear()`

Returns the current year in Bangla calendar format.

#### **Syntax**

```ts
getBanglaYear(): string
```

#### **Returns**

`string` - Current Bangla year

#### **Example**

```ts
const { getBanglaYear } = useBanglaKit();

console.log(getBanglaYear());
// Output: ১৪৩২
```

### `getEnglishToBanglaYear()`

Converts an English calendar year to Bangla calendar year. Optionally accounts for the month and day since Bangla New Year starts in mid-April.

#### **Syntax**

```ts
getEnglishToBanglaYear(year: number, month?: number, day?: number): string
```

#### **Parameters**

| Parameter | Type     | Default | Description  |
| --------- | -------- | ------- | ------------ |
| `year`    | `number` | -       | English year |
| `month`   | `number` | -       | Month (1-12) |
| `day`     | `number` | -       | Day of month |

#### **Returns**

`string` - Corresponding Bangla year

#### **Examples**

```ts
const { getEnglishToBanglaYear } = useBanglaKit();

console.log(getEnglishToBanglaYear(2025));
// Output: ১৪৩২

// Before Bangla New Year (April 14)
console.log(getEnglishToBanglaYear(2025, 3, 10));
// Output: ১৪৩১

// After Bangla New Year
console.log(getEnglishToBanglaYear(2025, 4, 20));
// Output: ১৪৩২
```

### `getBanglaToEnglishYear()`

Converts a Bangla calendar year to English calendar year.

#### **Syntax**

```ts
getBanglaToEnglishYear(banglaYear: string | number): number
```

#### **Parameters**

| Parameter    | Type               | Description           |
| ------------ | ------------------ | --------------------- |
| `banglaYear` | `string \| number` | Bangla year in digits |

#### **Returns**

`number` - Corresponding English year

#### **Examples**

```ts
const { getBanglaToEnglishYear } = useBanglaKit();

console.log(getBanglaToEnglishYear(১৪৩২));
// Output: 2025

console.log(getBanglaToEnglishYear(১৪৩১));
// Output: 2024
```

### `getBanglaYearInfo()`

Returns comprehensive information about the current Bangla year including English year, Bangla year, New Year date, and leap year status.

#### **Syntax**

```ts
getBanglaYearInfo(): BanglaYearInfo
```

#### **Returns**

```ts
{
  englishYear: number;
  banglaYear: string;
  newYearDate: string;
  isLeapYear: boolean;
}
```

#### **Example**

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

## Bangla Calendar Utilities

### `getBanglaNewYearDate()`

Returns the Bangla New Year (Pohela Boishakh) date for a given English year.

#### **Syntax**

```ts
getBanglaNewYearDate(year?: number): string
```

#### **Parameters**

| Parameter | Type     | Default      | Description  |
| --------- | -------- | ------------ | ------------ |
| `year`    | `number` | Current year | English year |

#### **Returns**

`string` - New Year date

#### **Examples**

```ts
const { getBanglaNewYearDate } = useBanglaKit();

console.log(getBanglaNewYearDate());
// Output: Mon Apr 14 2025

console.log(getBanglaNewYearDate(2023));
// Output: Fri Apr 14 2023
```

### `isBanglaLeapYear()`

Checks whether a given Bangla year is a leap year.

#### **Syntax**

```ts
isBanglaLeapYear(banglaYear?: string | number): boolean
```

#### **Parameters**

| Parameter    | Type               | Default      | Description          |
| ------------ | ------------------ | ------------ | -------------------- |
| `banglaYear` | `string \| number` | Current year | Bangla year to check |

#### **Returns**

`boolean` - `true` if leap year, `false` otherwise

#### **Examples**

```ts
const { isBanglaLeapYear } = useBanglaKit();

console.log(isBanglaLeapYear(১৪৩১));
// Output: false

console.log(isBanglaLeapYear(১৪৩২));
// Output: true or false

// Check current year
console.log(isBanglaLeapYear());
// Output: true or false
```

## Time Formatting

### `convertToBanglaTime()`

Converts 24-hour time format to Bangla 12-hour format with appropriate time-of-day indicators (সকাল, দুপুর, বিকেল, সন্ধ্যা, রাত).

#### **Syntax**

```ts
convertToBanglaTime(time: string): string
```

#### **Parameters**

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| `time`    | `string` | Time in 24-hour format (HH:mm) |

#### **Returns**

`string` - Formatted time in Bangla with period indicator

#### **Time Periods**

| Time Range    | Bangla Period     |
| ------------- | ----------------- |
| 06:00 - 11:59 | সকাল (Morning)    |
| 12:00 - 14:59 | দুপুর (Noon)      |
| 15:00 - 17:59 | বিকেল (Afternoon) |
| 18:00 - 19:59 | সন্ধ্যা (Evening) |
| 20:00 - 05:59 | রাত (Night)       |

#### **Examples**

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

## Best Practices

### Performance Tips

- Use `getBanglaDateObject()` when you need multiple date components to avoid repeated formatting
- Cache frequently used date strings to minimize recalculations
- For date ranges, ensure dates are in valid ISO format (YYYY-MM-DD)

### Common Patterns

```ts
// Display current date with custom formatting
const formattedDate = getFormattedBanglaDate("D MMMM, YYYY");

// Get complete date information
const dateInfo = getBanglaDateObject();
const yearInfo = getBanglaYearInfo();

// Format date range for events
const eventPeriod = getBanglaDateRange(startDate, endDate);

// Display time with period
const currentTime = convertToBanglaTime("14:30");
```

### Error Handling

```ts
// Validate month number
const month = 5;
if (month >= 1 && month <= 12) {
  console.log(getBanglaMonth(month));
}

// Validate day number
const day = 3;
if (day >= 1 && day <= 7) {
  console.log(getBanglaDay(day));
}

// Handle date parsing
try {
  const dateRange = getBanglaDateRange("2025-01-01", "2025-12-31");
  console.log(dateRange);
} catch (error) {
  console.error("Invalid date format");
}
```

## Related Documentation

- [Installation Guide](./install.md)
- [Number Conversion](./number-converter.md)
- [Words Conversion](./in-words.md)
- [API Reference](./index.md)
