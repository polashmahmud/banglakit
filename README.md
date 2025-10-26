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
