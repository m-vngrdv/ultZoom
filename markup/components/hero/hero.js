let btnsPreview = document.querySelectorAll('.panel__button-preview'),
    imgsFull = document.querySelectorAll('.panel__image-full'),
    texts = document.querySelectorAll('.panel__text-device');

let typingTimeline = gsap.timeline({paused:true});

function animateText() {
    if(window.innerWidth > 1024) {

        let activePanel = document.querySelector('.panel__text-device-active');

        let name = activePanel.querySelector('.panel__device-name'),
            desc = activePanel.querySelector('.panel__device-desc'),
            price = activePanel.querySelector('.panel__device-price'),
            btn = activePanel.querySelector('.panel__device-btn');
        
        typingTimeline
        .from(name, {y: 100, opacity: 0}, 0)
        .from(desc, {y: 100, opacity: 0}, 0.2)
        .from(price, {y: 100, opacity: 0}, 0.4)
        .from(btn, {y: 100, opacity: 0}, 0.6);

        typingTimeline.restart();
    }
}


document.addEventListener("click", function(event) {
    if(event.target.classList.contains('panel__button-device')) {
        let idTarget = event.target.dataset.device;

        imgsFull.forEach(element => {
            if(element.dataset.device == idTarget) {
                element.classList.add('panel__image-full-active');
            }
            else {
                element.classList.remove('panel__image-full-active');
            }
        });

        texts.forEach(element => {
            if(element.dataset.device == idTarget) {
                element.classList.add('panel__text-device-active');
            }
            else {
                element.classList.remove('panel__text-device-active');
            }
        });
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