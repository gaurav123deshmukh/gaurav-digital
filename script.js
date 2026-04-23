// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// 1. Hero Section Initial Load - Dynamic 3D Tech Reveal
const heroTimeline = gsap.timeline();

heroTimeline.fromTo(".anim-hero", 
    { 
        y: 80, 
        opacity: 0,
        rotationX: -20, 
        transformPerspective: 500
    },
    { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        duration: 1.2, 
        stagger: 0.15, 
        ease: "expo.out", 
        delay: 0.2 
    }
);

// 2. Scroll Animation for the Section Header
gsap.fromTo(".anim-scroll",
    {
        scale: 0.8,
        opacity: 0
    },
    {
        scrollTrigger: {
            trigger: ".services",
            start: "top 75%", 
        },
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.7)" 
    }
);

// 3. Scroll Animation for Service Cards - 3D Flip Up
gsap.fromTo(".anim-card",
    {
        y: 100,
        opacity: 0,
        rotationY: 15, 
        scale: 0.9
    },
    {
        scrollTrigger: {
            trigger: ".service-grid",
            start: "top 80%",
        },
        y: 0,
        opacity: 1,
        rotationY: 0,
        scale: 1,
        duration: 1,
        stagger: 0.1, 
        ease: "back.out(1.5)" 
    }
);
