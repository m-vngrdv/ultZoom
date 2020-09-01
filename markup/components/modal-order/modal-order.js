let btnsModalClose = document.querySelectorAll('.modal-close');

for (var i = 0; i < btnsModalClose.length; i++) {
    btnsModalClose[i].addEventListener('click', function() {
        let modals = document.querySelectorAll('.modal-active');
        modals.forEach(element => {
        element.classList.remove('modal-active');
        });
    });
  }