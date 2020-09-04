let preloadTimeline = gsap.timeline();

function animationPreload() {
  let posTopBtn = (window.innerWidth < 1230) ? { right: '50%' } : { top: '50%'};

  preloadTimeline
  .to(".loader__circle", { width: 0, height: 0})
  .to(".loader", {display: 'none'})
  .from(".page__body--bg .header__container", {y: -100})
  .fromTo(".panel__bg-circle", { scale: 0 }, { scale: 1, transformOrigin: "50% 50%"}, ">")
  .from(".panel__button-device--left", { left: '50%' })
  .from(".panel__button-device--top", posTopBtn, "<")
  .fromTo(".panel__image-wrap", { scale: 0 }, { scale: 1 }, "<")

  .fromTo(".panel__device-name", 2, {
    width: "0",
  }, {
    width: "auto",
    ease:  SteppedEase.config(37)
  }, "<")
  .fromTo(".panel__device-name", 1, {
    "border-right-color": "rgba(0,148,115,0.75)"
  }, {
    "border-right-color": "rgba(0,148,115,0)",
    repeat: -1,
    ease:  SteppedEase.config(37)
  }, ">")
  .from(".panel__device-desc", {y: 100, opacity: 0}, "<")
  .from(".panel__device-price", {y: 100, opacity: 0}, "<0.2")
  .from(".panel__device-btn", {y: 100, opacity: 0}, "<0.2")
  ;
}

window.addEventListener('resize', function(event){
  if(window.innerWidth > 1024 && preloadTimeline.progress() == 0) {
    animationPreload();
    preloadTimeline.play();
  }
  TweenLite.set(".panel__button-device--top, .panel__button-device--left", {clearProps:"all"});
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
  
    //Animation preload
    if(window.innerWidth > 1024) {
      animationPreload();
      preloadTimeline.play();
    }

    //SlowMo
    let speed = 50;
    
    gsap.utils.toArray(".slowSection").forEach(function(elem) {
        elem._text = elem.querySelectorAll('.slowText');
        elem._block = elem.querySelectorAll('.slowBlock');

        let scene1 = gsap.timeline();
        scene1.fromTo(elem._text, { y: 1 * speed }, { y: -1 * speed }, 0);
        scene1.fromTo(elem._block, {y: 0.2 * speed }, { y: -0.4 * speed}, 0);
        
        ScrollTrigger.create({
            animation: scene1,
            trigger: elem,
            //start: "top bottom",
            start: "top bottom",
            //end: "bottom top",
            end: "bottom top",
            scrub: 5,
        });


    });
  });
