# 🗓️ @polashmahmud/bangla-date-utils

A lightweight JavaScript utility to easily display **Bangla (Bengali) dates** and **convert English digits to Bangla digits**.
It helps developers localize their apps with Bangla date and number formatting in just a few lines.

---

## 🚀 Features

✅ Convert English numbers → Bangla digits
✅ Display today's date in Bangla
✅ Works with Vue, React, Next.js, Node.js, or any JavaScript/TypeScript project
✅ TypeScript support with zero dependencies

---

## 📦 Installation

```bash
npm install @polashmahmud/bangla-date-utils
# or
yarn add @polashmahmud/bangla-date-utils
```

---

## 💡 Usage Examples

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

## 🧩 Vue.js Example

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

## ⚙️ Node.js Example

```js
const { useBanglaDate } = require("@polashmahmud/bangla-date-utils");

const { getTodayInBangla } = useBanglaDate();
console.log(getTodayInBangla());
```

---

## 🧠 API Reference

### `useBanglaDate()`

This function returns two helpers:

| Function                             | Description                                      |
| ------------------------------------ | ------------------------------------------------ |
| `getTodayInBangla()`                 | Returns today’s date written in Bangla           |
| `convertToBanglaNumber(num: number)` | Converts a given English number to Bangla digits |

---

## Technical Details

- Written in **TypeScript**
- **ES Module** compatible
- **Zero dependencies**
- Pure **JavaScript logic**, lightweight and framework-agnostic

---

## 🧑‍💻 Author

**Polash Mahmud**
📦 [npmjs.com/~polashmahmud](https://www.npmjs.com/~polashmahmud)
🌐 [GitHub Profile](https://github.com/polashmahmud)

---

## 📄 License

This package is released under the [MIT License](./LICENSE).
You’re free to use it in both personal and commercial projects.

---

## 🌟 Contributing

Want to add a new feature or report a bug?
Please feel free to **open an issue** or **submit a pull request** on the GitHub repository.
