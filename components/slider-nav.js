<script>
/**
 * KRONO | MULTI-SLIDER NAVIGATION BRIDGE
 * Version: 2.1.0
 * Author: KRONO Strategy
 * Function: Links custom buttons to Webflow native slider arrows using the [kr-arrow-slider] attribute.
 * Supports multiple sliders on a single page.
 */

document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Configuration: Define the custom attribute name
  const ATTR_NAME = 'kr-arrow-slider';

  // 2. Select all elements present on the page that have this attribute
  // (This includes both your custom buttons and the native Webflow arrows)
  const allElements = document.querySelectorAll(`[${ATTR_NAME}]`);

  allElements.forEach(element => {
    // 3. Filter Logic: Check if the current element is a NATIVE Webflow arrow.
    // We only want to add click listeners to your CUSTOM buttons, not the native ones.
    const isNativeArrow = element.classList.contains('w-slider-arrow-left') || 
                          element.classList.contains('w-slider-arrow-right');

    // If it's a native arrow, skip it (stop execution for this iteration)
    if (isNativeArrow) return; 

    // 4. Attach Click Event to the CUSTOM button
    element.addEventListener('click', function() {
      
      // Get the unique identifier value (e.g., "l1", "r2")
      const sliderID = this.getAttribute(ATTR_NAME);
      
      if (!sliderID) return;

      // 5. Find the Target: Search for the NATIVE arrow that has the SAME attribute value
      // Selector logic: Find element with class .w-slider-arrow-left OR .w-slider-arrow-right
      // AND attribute kr-arrow-slider="sliderID"
      const targetNativeArrow = document.querySelector(
        `.w-slider-arrow-left[${ATTR_NAME}="${sliderID}"], .w-slider-arrow-right[${ATTR_NAME}="${sliderID}"]`
      );

      // 6. Execute the Action
      if (targetNativeArrow) {
        targetNativeArrow.click(); // Simulates a physical click on the hidden native arrow
      } else {
        console.warn(`KR Bridge Error: Native arrow not found for ID: ${sliderID}`);
      }
    });
  });
});
</script>
