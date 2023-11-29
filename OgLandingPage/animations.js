// GSAP timeline for animations
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// Header animations
tl.from("header h1", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
tl.from("header p", { opacity: 0, y: -20, duration: 0.8 }, "-=0.5");

// Navbar animations
tl.from(".navbar-logo", { opacity: 0, x: -20, duration: 0.5 }, "-=0.3");
tl.from(
  ".navbar-links li",
  { opacity: 0, y: -20, duration: 0.5, stagger: 0.2 },
  "-=0.3"
);
tl.from(".burger-menu", { opacity: 0, x: 20, duration: 0.5 }, "-=0.3");

// Features section animations
tl.from(".feature", { opacity: 0, y: 30, duration: 0.8, stagger: 0.3 });

// Contact section animations
tl.from(".contact h2", { opacity: 0, y: -20, duration: 0.8 }, "-=0.5");
tl.from(".contact form", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5");

// Footer animations
tl.from("footer", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5");
// Hero section animations
tl.from(".hero-images img", { opacity: 0, y: 50, duration: 0.8, stagger: 0.3 });
tl.from(".hero-content", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5");

// GSAP timeline for feature animations
const featureTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".features",
    start: "top bottom-=200",
  },
});

featureTimeline
  .from(".feature-images img", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.3,
  })
  .from(".feature-text", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.3,
    delay: 0.3,
  });
