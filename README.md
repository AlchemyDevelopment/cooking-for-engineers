# 📐 Cooking for Engineers — Tabular Recipe Studio

> **Visual Flowchart & Tabular Recipe Notation (TRN) Generator**  
> Live on GitHub Pages: [https://alchemydevelopment.github.io/cooking-for-engineers/](https://alchemydevelopment.github.io/cooking-for-engineers/)

Inspired by Michael Chu's iconic **Cooking for Engineers** tabular recipe format, this web application transforms traditional prose recipes into intuitive, dependency-mapped flowchart tables.

---

## ✨ Features

- **Iconic Tabular Recipe Format**:
  - Top spanning banners for equipment & oven preheating steps.
  - Ingredients ordered on the left with dual measurements: US Customary & Metric (e.g. `4 oz (115 g)`).
  - Operations flow left-to-right, visually grouping ingredients as they merge into intermediate mixtures and the final dish.
- **Dynamic Recipe Scaler**:
  - Scale recipes on the fly (`0.5×`, `1×`, `1.5×`, `2×`, `3×`).
  - Automatically recalculates all quantities with natural cooking fractions (`1/4`, `1/3`, `1/2`, `2/3`, etc.).
- **Unit Mode Toggles**:
  - `Dual` (e.g. `1 cup (200 g) sugar`)
  - `US` Customary only
  - `Metric` only
- **Curated Preset Recipes**:
  - ⭐ *Chu's Famous Fudge Brownies* (the exact recipe from the original site)
  - 🍪 *Classic Chocolate Chip Cookies*
  - 🍝 *Authentic Spaghetti alla Carbonara*
  - 🥞 *Fluffy Buttermilk Pancakes*
  - 🍕 *72-Hour Fermented Pizza Dough*
  - ☕ *Engineer's V60 Pour Over Coffee*
- **Smart Text Importer**:
  - Paste any traditional recipe text (ingredients + steps). The built-in parser automatically extracts prep steps, amounts, units, and suggests action columns.
- **Interactive Kitchen Mode**:
  - Click any cell to mark ingredients prepped or steps completed.
  - One-click countdown timers for bake/rest durations with sound chimes.
- **Multi-Format Export**:
  - 🖼️ **High-Res PNG**: Pixel-perfect export ready for social media, print, or blogs.
  - 📐 **SVG Vector**: Infinitely scalable vector art.
  - 🖨️ **Print & PDF**: Optimized print-card stylesheet.
  - 🔗 **Shareable Link**: Encodes the recipe directly into the URL fragment for instant sharing with zero server backend required.
  - 💾 **JSON**: Import and export recipe schemas.
- **Theme Switcher**:
  - `Classic CFE`: Iconic green border and warm cream parchment styling.
  - `Engineering Blueprint`: Navy drafting paper with cyan gridlines.
  - `Slate Dark`: Modern dark mode with emerald accents.
  - `Editorial Cookbook`: Serif typography with warm paper tones.
  - `Laser Print`: Pure black-and-white high-contrast for laser printers.

---

## 🚀 Getting Started

Open [`index.html`](index.html) in any modern browser, or visit the live deployment at [https://alchemydevelopment.github.io/cooking-for-engineers/](https://alchemydevelopment.github.io/cooking-for-engineers/).

---

## 🛠️ Architecture & Math

Tabular Recipe Notation (TRN) solves the cognitive overload of traditional recipes by representing cooking as a **Directed Acyclic Graph (DAG)** of ingredients and reduction operations.

The solver computes:
1. `grid[row][0]`: The leaf ingredient.
2. `colspan`: Stretches horizontally to meet the exact column of the action that consumes it.
3. `rowspan`: Spans vertically to bundle all ingredients and sub-mixtures merged in that step.

---

## 📜 Credits

- Format design by **Michael Chu** ([Cooking for Engineers](http://www.cookingforengineers.com/)).
- Built with modern HTML5, Vanilla CSS, and JavaScript by **AlchemyDevelopment**.
