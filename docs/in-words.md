# Number to Words Conversion

A comprehensive guide to converting numeric values into Bangla words, perfect for financial applications, invoices, receipts, and documents requiring written amounts.

## Table of Contents

- [Overview](#overview)
- [Function Reference](#function-reference)
  - [convertToBanglaWords()](#converttobanglawords)
- [Number System](#number-system)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)

## Overview

The `convertToBanglaWords()` function converts numeric values into their Bangla word representation, following the Bengali numbering system. This is particularly useful for:

- 💰 **Financial Documents** - Checks, receipts, invoices
- 📄 **Legal Documents** - Contracts, agreements
- 🧾 **Billing Systems** - Payment confirmations
- 📊 **Reports** - Financial statements

### Key Features

- Supports integers from 0 to crores (কোটি)
- Handles decimal values (পয়সা)
- Automatic currency formatting (টাকা)
- Bengali numbering system (লক্ষ, কোটি)
- Proper word formation and spacing
- Zero and edge case handling

## Function Reference

### `convertToBanglaWords()`

Converts a numeric value into Bangla words following the Bengali numbering system, with automatic currency formatting for financial amounts.

#### **Syntax**

```ts
convertToBanglaWords(amount: number): string
```

#### **Parameters**

| Parameter | Type     | Description                                   |
| --------- | -------- | --------------------------------------------- |
| `amount`  | `number` | Numeric value to convert (integer or decimal) |

#### **Returns**

`string` - Amount in Bangla words with "টাকা" and "পয়সা" suffix

#### **Supported Range**

| Range              | Unit      | Bangla Term          |
| ------------------ | --------- | -------------------- |
| 0-99               | Ones/Tens | এক, দুই... নিরানব্বই |
| 100-999            | Hundred   | শত                   |
| 1,000-99,999       | Thousand  | হাজার                |
| 1,00,000-99,99,999 | Lakh      | লক্ষ                 |
| 1,00,00,000+       | Crore     | কোটি                 |

#### **Decimal Handling**

- Integer part: Converted to "টাকা" (Taka)
- Decimal part: Converted to "পয়সা" (Paisa) - up to 2 decimal places
- Format: `[integer words] টাকা [decimal words] পয়সা`

## Examples

### Basic Numbers

```ts
const { convertToBanglaWords } = useBanglaKit();

// Single digit
console.log(convertToBanglaWords(1));
// Output: এক টাকা

// Two digits
console.log(convertToBanglaWords(25));
// Output: পঁচিশ টাকা

// Hundreds
console.log(convertToBanglaWords(105));
// Output: এক শত পাঁচ টাকা

// Thousands
console.log(convertToBanglaWords(2025));
// Output: দুই হাজার পঁচিশ টাকা
```

### Decimal Amounts

```ts
const { convertToBanglaWords } = useBanglaKit();

// Simple decimal
console.log(convertToBanglaWords(1.1));
// Output: এক টাকা দশ পয়সা

// Common decimal
console.log(convertToBanglaWords(1.5));
// Output: এক টাকা পঞ্চাশ পয়সা

// Large amount with decimal
console.log(convertToBanglaWords(2025.5));
// Output: দুই হাজার পঁচিশ টাকা পঞ্চাশ পয়সা

// Precise decimal (2 places)
console.log(convertToBanglaWords(20987.88));
// Output: বিশ হাজার নয় শত সাতাশি টাকা আটাশি পয়সা
```

### Large Numbers (Bengali System)

```ts
const { convertToBanglaWords } = useBanglaKit();

// One Lakh (100,000)
console.log(convertToBanglaWords(100000));
// Output: এক লক্ষ টাকা

// Multiple Lakhs
console.log(convertToBanglaWords(1500000));
// Output: পনেরো লক্ষ টাকা

// One Crore (10,000,000)
console.log(convertToBanglaWords(10000000));
// Output: এক কোটি টাকা

// Complex amount
console.log(convertToBanglaWords(1234567.75));
// Output: বারো লক্ষ চৌত্রিশ হাজার পাঁচ শত সাতষট্টি টাকা পঁচাত্তর পয়সা
```

### Edge Cases

```ts
const { convertToBanglaWords } = useBanglaKit();

// Zero
console.log(convertToBanglaWords(0));
// Output: শূন্য টাকা

// Only decimal part
console.log(convertToBanglaWords(0.5));
// Output: শূন্য টাকা পঞ্চাশ পয়সা

// Exact hundreds
console.log(convertToBanglaWords(500));
// Output: পাঁচ শত টাকা

// Exact thousands
console.log(convertToBanglaWords(5000));
// Output: পাঁচ হাজার টাকা
```

## Number System

### Bengali Numbering System

Unlike the Western system (thousands, millions, billions), the Bengali system uses:

| Value       | Western          | Bengali             |
| ----------- | ---------------- | ------------------- |
| 100         | Hundred          | শত (Shoto)          |
| 1,000       | Thousand         | হাজার (Hajar)       |
| 1,00,000    | Hundred Thousand | লক্ষ (Lakh)         |
| 10,00,000   | Million          | দশ লক্ষ (Dosh Lakh) |
| 1,00,00,000 | Ten Million      | কোটি (Crore)        |

### Number Grouping

```
Western:    1,234,567.89
            (million, thousand, hundred)

Bengali:    12,34,567.89
            (lakh, thousand, hundred)
```

### Currency Terms

- **টাকা** (Taka) - Primary currency unit
- **পয়সা** (Paisa) - Fractional currency unit (1/100 of Taka)

## Usage Examples

### Invoice Generation

```ts
import { useBanglaKit } from "@polashmahmud/banglakit";

const { convertToBanglaWords, convertToBanglaNumber } = useBanglaKit();

function generateInvoice(amount: number) {
  return `
    ════════════════════════════════════
              চালান / INVOICE
    ════════════════════════════════════

    পরিমাণ (সংখ্যায়): ${convertToBanglaNumber(amount)} টাকা
    পরিমাণ (কথায়): ${convertToBanglaWords(amount)}

    ════════════════════════════════════
  `;
}

console.log(generateInvoice(15750.5));
/*
    ════════════════════════════════════
              চালান / INVOICE
    ════════════════════════════════════

    পরিমাণ (সংখ্যায়): ১৫৭৫০.৫০ টাকা
    পরিমাণ (কথায়): পনেরো হাজার সাত শত পঞ্চাশ টাকা পঞ্চাশ পয়সা

    ════════════════════════════════════
*/
```

### Check/Cheque Writing

```ts
function generateCheque(payee: string, amount: number, date: string) {
  const { convertToBanglaWords } = useBanglaKit();

  return {
    payee: payee,
    amount: amount,
    amountInWords: convertToBanglaWords(amount),
    date: date,
    format: function () {
      return `
        ┌─────────────────────────────────────────┐
        │              ব্যাংক চেক                 │
        ├─────────────────────────────────────────┤
        │ তারিখ: ${this.date.padEnd(30)} │
        │                                         │
        │ প্রদান করুন: ${this.payee.padEnd(24)} │
        │                                         │
        │ টাকা: ${String(this.amount).padEnd(31)} │
        │                                         │
        │ কথায়: ${this.amountInWords.padEnd(30)} │
        │        ${" ".repeat(30)} │
        │                                         │
        │                          স্বাক্ষর: _____ │
        └─────────────────────────────────────────┘
      `;
    },
  };
}

const cheque = generateCheque("মোঃ আহমেদ", 50000, "২৯/১০/২০২৫");
console.log(cheque.format());
```

### Payment Receipt

```ts
interface PaymentDetails {
  invoiceNo: string;
  customerName: string;
  amount: number;
  paymentMethod: string;
}

function generateReceipt(payment: PaymentDetails): string {
  const { convertToBanglaWords, convertToBanglaNumber } = useBanglaKit();

  return `
    ╔═══════════════════════════════════════╗
    ║           পেমেন্ট রসিদ               ║
    ╠═══════════════════════════════════════╣
    ║ চালান নং: ${payment.invoiceNo.padEnd(25)} ║
    ║ গ্রাহক: ${payment.customerName.padEnd(28)} ║
    ║                                       ║
    ║ পরিমাণ: ${convertToBanglaNumber(payment.amount)} টাকা          ║
    ║                                       ║
    ║ কথায়:                                ║
    ║ ${convertToBanglaWords(payment.amount).padEnd(38)}║
    ║                                       ║
    ║ পেমেন্ট মাধ্যম: ${payment.paymentMethod.padEnd(20)} ║
    ╚═══════════════════════════════════════╝
  `;
}

const receipt = generateReceipt({
  invoiceNo: "INV-001234",
  customerName: "মোঃ করিম",
  amount: 125000.75,
  paymentMethod: "ক্যাশ",
});

console.log(receipt);
```

### React Component Example

```tsx
import { useBanglaKit } from "@polashmahmud/banglakit";

interface PaymentSummaryProps {
  amount: number;
  description: string;
}

function PaymentSummary({ amount, description }: PaymentSummaryProps) {
  const { convertToBanglaWords, convertToBanglaNumber } = useBanglaKit();

  return (
    <div className="payment-summary">
      <h3>পেমেন্ট সারাংশ</h3>
      <div className="payment-details">
        <p className="description">{description}</p>
        <div className="amount-section">
          <p className="amount-numeric">
            <strong>পরিমাণ:</strong> {convertToBanglaNumber(amount)} টাকা
          </p>
          <p className="amount-words">
            <strong>কথায়:</strong> {convertToBanglaWords(amount)}
          </p>
        </div>
      </div>
    </div>
  );
}

// Usage
<PaymentSummary amount={25750.5} description="মাসিক সাবস্ক্রিপশন ফি" />;
```

## Best Practices

### Input Validation

```ts
function safeConvertToBanglaWords(amount: number): string {
  const { convertToBanglaWords } = useBanglaKit();

  // Validate input
  if (typeof amount !== "number" || isNaN(amount)) {
    throw new Error("Invalid input: Amount must be a valid number");
  }

  // Check for negative values
  if (amount < 0) {
    throw new Error("Negative amounts are not supported");
  }

  // Limit decimal places to 2
  const roundedAmount = Math.round(amount * 100) / 100;

  return convertToBanglaWords(roundedAmount);
}

// Usage
try {
  console.log(safeConvertToBanglaWords(1234.567));
  // Output: এক হাজার দুই শত চৌত্রিশ টাকা পঁচান্ন পয়সা
} catch (error) {
  console.error(error.message);
}
```

### Formatting Large Numbers

```ts
// Helper function for comma formatting
function formatBengaliCurrency(amount: number): string {
  const { convertToBanglaWords, convertToBanglaNumber } = useBanglaKit();

  // Format with Bengali grouping (XX,XX,XXX)
  const formatted = amount.toLocaleString("bn-BD", {
    style: "currency",
    currency: "BDT",
  });

  return {
    numeric: convertToBanglaNumber(amount),
    words: convertToBanglaWords(amount),
    formatted: formatted,
  };
}

console.log(formatBengaliCurrency(1234567.89));
/*
{
  numeric: "১২৩৪৫৬৭.৮৯",
  words: "বারো লক্ষ চৌত্রিশ হাজার পাঁচ শত সাতষট্টি টাকা ঊনিশ পয়সা",
  formatted: "৳১২,৩৪,৫৬৭.৮৯"
}
*/
```

### Performance Optimization

```ts
// ✅ Good: Cache results for repeated use
const amountCache = new Map<number, string>();

function getCachedBanglaWords(amount: number): string {
  if (amountCache.has(amount)) {
    return amountCache.get(amount)!;
  }

  const words = convertToBanglaWords(amount);
  amountCache.set(amount, words);
  return words;
}

// ❌ Avoid: Converting same amount multiple times
function displayInvoice(amount: number) {
  console.log(convertToBanglaWords(amount)); // 1st call
  console.log(convertToBanglaWords(amount)); // 2nd call - wasteful
  console.log(convertToBanglaWords(amount)); // 3rd call - wasteful
}

// ✅ Good: Convert once, reuse
function displayInvoice(amount: number) {
  const wordsAmount = convertToBanglaWords(amount);
  console.log(wordsAmount);
  console.log(wordsAmount);
  console.log(wordsAmount);
}
```

### Error Handling in Production

```ts
interface ConversionResult {
  success: boolean;
  words?: string;
  error?: string;
}

function robustConvertToBanglaWords(amount: number): ConversionResult {
  try {
    // Validate input
    if (typeof amount !== "number") {
      return {
        success: false,
        error: "Input must be a number",
      };
    }

    if (isNaN(amount)) {
      return {
        success: false,
        error: "Input is not a valid number",
      };
    }

    if (amount < 0) {
      return {
        success: false,
        error: "Negative amounts are not supported",
      };
    }

    if (amount > 999999999) {
      return {
        success: false,
        error: "Amount exceeds maximum limit",
      };
    }

    // Round to 2 decimal places
    const rounded = Math.round(amount * 100) / 100;

    return {
      success: true,
      words: convertToBanglaWords(rounded),
    };
  } catch (error) {
    return {
      success: false,
      error: "Conversion failed: " + (error as Error).message,
    };
  }
}

// Usage
const result = robustConvertToBanglaWords(12345.67);
if (result.success) {
  console.log(result.words);
} else {
  console.error(result.error);
}
```

## Common Use Cases

### 1. Financial Applications

```ts
// Invoice systems
const invoiceAmount = 45780.5;
console.log(convertToBanglaWords(invoiceAmount));

// Salary slips
const salary = 50000;
console.log(`বেতন: ${convertToBanglaWords(salary)}`);

// Tax calculations
const tax = 7500.25;
console.log(`কর: ${convertToBanglaWords(tax)}`);
```

### 2. Banking Applications

```ts
// Account balance
const balance = 125000;
console.log(`উপলব্ধ ব্যালেন্স: ${convertToBanglaWords(balance)}`);

// Transaction amount
const transaction = 5000;
console.log(`লেনদেন: ${convertToBanglaWords(transaction)}`);

// Loan amount
const loanAmount = 1000000;
console.log(`ঋণের পরিমাণ: ${convertToBanglaWords(loanAmount)}`);
```

### 3. E-commerce

```ts
// Order total
const orderTotal = 3450.75;
console.log(`মোট: ${convertToBanglaWords(orderTotal)}`);

// Discount amount
const discount = 500;
console.log(`ছাড়: ${convertToBanglaWords(discount)}`);

// Shipping cost
const shipping = 150;
console.log(`ডেলিভারি চার্জ: ${convertToBanglaWords(shipping)}`);
```

## Limitations & Considerations

### Current Limitations

- ⚠️ Maximum supported value: ~99 crores (999,999,999)
- ⚠️ Decimal precision: 2 decimal places (paisa)
- ⚠️ Negative numbers: Not supported
- ⚠️ Currency: Fixed to টাকা/পয়সা format

### Workarounds

```ts
// For larger numbers, split into parts
const veryLargeAmount = 1500000000; // 150 crore
const crores = Math.floor(veryLargeAmount / 10000000);
const remaining = veryLargeAmount % 10000000;

console.log(
  `${convertToBanglaWords(crores)} কোটি ${convertToBanglaWords(remaining)}`
);

// For different currencies, post-process
const usdAmount = 1000;
const words = convertToBanglaWords(usdAmount);
const customWords = words.replace("টাকা", "ডলার");
console.log(customWords); // এক হাজার ডলার
```

## Quick Reference

### Function Signature

```ts
convertToBanglaWords(amount: number): string
```

### Input-Output Examples

| Input      | Output                                       |
| ---------- | -------------------------------------------- |
| `0`        | শূন্য টাকা                                   |
| `1`        | এক টাকা                                      |
| `10`       | দশ টাকা                                      |
| `100`      | এক শত টাকা                                   |
| `1000`     | এক হাজার টাকা                                |
| `100000`   | এক লক্ষ টাকা                                 |
| `10000000` | এক কোটি টাকা                                 |
| `0.50`     | শূন্য টাকা পঞ্চাশ পয়সা                      |
| `1234.56`  | এক হাজার দুই শত চৌত্রিশ টাকা ছাপ্পান্ন পয়সা |

## Related Documentation

- [Installation Guide](./install.md)
- [Date & Time Formatting](./date-and-time.md)
- [Number Conversion](./number-converter.md)
- [API Reference](./index.md)

## FAQ

**Q: Can I use this for currencies other than BDT (Taka)?**
A: The function outputs "টাকা" by default. You can replace it with your desired currency using string replacement.

**Q: How are decimal values handled?**
A: Decimals are converted to "পয়সা" (paisa). The function rounds to 2 decimal places automatically.

**Q: What's the maximum number supported?**
A: The function reliably handles numbers up to 99 crores (999,999,999).

**Q: Can I convert negative numbers?**
A: No, the function is designed for positive amounts only, as it's intended for financial contexts.

**Q: Is this suitable for legal documents?**
A: Yes, the output format is commonly used in Bangladeshi legal and financial documents.`
