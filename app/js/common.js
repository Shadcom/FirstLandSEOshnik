$(function() {
	
  var Menu = {
  
  el: {
    ham: $('.menu'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom'),
	menuUL: $('.top-mnu')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
	Menu.el.menuUL.slideToggle();
  }
};

Menu.init();

 // плавный скрол
$("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
// плавный скрол    

$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
				if (dir === "down") {
					ths.addClass(inEffect).css("opacity", "1");
				};
			}, {
				offset: "90%"
			});

		});
	};


//$(".section4-h2").addClass('animated fadeInRight');


$(".section1-h1").animated("fadeInDownBig");
$(".section1-p").animated("fadeInRight");
$(".section1-quote").animated("fadeInLeft");

$(".ya-pic-sett").animated("flipInX");
$(".section2-flex-row").animated("fadeInDownBig");



$(".section3-title").animated("bounceInDown");


$(".email-left").animated("bounceInLeft");
$(".email-right").animated("bounceInRight");

  
$(".sbl1").animated("flipInY");
$(".sbl2").animated("flipInY");
$(".sbl3").animated("flipInY");


//E-mail Ajax Send
	$("forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
//*********** */

$('.open-popup-link').magnificPopup({
  type:'inline',
});



});
