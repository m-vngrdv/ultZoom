let btnPreviewTop = document.querySelector('.panel__button-device--top'),
    btnPreviewLeft = document.querySelector('.panel__button-device--left'),
    imgFullTop = document.querySelector('.panel__image-full--01'),
    imgFullLeft = document.querySelector('.panel__image-full--02'),
    textTop = document.querySelector('.panel__text-device--top'),
    textLeft = document.querySelector('.panel__text-device--left');

document.addEventListener("click", function(event) {
    if(event.target == btnPreviewTop) {
        imgFullTop.classList.add('panel__image-full-active');
        imgFullLeft.classList.remove('panel__image-full-active');
        textTop.classList.add('panel__text-device-active');
        textLeft.classList.remove('panel__text-device-active');
    }
    else if(event.target == btnPreviewLeft) {
        imgFullTop.classList.remove('panel__image-full-active');
        imgFullLeft.classList.add('panel__image-full-active');
        textTop.classList.remove('panel__text-device-active');
        textLeft.classList.add('panel__text-device-active');
    }
});


document.addEventListener("click", function(event) {
    if(event.target.classList.contains('btn-order')) {
        document.querySelector('.modal-order').classList.add('modal-active');
    }
  });
  
  