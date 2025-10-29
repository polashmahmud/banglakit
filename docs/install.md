# Installation

## Overview

**@polashmahmud/banglakit** is a comprehensive TypeScript/JavaScript library designed for Bangla (Bengali) localization. It provides robust utilities for date formatting, number conversion, and calendar operations, enabling developers to build applications with native Bangla language support.

### Key Features

- 🗓️ Bangla calendar and date formatting
- 🔢 Number to Bangla digit conversion
- 📝 Number to Bangla words conversion
- ⚡ Lightweight and tree-shakable
- 📦 Zero dependencies
- 🎯 Full TypeScript support
- 🌐 Works in Node.js and browser environments

## Package Manager Installation

Choose your preferred package manager to install BanglaKit:

### npm

```bash
npm install @polashmahmud/banglakit
```

### yarn

```bash
yarn add @polashmahmud/banglakit
```

### pnpm

```bash
pnpm add @polashmahmud/banglakit
```

### bun

```bash
bun add @polashmahmud/banglakit
```

## Requirements

- **Node.js**: 14.x or higher
- **TypeScript**: 4.x or higher (optional, for TypeScript projects)

## Quick Start

After installation, you can start using BanglaKit in your project:

### ES Modules

```javascript
import { useBanglaKit } from "@polashmahmud/banglakit";
const { convertToBanglaNumber } = useBanglaKit();

const banglaNumber = toBanglaNumber(12345);
console.log(banglaNumber); // ১২৩৪৫

const banglaDate = toBanglaDate(new Date());
console.log(banglaDate);
```

## Next Steps

- 📅 [Date & Time Formatting](./date-and-time.md) - Learn about Bangla date utilities
- 🔢 [Number Conversion](./number-converter.md) - Number to Bangla conversion guide
- 📝 [Words Conversion](./in-words.md) - Convert numbers to Bangla words

## Support

If you encounter any issues during installation or usage, please:

- Check the [GitHub Issues](https://github.com/polashmahmud/banglakit/issues)
- Report a bug or request a feature
- Contribute to the project
