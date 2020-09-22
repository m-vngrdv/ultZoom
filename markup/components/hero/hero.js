let btnPreviewTop = document.querySelector('.panel__button-device--top'),
    btnPreviewLeft = document.querySelector('.panel__button-device--left'),
    imgFullTop = document.querySelector('.panel__image-full--01'),
    imgFullLeft = document.querySelector('.panel__image-full--02'),
    textTop = document.querySelector('.panel__text-device--top'),
    textLeft = document.querySelector('.panel__text-device--left');

let typingTimeline = gsap.timeline({paused:true});

window.addEventListener('resize', function(event){
    typingTimeline.kill();
});


function animateText() {
    if(window.innerWidth > 1024) {
        gsap.utils.toArray(".panel__text-device-active").forEach(function(elem) {
            elem._name = elem.querySelector('.panel__device-name');
            elem._desc = elem.querySelector('.panel__device-desc');
            elem._price = elem.querySelector('.panel__device-price');
            elem._btn = elem.querySelector('.panel__device-btn');
    
            typingTimeline.fromTo(elem._name, 2, {
                width: "0",
              }, {
                width: "auto",
                ease:  SteppedEase.config(37)
              }, 0)
              .fromTo(elem._name, 1, {
                "border-right-color": "rgba(0,148,115,0.75)"
              }, {
                "border-right-color": "rgba(0,148,115,0)",
                repeat: -1,
                ease:  SteppedEase.config(37)
              }, "<")
              .from(elem._desc, {y: 100, opacity: 0}, 2)
              .from(elem._price, {y: 100, opacity: 0}, 2.2)
              .from(elem._btn, {y: 100, opacity: 0}, 2.4);
        });
        
        typingTimeline.restart();
    }
}

document.addEventListener("click", function(event) {
    if(event.target == btnPreviewTop) {
        imgFullTop.classList.add('panel__image-full-active');
        imgFullLeft.classList.remove('panel__image-full-active');
        textTop.classList.add('panel__text-device-active');
        textLeft.classList.remove('panel__text-device-active');
        animateText();
    }
    else if(event.target == btnPreviewLeft) {
        imgFullTop.classList.remove('panel__image-full-active');
        imgFullLeft.classList.add('panel__image-full-active');
        textTop.classList.remove('panel__text-device-active');
        textLeft.classList.add('panel__text-device-active');
        animateText();
    }
});


document.addEventListener("click", function(event) {
    if(event.target.classList.contains('btn-order')) {
        modal.classList.add('modal-active');
    }
  });
  
  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});