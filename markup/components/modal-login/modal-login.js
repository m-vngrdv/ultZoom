let btnsLogin = document.querySelectorAll('.btn-login'),
    modalLogin = document.querySelector('.modal-login');

for (var i = 0; i < btnsLogin.length; i++) {
    btnsLogin[i].addEventListener('click', function() {
        event.preventDefault();

        let modals = document.querySelectorAll('.modal-active');
            modals.forEach(element => {
            element.classList.remove('modal-active');
        });
    
        modalLogin.classList.add('modal-active');
    });
}