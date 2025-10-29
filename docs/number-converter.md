## Function 1: `convertToBanglaNumber()`

This function converts English digits into Bangla digits.

### **Usage:**

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
