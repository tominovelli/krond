/**
 * KROND | Smart Reveal Engine (GSAP)
 * Version: 1.3
 */

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener("pageshow", function (event) {
    if (event.persisted) ScrollTrigger.refresh();
  });

  // =========================================================================
  // AUTO-CONFIGURATION
  // =========================================================================
  
  // Find the script tag that loaded this file
  const currentScript = document.querySelector('script[src*="gsap-reveal.js"]');
  
  // Get custom classes from attributes (kr-stagger-classes and kr-fade-classes)
  const customStagger = currentScript?.getAttribute('kr-stagger-classes') || '';
  const customFade = currentScript?.getAttribute('kr-fade-classes') || '';

  // Default internal classes
  const jsStaggerClasses = ['.is-stagger'];
  const jsFadeClasses = ['.is-fade'];

  // Combine defaults with user-defined classes from the script tag
  let staggerSelector = '[data-animate~="stagger"]';
  if (jsStaggerClasses.length > 0) staggerSelector += ', ' + jsStaggerClasses.join(', ');
  if (customStagger) staggerSelector += ', ' + customStagger;

  let fadeSelector = '[data-animate~="fade"]';
  if (jsFadeClasses.length > 0) fadeSelector += ', ' + jsFadeClasses.join(', ');
  if (customFade) fadeSelector += ', ' + customFade;

  // =========================================================================
  // ANIMATION LOGIC (UNCHANGED BUT PROTECTED)
  // =========================================================================
  
  const containers = document.querySelectorAll(staggerSelector);
  containers.forEach((container) => {
    const items = gsap.utils.toArray(container.children);
    if(items.length === 0) return; 

    const itemsToAnimate = items.filter(item => {
      let testTrigger = ScrollTrigger.create({ trigger: item, start: "top 85%" });
      let needsAnimation = testTrigger.progress === 0; 
      testTrigger.kill(); 
      return needsAnimation;
    });

    if (itemsToAnimate.length === 0) return; 
    gsap.set(itemsToAnimate, { opacity: 0, y: 80 });

    ScrollTrigger.batch(itemsToAnimate, {
      start: "top 85%", 
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out", overwrite: true });
      }
    });
  });

  const singleElements = gsap.utils.toArray(fadeSelector);
  singleElements.forEach((el) => {
    let testTrigger = ScrollTrigger.create({ trigger: el, start: "top 85%" });
    let isConsumed = testTrigger.progress > 0; 
    testTrigger.kill(); 
    if (isConsumed) return; 

    gsap.set(el, { opacity: 0, y: 80 });
    ScrollTrigger.create({
      trigger: el, 
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", overwrite: true });
      }
    });
  });
});
