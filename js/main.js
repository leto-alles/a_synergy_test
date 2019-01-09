$(document).ready(function() {
  if ($(window).width() < 768) {
    $('.page-header__logo-block').click(function(){
      $('.page-header__info-block').toggleClass('visible');
      });
    }
});

/*--- toggle_registration_form ---*/

$(document).ready(function() {
	$('.toggle-block input').click(function(){ 
		$('.toggle-online').toggleClass('switch-active switch-nonactive-pic');
		$('.toggle-live').toggleClass('switch-nonactive switch-active-pic');
	});
});

/*--- youtube_link ---*/

$(document).ready(function() {
    $('.offer__video-link').fancybox({
         'padding'      : 0,
         'autoScale'    : false,
         'transitionIn' : 'none',
         'transitionOut'   : 'none',
         'width'     : 680,
         'height'    : 495,
         'openEffect'  : 'elastic'
      });

   return false;
});

/*--- maps_link ---*/

ymaps.ready(function  () {

var myMap;
   
   $('.page-header__map').fancybox({
      'padding'      : 0,
      'width'        : 680,
      'height'       : 495,
      afterShow : function() {
      
      myMap = new ymaps.Map('map__link', {
                    center: [55.783600, 37.719244],
                    zoom: 17,
               behaviors: ["scrollZoom","drag"]
                });  
            
   var myPlacemark = new ymaps.Placemark([55.783600, 37.719244], {
                    // Свойства
                    iconContent: 'Мфпу Синергия'                   
                }, {
                    // Опции
                    preset: 'twirl#redStretchyIcon',
               balloonMaxWidth: 250
                });

            // Метка на карту
            myMap.geoObjects.add(myPlacemark);        
         
   }, afterClose:function (){
       myMap.destroy();    
      myMap = null;
   }});
});

/*--- form_popap ---*/

$(document).ready(function() {
    $('.popap__link').fancybox({
         'padding'      : 0,
         'autoScale'    : false,
         'transitionIn' : 'none',
         'transitionOut'   : 'none',
         'openEffect'  : 'elastic'
      });

   return false;
});