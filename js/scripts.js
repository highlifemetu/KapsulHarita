/* Template: Aria - Business HTML Landing Page Template
   Author: Inovatik
   Created: Jul 2019
   Description: Custom JS file
*/


(function($) {
    "use strict"; 
	
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});

	
	/* Navbar Scripts */
  // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
    if ($(".navbar").offset().top > 20) {
      $(".fixed-top").addClass("top-nav-collapse");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
    }
    });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 600, 'easeInOutExpo');
      event.preventDefault();
    });
  });

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });


    /* Rotating Text - Morphtext */
  $("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2000,
    complete: function () {
      // Called after the entrance animation is executed.
    }
    });
    
    

    /* Card Slider - Swiper */
  var cardSlider = new Swiper('.card-slider', {
    autoplay: {
            delay: 4000,
            disableOnInteraction: false
    },
        loop: true,
        navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 20,
        breakpoints: {
            // when window is <= 992px
            992: {
                slidesPerView: 2
            },
            // when window is <= 768px
            768: {
                slidesPerView: 1
            } 
        }
    });
    
    /* Lightbox - Magnific Popup */
  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
    });
    

    /* Filter - Isotope */
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    
    // filter items on button click
    $('.filters-button-group').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        }); 
    });
    
/* Counter - CountTo */
  var a = 0;
  $(window).scroll(function() {
    if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors 
      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
        countTo = $this.attr('data-count');
        $({
        countNum: $this.text()
        }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
          $this.text(Math.floor(this.countNum));
          },
          complete: function() {
          $this.text(this.countNum);
          //alert('finished');
          }
        });
      });
      a = 1;
      }
    }
    });



    
    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


  /* Removes Long Focus On Buttons */
  $(".button, a, button").mouseup(function() {
    $(this).blur();
  });



})(jQuery);

////////////////////****************** SCRIPT CODES FOR THE MODEL BOXES *******************//////////////////////////
//Note: Every number such as modalX, myModalX and [has to be in order] comes from the nuber of the city.


//AKDENIZ BOLGESI

//ADANA
// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal1.style.display = "none";
  }
}


//ANTALYA
var modal7 = document.getElementById("myModal7",);

// Get the button that opens the modal
var btn = document.getElementById("myBtn7");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal7.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal7.style.display = "none";
  }
}

//HATAY
var modal31 = document.getElementById("myModal31",);

// Get the button that opens the modal
var btn = document.getElementById("myBtn31");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal31.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal31.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal31.style.display = "none";
  }
}

//ISPARTA
var modal32 = document.getElementById("myModal32",);

// Get the button that opens the modal
var btn = document.getElementById("myBtn32");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal32.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal32.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal32.style.display = "none";
  }
}

//MERSİN
var modal33 = document.getElementById("myModal33",);

// Get the button that opens the modal
var btn = document.getElementById("myBtn33");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[4];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal33.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal33.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal33.style.display = "none";
  }
}

//EGE 

//AFYON
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[5];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal3.style.display = "none";
  }
}


//IZMIR
var modal35 = document.getElementById("myModal35");

// Get the button that opens the modal
var btn = document.getElementById("myBtn35");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[6];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal35.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal35.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal35.style.display = "none";
  }
}

//MARMARA

//CANAKKALE
var modal17 = document.getElementById("myModal17");

// Get the button that opens the modal
var btn = document.getElementById("myBtn17");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[7];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal17.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal17.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal17.style.display = "none";
  }
}


//ISTANBUL
var modal34 = document.getElementById("myModal34");

// Get the button that opens the modal
var btn = document.getElementById("myBtn34");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[8];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal34.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal34.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal34.style.display = "none";
  }
}

//TEKİRDAĞ
var modal59 = document.getElementById("myModal59");

// Get the button that opens the modal
var btn = document.getElementById("myBtn59");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[9];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal59.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal59.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal59.style.display = "none";
  }
}



//DOGU ANADOLU

//KARS
var modal36 = document.getElementById("myModal36");

// Get the button that opens the modal
var btn = document.getElementById("myBtn36");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[10];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal36.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal36.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal36.style.display = "none";
  }
}


//VAN
var modal65 = document.getElementById("myModal65");

// Get the button that opens the modal
var btn = document.getElementById("myBtn65");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[11];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal65.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal65.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal65.style.display = "none";
  }
}

//HAKKARİ
var modal30 = document.getElementById("myModal30");

// Get the button that opens the modal
var btn = document.getElementById("myBtn30");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[12];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal30.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal30.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal30.style.display = "none";
  }
}



//GUNEYDOGU ANADOLU

//SANLIURFA
var modal63 = document.getElementById("myModal63");

// Get the button that opens the modal
var btn = document.getElementById("myBtn63");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[13];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal63.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal63.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal63.style.display = "none";
  }
}


//IC ANADOLU BOLGESI

//ANKARA
var modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
var btn = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[14];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal6.style.display = "none";
  }
}


//KAYSERI
var modal38 = document.getElementById("myModal38");

// Get the button that opens the modal
var btn = document.getElementById("myBtn38");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[15];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal38.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal38.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal38.style.display = "none";
  }
}

//SIVAS
var modal58 = document.getElementById("myModal58");

// Get the button that opens the modal
var btn = document.getElementById("myBtn58");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[16];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal58.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal58.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal58.style.display = "none";
  }
}

//KARADENIZ BOLGESI

//SAMSUN
var modal55 = document.getElementById("myModal55");

// Get the button that opens the modal
var btn = document.getElementById("myBtn55");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[17];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal55.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal55.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal55.style.display = "none";
  }
}

//TRABZON
var modal61 = document.getElementById("myModal61");

// Get the button that opens the modal
var btn = document.getElementById("myBtn61");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[18];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal61.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal61.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal61.style.display = "none";
  }
}


//ZONGULDAK
var modal67 = document.getElementById("myModal67");

// Get the button that opens the modal
var btn = document.getElementById("myBtn67");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[19];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal67.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal67.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal67.style.display = "none";
  }
}


//GİRESUN
var modal28 = document.getElementById("myModal28");

// Get the button that opens the modal
var btn = document.getElementById("myBtn28");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[20];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal28.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal28.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal28.style.display = "none";
  }
}

//GUMUSHANE
var modal29 = document.getElementById("myModal29");

// Get the button that opens the modal
var btn = document.getElementById("myBtn29");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[21];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal29.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal29.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal29.style.display = "none";
  }
}










