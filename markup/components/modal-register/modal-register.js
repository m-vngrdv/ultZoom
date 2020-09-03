let btnsReg = document.querySelectorAll('.btn-register'),
    modalReg = document.querySelector('.modal-register');

for (var i = 0; i < btnsReg.length; i++) {
    btnsReg[i].addEventListener('click', function() {
        event.preventDefault();

        let modals = document.querySelectorAll('.modal-active');
            modals.forEach(element => {
            element.classList.remove('modal-active');
        });
        modalReg.classList.add('modal-active');
    });
}