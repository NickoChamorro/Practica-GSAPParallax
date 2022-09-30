/* gsap.registerPlugin(ScrollTrigger); */

// gsap.defaults({ease:'none', duration: 2});

/* let tl = gsap.timeline(); */

gsap.to('#bg',{
    scrollTrigger: {
        scrub:1
    },
    scale:1.5
});

gsap.to('#man',{
    scrollTrigger: {
        scrub:1
    },
    scale:0.5
});

gsap.to('#mountain_left',{
    scrollTrigger: {
        scrub:1
    },
    x: -500
});

gsap.to('#mountain_right',{
    scrollTrigger: {
        scrub:1
    },
    x: 500
});

gsap.to('#clouds_1',{
    scrollTrigger: {
        scrub:1
    },
    x: 200
});

gsap.to('#clouds_2',{
    scrollTrigger: {
        scrub:1
    },
    x: -200
});

gsap.to('#text',{
    scrollTrigger: {
        scrub:1
    },
    scale:1.5,
    y:100
});

/* tl.from('.section',{
    scrollTrigger: {
        scrub:1
    },
    yPercent:-100
});  */


/* ScrollTrigger.create({
    animation: tl,
    trigger: '.container',
    start: 'top top',
    end: '+=1000',
    pin: true,
    scrub: true
}) */