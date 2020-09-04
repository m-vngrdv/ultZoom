if(document.querySelector('.contacts__map')) {
  let isShow = false;

  window.addEventListener('scroll', function(event) {
    if((window.scrollY + window.innerHeight) > (document.body.scrollHeight - 700) ) {
      if(!isShow) {
        ymaps.ready(init);
        function init() {
          let myMap = new ymaps.Map("contacts__map", {
              center: [55.79159504755306,37.559732296295145],
              zoom: 16
            });
        
          let placemark = new ymaps.Placemark([55.79159504755306,37.559732296295145], {
              hintContent: 'ул. Петровская, д. 23/10'
              }, {
              iconImageHref: './static/img/assets/contacts/location.svg',
              iconImageSize: [75, 76],
              iconImageOffset: [-37.5, -76]
              });
        
          myMap.geoObjects.add(placemark);
        }
        isShow = true;
      }
    }
  });
};