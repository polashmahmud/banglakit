## Function 1: `convertToBanglaWords()`

This function checks if a Bangla year is a leap year.

### **Usage:**

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
