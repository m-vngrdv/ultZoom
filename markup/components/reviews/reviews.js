let reviewsList = document.querySelector('.reviews__list'),
    btnAllReviews = document.querySelector('.reviews__list-btn');

if(btnAllReviews) {
    btnAllReviews.addEventListener("click", function(event) {
        
        gsap.utils.toArray(".reviews__item").forEach(function(elem, i) {
            if(i > 0) {
                let animateReviews = gsap.timeline();

                animateReviews.fromTo(elem, { opacity: 0, y: 100 }, { display: "flex", opacity: 1, y: 0, duration: 1, ease: "power1.in" }, (0.2 * i));
            }
        });

        btnAllReviews.style.display = 'none';
    });    
}
