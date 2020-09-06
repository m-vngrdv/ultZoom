let reviews = [
    {
        'avatar': 'static/img/assets/reviews/reviews__avatar.jpg',
        'author': 'Елена Иванова, стоматолог',
        'date': '24.02.2020',
        'text': 'Мы на протяжении 5 лет используем оборудование Zoom для отбеливания зубов. Но с каждым годом это становилось все дороже и дороже, так как расходники Zoom все время дорожали.<br><br>Мы купили чип UltZooM и теперь покупаем только гели для отбеливания зубов, а за чип Philips мы не платим. Хочется поблагодарить компанию UltZooM за такое новшество, за такой адаптер, за быструю доставку.'
    },
    {
        'avatar': 'static/img/assets/reviews/reviews__avatar.jpg',
        'author': 'Елена Иванова, стоматолог',
        'date': '23.02.2020',
        'text': 'Мы на протяжении 5 лет используем оборудование Zoom для отбеливания зубов. Но с каждым годом это становилось все дороже и дороже, так как расходники Zoom все время дорожали.<br><br>Мы купили чип UltZooM и теперь покупаем только гели для отбеливания зубов, а за чип Philips мы не платим. Хочется поблагодарить компанию UltZooM за такое новшество, за такой адаптер, за быструю доставку.'
    },
    {
        'avatar': 'static/img/assets/reviews/reviews__avatar.jpg',
        'author': 'Елена Иванова, стоматолог',
        'date': '22.02.2020',
        'text': 'Мы на протяжении 5 лет используем оборудование Zoom для отбеливания зубов. Но с каждым годом это становилось все дороже и дороже, так как расходники Zoom все время дорожали.<br><br>Мы купили чип UltZooM и теперь покупаем только гели для отбеливания зубов, а за чип Philips мы не платим. Хочется поблагодарить компанию UltZooM за такое новшество, за такой адаптер, за быструю доставку.'
    },
    {
        'avatar': 'static/img/assets/reviews/reviews__avatar.jpg',
        'author': 'Елена Иванова, стоматолог',
        'date': '21.02.2020',
        'text': 'Мы на протяжении 5 лет используем оборудование Zoom для отбеливания зубов. Но с каждым годом это становилось все дороже и дороже, так как расходники Zoom все время дорожали.<br><br>Мы купили чип UltZooM и теперь покупаем только гели для отбеливания зубов, а за чип Philips мы не платим. Хочется поблагодарить компанию UltZooM за такое новшество, за такой адаптер, за быструю доставку.'
    }
];

let reviewsList = document.querySelector('.reviews__list'),
    btnAllReviews = document.querySelector('.reviews__list-btn');
if(btnAllReviews) {
    btnAllReviews.addEventListener("click", function(event) {
        reviews.forEach(element => {
            let item = `<li class="reviews__item">
                            <img src="${element.avatar}" alt="" class="reviews__item-avatar">
                            <div class="reviews__item-wrap">
                                <div class="reviews__item-header">
                                    <p class="reviews__name">${element.author}</p>
                                    <p class="reviews__date">${element.date}</p>
                                </div>
                                <p class="reviews__text">${element.text}</p>
                            </div>
                        </li>`;
            reviewsList.innerHTML += item;
        });
        btnAllReviews.style.display = 'none';
    });    
}
