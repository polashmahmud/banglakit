# @polashmahmud/bangla-date-utils

A lightweight JavaScript utility for displaying Bangla (Bengali) dates and converting English numbers into Bangla digits.
It allows developers to easily localize their applications with Bangla date and number formatting.

---

## Features

- Convert English numbers to Bangla digits
- Display today’s date in Bangla
- Works with Vue, React, Next.js, Node.js, or any JavaScript/TypeScript project
- Built with TypeScript and has zero dependencies

---

## Installation

You can install the package using npm or yarn:

```bash
npm install @polashmahmud/bangla-date-utils
# or
yarn add @polashmahmud/bangla-date-utils
```

---

## Usage Examples

### Display Today’s Date in Bangla

```ts
import { useBanglaDate } from "@polashmahmud/bangla-date-utils";

const { getTodayInBangla } = useBanglaDate();

console.log(getTodayInBangla());
// Output: ২৫ অক্টোবর, শনিবার
```

---

### Convert English Numbers to Bangla Digits

```ts
import { useBanglaDate } from "@polashmahmud/bangla-date-utils";

const { convertToBanglaNumber } = useBanglaDate();

console.log(convertToBanglaNumber(2025));
// Output: ২০২৫

console.log(convertToBanglaNumber(1234567890));
// Output: ১২৩৪৫৬৭৮৯০
```

---

## Example with Vue.js

```vue
<script setup lang="ts">
import { useBanglaDate } from "@polashmahmud/bangla-date-utils";

const { getTodayInBangla } = useBanglaDate();
</script>

<template>
  <div class="text-lg font-semibold">
    {{ getTodayInBangla() }}
  </div>
</template>
```

---

## Example with Node.js

```js
const { useBanglaDate } = require("@polashmahmud/bangla-date-utils");

const { getTodayInBangla } = useBanglaDate();
console.log(getTodayInBangla());
```

---

## API Reference

### `useBanglaDate()`

This function returns two helper methods:

| Function                             | Description                                        |
| ------------------------------------ | -------------------------------------------------- |
| `getTodayInBangla()`                 | Returns today’s date written in Bangla             |
| `convertToBanglaNumber(num: number)` | Converts a given English number into Bangla digits |

---

## Technical Details

- Written in TypeScript
- Compatible with ES Modules
- No external dependencies
- Lightweight and framework-agnostic

---

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
