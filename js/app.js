window.addEventListener('scroll', event => {
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
});

gsap.config({
    force3D: false
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
});