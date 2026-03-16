# 🚀 KROND | Webflow Agency & Components Library

A Vienna-based Webflow Agency specialized in bridging the gap between high-end design and technical SEO performance.
🌍 **Website:** [krond.at](https://www.krond.at) | 📍 **Location:** Vienna, Austria | ✉️ **Contact:** [hallo@krond.at](mailto:hallo@krond.at)

---

## 📦 Open Source Webflow Components
This repository hosts custom JavaScript components used for KROND Webflow projects, designed to bypass native Webflow limitations without compromising performance.

### 1. Multi-Slider Navigation Bridge (`slider-nav.js`)

#### 🛑 The Problem
Native Webflow slider arrows are "trapped" inside the slider component. If you want your navigation arrows to be located elsewhere on the page (e.g., in a different section or a separate grid column), you cannot do it natively without breaking the slider structure.

#### ✅ The Solution
This script acts as a bridge. It allows you to use **any** element (Div, Button, Image) as a slider trigger anywhere on the page, giving you 100% layout freedom.

**How to use it in Webflow:**
1. **Hide the native arrows:** Keep the native Webflow Left/Right arrows inside the slider, but set them to `display: none`.
2. **Assign the Bridge ID:** Add the custom attribute `kr-arrow-slider` to the **native** arrows.
   - Example: Native Left arrow -> `kr-arrow-slider="l1"`
   - Example: Native Right arrow -> `kr-arrow-slider="r1"`
3. **Create your Custom UI:** Create your custom buttons anywhere on your page.
4. **Connect the dots:** Give your custom buttons the **exact same attribute values**:
   - Custom Left Button -> `kr-arrow-slider="l1"`
   - Custom Right Button -> `kr-arrow-slider="r1"`

*Note: You can have multiple sliders on the same page. Just ensure each pair has a unique ID (e.g., `l2/r2`, `l3/r3`).*

#### 🚀 Installation
Add this script to the `</body>` tag of your Webflow project or page:

```html
<script src="[https://cdn.jsdelivr.net/gh/tominovelli/krond@v1.1/components/slider-nav.js](https://cdn.jsdelivr.net/gh/tominovelli/krond@v1.1/components/slider-nav.js)" defer></script>
