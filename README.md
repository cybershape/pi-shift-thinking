# pi-shift-thinking

[![CI](https://github.com/cybershape/pi-shift-thinking/actions/workflows/ci.yml/badge.svg)](https://github.com/cybershape/pi-shift-thinking/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/pi-shift-thinking.svg)](https://www.npmjs.com/package/pi-shift-thinking)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A [Pi coding agent](https://pi.dev) extension that provides convenient keyboard shortcuts to adjust reasoning / thinking levels on the fly.

## Features

- **Quick Adjustment**: Easily adjust thinking levels up or down without leaving your prompt workflow.
- **Model Aware**: Automatically resolves supported thinking levels for the active model (using `@earendil-works/pi-ai`), with a robust fallback ladder (`off`, `minimal`, `low`, `medium`, `high`, `xhigh`, `max`).
- **Interactive Notifications**: Shows current level status and alerts when min/max boundaries are reached or if the active model lacks reasoning support.

## Keyboard Shortcuts

| Shortcut | Action | Description |
| --- | --- | --- |
| `Shift + Up` | Increase Thinking Level | Steps thinking level up to the next available tier |
| `Shift + Down` | Decrease Thinking Level | Steps thinking level down to the previous available tier |

## Installation

### Via Pi Package Catalog / npm

```bash
pi install npm:pi-shift-thinking
```

### Via Git Repository

```bash
pi install git:github.com/cybershape/pi-shift-thinking
```

### Try Without Installing

```bash
pi -e git:github.com/cybershape/pi-shift-thinking
```

## Requirements

- Pi Coding Agent (`@earendil-works/pi-coding-agent`) `>= 0.80.0`
- `@earendil-works/pi-ai` `>= 0.80.0`

## Development

Install dependencies and run checks:

```bash
npm install
npm run check
```

## License

[MIT](LICENSE) © cybershape
