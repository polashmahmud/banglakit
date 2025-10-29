# Number Conversion

A comprehensive guide to number conversion utilities in BanglaKit for converting between English and Bangla numeral systems, including ordinal numbers.

## Table of Contents

- [Overview](#overview)
- [Number Conversion Functions](#number-conversion-functions)
  - [convertToBanglaNumber()](#converttobanglanumber)
  - [convertToEnglishNumber()](#converttoenglishnumber)
- [Ordinal Numbers](#ordinal-numbers)
  - [convertToBanglaOrdinal()](#converttobanglaordinal)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)

## Overview

BanglaKit provides robust utilities for converting numbers between English and Bangla numeral systems. These functions handle various input types including integers, decimals, strings with mixed content, and ordinal numbers.

### Supported Number Systems

| English             | Bangla              |
| ------------------- | ------------------- |
| 0 1 2 3 4 5 6 7 8 9 | ০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯ |

## Number Conversion Functions

### `convertToBanglaNumber()`

Converts English digits (0-9) to their Bangla equivalents (০-৯). Works with numbers, strings, and mixed content while preserving non-numeric characters.

#### **Syntax**

```ts
convertToBanglaNumber(input: number | string): string
```

#### **Parameters**

| Parameter | Type               | Description                                |
| --------- | ------------------ | ------------------------------------------ |
| `input`   | `number \| string` | Number or string containing English digits |

#### **Returns**

`string` - Input with all English digits converted to Bangla

#### **Features**

- Handles integers and decimals
- Preserves non-numeric characters
- Works with mixed content (text + numbers)
- Maintains formatting and punctuation

#### **Examples**

```ts
const { convertToBanglaNumber } = useBanglaKit();

// Integer conversion
console.log(convertToBanglaNumber(123));
// Output: ১২৩

// String number conversion
console.log(convertToBanglaNumber("2025"));
// Output: ২০২৫

// Mixed content (preserves text)
console.log(convertToBanglaNumber("Price: 500 Tk"));
// Output: Price: ৫০০ Tk

// Decimal numbers
console.log(convertToBanglaNumber(3.14));
// Output: ৩.১৪

// Phone numbers
console.log(convertToBanglaNumber("Phone: 01712345678"));
// Output: Phone: ০১৭১২৩৪৫৬৭৮
```

#### **Common Use Cases**

```ts
// Display prices in Bangla
const price = 1500;
console.log(`মূল্য: ${convertToBanglaNumber(price)} টাকা`);
// Output: মূল্য: ১৫০০ টাকা

// Format dates with Bangla digits
const date = "25/10/2025";
console.log(convertToBanglaNumber(date));
// Output: ২৫/১০/২০২৫

// Convert IDs or reference numbers
const orderId = "ORD-12345";
console.log(convertToBanglaNumber(orderId));
// Output: ORD-১২৩৪৫
```

### `convertToEnglishNumber()`

Converts Bangla digits (০-৯) to their English equivalents (0-9). Works with strings containing Bangla digits while preserving non-numeric characters.

#### **Syntax**

```ts
convertToEnglishNumber(input: string): string
```

#### **Parameters**

| Parameter | Type     | Description                     |
| --------- | -------- | ------------------------------- |
| `input`   | `string` | String containing Bangla digits |

#### **Returns**

`string` - Input with all Bangla digits converted to English

#### **Features**

- Handles Bangla integers and decimals
- Preserves non-numeric characters
- Works with mixed content (Bangla text + Bangla numbers)
- Useful for data processing and API integrations

#### **Examples**

```ts
const { convertToEnglishNumber } = useBanglaKit();

// Basic conversion
console.log(convertToEnglishNumber("১২৩"));
// Output: 123

// Year conversion
console.log(convertToEnglishNumber("২০২৫"));
// Output: 2025

// Mixed content (preserves Bangla text)
console.log(convertToEnglishNumber("মূল্য: ৫০০ টাকা"));
// Output: মূল্য: 500 টাকা

// Decimal numbers
console.log(convertToEnglishNumber("৩.১৪"));
// Output: 3.14

// Phone numbers
console.log(convertToEnglishNumber("ফোন: ০১৭১২৩৪৫৬৭৮"));
// Output: ফোন: 01712345678
```

#### **Common Use Cases**

```ts
// Parse user input for calculations
const userInput = "৫০০০";
const amount = parseInt(convertToEnglishNumber(userInput));
console.log(amount * 2); // 10000

// Convert form data for backend
const phoneNumber = "০১৭১২৩৪৫৬৭৮";
const englishPhone = convertToEnglishNumber(phoneNumber);
// Send englishPhone to API

// Process Bangla numeric data
const banglaDate = "২৫/১০/২০২৫";
const processableDate = convertToEnglishNumber(banglaDate);
// Output: 25/10/2025
```

## Ordinal Numbers

### `convertToBanglaOrdinal()`

Converts a number to its Bangla ordinal representation (প্রথম, দ্বিতীয়, তৃতীয়, etc.). Supports numbers 1-100 with special handling for specific ranges.

#### **Syntax**

```ts
convertToBanglaOrdinal(number: number): string
```

#### **Parameters**

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| `number`  | `number` | Integer to convert to ordinal form |

#### **Returns**

`string` - Bangla ordinal representation

#### **Supported Ranges**

| Range | Format         | Example                 |
| ----- | -------------- | ----------------------- |
| 1-10  | Named ordinals | প্রথম, দ্বিতীয়, তৃতীয় |
| 11-20 | Named ordinals | একাদশ, দ্বাদশ, বিংশ     |
| 21-30 | Named ordinals | একবিংশ, ত্রিংশ          |
| 31-99 | Numeric + তম   | ৩৩তম, ৪৫তম              |
| 100+  | Numeric + তম   | ১০০তম                   |

#### **Examples**

```ts
const { convertToBanglaOrdinal } = useBanglaKit();

// First 10 ordinals (named)
console.log(convertToBanglaOrdinal(1)); // Output: প্রথম
console.log(convertToBanglaOrdinal(2)); // Output: দ্বিতীয়
console.log(convertToBanglaOrdinal(3)); // Output: তৃতীয়
console.log(convertToBanglaOrdinal(4)); // Output: চতুর্থ

// 11-20 range (named)
console.log(convertToBanglaOrdinal(11)); // Output: একাদশ
console.log(convertToBanglaOrdinal(15)); // Output: পঞ্চদশ

// 21-30 range (named)
console.log(convertToBanglaOrdinal(21)); // Output: একবিংশ
console.log(convertToBanglaOrdinal(30)); // Output: ত্রিংশ

// Special cases
console.log(convertToBanglaOrdinal(50)); // Output: পঞ্চাশতম
console.log(convertToBanglaOrdinal(100)); // Output: শততম

// Numeric ordinals (31+, except special cases)
console.log(convertToBanglaOrdinal(33)); // Output: ৩৩তম
console.log(convertToBanglaOrdinal(77)); // Output: ৭৭তম
```

#### **Common Use Cases**

```ts
// Display rankings
const rank = 3;
console.log(`আপনি ${convertToBanglaOrdinal(rank)} স্থানে আছেন`);
// Output: আপনি তৃতীয় স্থানে আছেন

// List positions
for (let i = 1; i <= 5; i++) {
  console.log(`${convertToBanglaOrdinal(i)} পুরস্কার`);
}
// Output:
// প্রথম পুরস্কার
// দ্বিতীয় পুরস্কার
// তৃতীয় পুরস্কার
// চতুর্থ পুরস্কার
// পঞ্চম পুরস্কার

// Education/class levels
const grade = 10;
console.log(`${convertToBanglaOrdinal(grade)} শ্রেণী`);
// Output: দশম শ্রেণী
```

#### **Ordinal Reference Table**

<details>
<summary>Click to view complete ordinal mappings (1-30)</summary>

| Number | Bangla Ordinal |
| ------ | -------------- |
| 1      | প্রথম          |
| 2      | দ্বিতীয়       |
| 3      | তৃতীয়         |
| 4      | চতুর্থ         |
| 5      | পঞ্চম          |
| 6      | ষষ্ঠ           |
| 7      | সপ্তম          |
| 8      | অষ্টম          |
| 9      | নবম            |
| 10     | দশম            |
| 11     | একাদশ          |
| 12     | দ্বাদশ         |
| 13     | ত্রয়োদশ       |
| 14     | চতুর্দশ        |
| 15     | পঞ্চদশ         |
| 16     | ষোড়শ          |
| 17     | সপ্তদশ         |
| 18     | অষ্টাদশ        |
| 19     | ঊনবিংশ         |
| 20     | বিংশ           |
| 21     | একবিংশ         |
| 22     | দ্বাবিংশ       |
| 23     | ত্রয়োবিংশ     |
| 24     | চতুর্বিংশ      |
| 25     | পঞ্চবিংশ       |
| 26     | ষড়বিংশ        |
| 27     | সপ্তবিংশ       |
| 28     | অষ্টাবিংশ      |
| 29     | ঊনত্রিংশ       |
| 30     | ত্রিংশ         |

</details>

## Usage Examples

### Complete Integration Example

```ts
import { useBanglaKit } from "@polashmahmud/banglakit";

const {
  convertToBanglaNumber,
  convertToEnglishNumber,
  convertToBanglaOrdinal,
} = useBanglaKit();

// E-commerce product display
const product = {
  name: "পণ্যের নাম",
  price: 1250,
  quantity: 5,
  rank: 3,
};

console.log(`
  পণ্য: ${product.name}
  মূল্য: ${convertToBanglaNumber(product.price)} টাকা
  পরিমাণ: ${convertToBanglaNumber(product.quantity)}টি
  জনপ্রিয়তা: ${convertToBanglaOrdinal(product.rank)} স্থান
`);

// Form data processing
const formData = {
  phone: "০১৭১২৩৪৫৬৭৮",
  age: "২৫",
  salary: "৫০০০০",
};

const processedData = {
  phone: convertToEnglishNumber(formData.phone),
  age: parseInt(convertToEnglishNumber(formData.age)),
  salary: parseFloat(convertToEnglishNumber(formData.salary)),
};

console.log(processedData);
// Output: { phone: "01712345678", age: 25, salary: 50000 }
```

### React Component Example

```tsx
import { useBanglaKit } from "@polashmahmud/banglakit";

function ProductCard({ product, rank }) {
  const { convertToBanglaNumber, convertToBanglaOrdinal } = useBanglaKit();

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="price">
        মূল্য: {convertToBanglaNumber(product.price)} টাকা
      </p>
      <p className="rank">{convertToBanglaOrdinal(rank)} সর্বাধিক বিক্রিত</p>
    </div>
  );
}
```

## Best Practices

### Performance Optimization

```ts
// ✅ Good: Convert once, reuse
const banglaPrice = convertToBanglaNumber(price);
displayPrice(banglaPrice);
logPrice(banglaPrice);

// ❌ Avoid: Multiple conversions of same value
displayPrice(convertToBanglaNumber(price));
logPrice(convertToBanglaNumber(price));
```

### Type Safety

```ts
// ✅ Good: Validate input before conversion
const userInput = "১২৩৪৫";
if (userInput && typeof userInput === "string") {
  const englishNumber = convertToEnglishNumber(userInput);
  // Safe to use
}

// ✅ Good: Parse after conversion
const banglaNumber = "৫০০০";
const numericValue = parseInt(convertToEnglishNumber(banglaNumber));
if (!isNaN(numericValue)) {
  // Safe to perform calculations
}
```

### Combining Functions

```ts
// Display with proper formatting
const amount = 1234.56;
const banglaAmount = convertToBanglaNumber(amount);
const formattedAmount = `${banglaAmount} টাকা`;

// Process user input
const banglaInput = "৯৯৯";
const englishInput = convertToEnglishNumber(banglaInput);
const validatedNumber = parseInt(englishInput);

if (validatedNumber > 0 && validatedNumber <= 100) {
  console.log(convertToBanglaOrdinal(validatedNumber));
}
```

### Error Handling

```ts
// Handle edge cases gracefully
function safeBanglaOrdinal(num: number): string {
  if (num < 1 || num > 1000 || !Number.isInteger(num)) {
    return convertToBanglaNumber(num) + "তম";
  }
  return convertToBanglaOrdinal(num);
}

// Validate before processing
function processPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/[^০-৯0-9]/g, "");
  return convertToEnglishNumber(cleaned);
}
```

## Related Documentation

- [Installation Guide](./install.md)
- [Date & Time Formatting](./date-and-time.md)
- [Words Conversion](./in-words.md)
- [API Reference](./index.md)

## Quick Reference

### Function Summary

| Function                   | Input              | Output   | Use Case                          |
| -------------------------- | ------------------ | -------- | --------------------------------- |
| `convertToBanglaNumber()`  | `number \| string` | `string` | Display numbers in Bangla         |
| `convertToEnglishNumber()` | `string`           | `string` | Parse Bangla input for processing |
| `convertToBanglaOrdinal()` | `number`           | `string` | Show rankings, positions, grades  |

### When to Use What

- **Display to users**: Use `convertToBanglaNumber()`
- **Process form data**: Use `convertToEnglishNumber()`
- **Show rankings/positions**: Use `convertToBanglaOrdinal()`
- **API communication**: Convert to English before sending
- **Database storage**: Store in English, display in Bangla

## Function 2: `convertToEnglishNumber()`

This function converts Bangla digits into English digits.

### **Usage:**

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

## Function 3: `convertToBanglaOrdinal()`

This function converts Bangla digits into English digits.

### **Usage:**

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
