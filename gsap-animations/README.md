# 🚀 KROND | Smart Reveal Engine (GSAP)

A high-performance animation engine for Webflow, engineered to bridge the gap between high-end design and technical SEO. This system manages scroll-based reveals while prioritizing **First Contentful Paint (FCP)** and eliminating **FOUC** (Flash of Unstyled Content).

## 💡 The Philosophy

* **SEO & FCP Protection:** If content is already in the viewport on page load (e.g., Hero section), the script skips the animation. This ensures instant visibility for Google, protecting your performance scores.
* **Smart "Batch" Staggering:** Instead of triggering an entire list at once, the engine only staggers elements that enter the viewport together.
* **FOUC Prevention:** Avoids the "flash" of hidden content by checking visibility status before applying initial states.

---

## 🛠 Usage & Triggers

You can trigger animations using three different methods. You can even combine them in the same project.

### 1. Staggered Entrance (Container -> Children)

Use this to animate all direct children of a container in a sequence.

* **Method A (Attribute):** Add `data-animate="stagger"` to the parent.
* **Method B (Combo Class):** Add `.is-stagger` to the parent.
* **Method C (Script-level):** Add the class to `kr-stagger-classes` in the script tag.

### 2. Individual Reveal (Fade-in)

Use this to animate a single element.

* **Method A (Attribute):** Add `data-animate="fade"` to the element.
* **Method B (Combo Class):** Add `.is-fade` to the element.
* **Method C (Script-level):** Add the class to `kr-fade-classes` in the script tag.

---

## ⚙️ Webflow Setup & Requirements

1. **Webflow GSAP App:** You **MUST** enable the **ScrollTrigger** checkbox in the GSAP panel (left-side menu) inside Webflow.
2. **Fixed Heights:** To prevent Layout Shifts (CLS) and ensure accurate trigger points, image wrappers or animated containers should have a **fixed height** or a defined aspect ratio.

---

## 📦 Installation

Add the following to your Webflow project's **Before `</body>` tag**. You can configure your custom classes directly in the attributes:

```html
<script 
  src="https://cdn.jsdelivr.net/gh/tominovelli/krond@main/gsap-animations/gsap-reveal.js" 
  defer
  kr-stagger-classes=".custom-class-1, .custom-class-2"
  kr-fade-classes=".custom-class-1, .custom-class-2"
></script>

```

### Configuration breakdown:

* `kr-stagger-classes`: List your parent containers (separate by comma).
* `kr-fade-classes`: List your individual elements (separate by comma).
* *Note: Always include the dot (`.`) for classes.*

---

© 2026 [KROND.at](https://www.krond.at). Engineered for high-end performance.
