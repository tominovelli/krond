# Multi-Slider Navigation Bridge

A lightweight Vanilla JS utility to decouple Webflow's native slider controls from their internal DOM structure, allowing for 100% layout flexibility.

## Overview
Webflow sliders restrict navigation arrows to stay within the slider mask. This script bridges the click events from any custom element on the page to the hidden native arrows, enabling custom UI placement anywhere in your layout.

## Implementation

### 1. Webflow Native Setup
* Keep the native **Left Arrow** and **Right Arrow** inside the slider component.
* Set both native arrows to `display: none`.
* Add the attribute `kr-arrow-slider` to the native arrows.
  * *Example Left:* `kr-arrow-slider="l1"`
  * *Example Right:* `kr-arrow-slider="r1"`

### 2. Custom UI Setup
* Create your custom buttons/elements anywhere on the page.
* Assign the exact same attribute values used on the native arrows.
  * *Custom Left Button:* `kr-arrow-slider="l1"`
  * *Custom Right Button:* `kr-arrow-slider="r1"`

### 3. Scaling
To use multiple sliders on a single page, simply increment the ID (e.g., `l2/r2`, `l3/r3`).

## Installation

Add the following snippet to the `</body>` tag of your Webflow project. 
*Note: Using v1.2 to reflect the new directory structure.*

```html
<script src="[https://cdn.jsdelivr.net/gh/tominovelli/krond@v1.2/slider-nav/slider-nav.js](https://cdn.jsdelivr.net/gh/tominovelli/krond@v1.2/slider-nav/slider-nav.js)" defer></script>
