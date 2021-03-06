/*/////////////////////////////////////////////////////////////////////////////
    Vars and Arrays
//////////////////////////////////////////////////////////////////////////////*/

var main = [
			['websites.','#websites'],
			['brands.','#branding'],
			['businesses.','#businesses'],
			['relationships.','#relationships']
		];

var main_val = 0;

var duration = 600;

var svg_duration = 2000;

var stroke_width = '3pt';

var cph_changed = false;

var main_frequency = 3500;

var toggleVal = false;

if(GetIEVersion() > 0){
	ie = true;
} else{
	ie = false;
}

/*/////////////////////////////////////////////////////////////////////////////
    Set-Up on load
//////////////////////////////////////////////////////////////////////////////*/

$(function() {
	if(screen.width < 500 || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
		mobile = true;
	} else{
		mobile = false;
	}

	if (mobile === false){
		load_svgs();

		initialize_work_animations();
	} 

	setInterval( "switch_main()", main_frequency );

    initialize_contact_form();

    initialize_mobile_menu();

    initialize_process_work();
});


/*/////////////////////////////////////////////////////////////////////////////
    Functions
//////////////////////////////////////////////////////////////////////////////*/

function initialize_mobile_menu(){
	$('#menu-toggle').click(function(){
		if ( $('#menu-toggle svg').attr('class') === 'open' ){
			$('#menu-toggle svg').attr('class','');
			$('#mobile_modal').fadeOut();
		} else{
			$('#menu-toggle svg').attr('class','open');
			$('#mobile_modal').fadeIn();			
		}

		var first_y = $('.first-line').attr('y2');
		var last_y = $('.last-line').attr('y2');

		animate(
	        $('.first-line'), // target jQuery element
	        { y2: last_y}, // target attributes
	        300 // optional duration in ms, defaults to 400
	    );
		animate(
	        $('.last-line'), // target jQuery element
	        { y2: first_y}, // target attributes
	        300 // optional duration in ms, defaults to 400
	    );

		$('header nav').toggleClass('visible-y');
	});
}

function load_svgs(){
	if (ie === false){
		$("#animation_wrapper").load("php/svgs.php", function(){
			draw_svg( $('#websites path') );
		});
	} else{
		$("#animation_wrapper").load("php/pngs.php");			
	}
}

function initialize_work_animations(){
	$('.workExample').removeClass('hidden');
}

function initialize_process_work(){
	$('#process img').click(function(){
		var src = $(this).attr('src').replace('thumbs','examples');

		$('.workExample img').attr('src',src);
	});
}

function switch_fields(){
	switch_main();
}

function switch_main(){
	shrink_svg( $(main[main_val][1] + ' path') );

	$('#main_changer').animate({'opacity':0}, duration, function(){
		$('#main_changer').text(main[main_val][0]).animate({'opacity':1},duration);

		if (ie === false){
			draw_svg( $(main[main_val][1] + ' path') );
		} else{
			draw_png( $(main[main_val][1]) );
		}
	});

	main_val++;

	if (main_val >= main.length){
		main_val = 0;
	}
}

function draw_svg(path_array){
	$('path').css('opacity','0.0');
	for(x=0; x < path_array.length; x++){
		path = path_array[x];
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.opacity = '1';
		path.style.transition = path.style.WebkitTransition = path.style.msTransition = path.style.OTransition = 
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = parseFloat(length + 60) + ' ' + parseFloat(length + 60);
		path.style.strokeDashoffset = length;
		path.style.strokeWidth = stroke_width;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition = path.style.msTransition = path.style.OTransition = 
			'stroke-dashoffset ' + duration + 'ms ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';
	}
}

function draw_png(id){
	$('#main img').each( function(){
		if( $(this).css('display') === 'block' || 'inline'){
			$(this).fadeOut();
		}
	});
	$(id).fadeIn();
}

function shrink_svg(path_array){
	for(x=0; x < path_array.length; x++){
		path = path_array[x];
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition = path.style.msTransition = path.style.OTransition = 
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition = path.style.msTransition = path.style.OTransition = 
			'stroke-dashoffset ' + duration + 'ms ease-in-out';
		// Go!
		path.style.strokeDashoffset = length;
	}
	return;
}

function initialize_contact_form(){
	$( ".contact_form" ).on( "submit", function( event ) {
	    event.preventDefault();

	    if ( validate() ){
		    var form_data = $('form').serialize();

		    $.ajax({
			    type : 'POST',
			    url : 'php/mailto.php',
			    data : form_data,
			    success: function(data){
			    	$('.contact_form *').animate({'opacity':0},300);
			    	$('.contact_form').append(data);
			    	$('#success').fadeIn(300);
			    }
			});
		}
	});
}

function validate(){
	$('.error').removeClass('error');
	$('#error_text').remove();

	$('.required').each(function(){
		if ( $(this).val() === '' || $(this).val() === null || $(this).val() === undefined ){
			$(this).addClass('error');
			$(this).change(function(){ $(this).removeClass('error') });
		}
	});

	if ( $('.error').length > 0 ){
		$('<div id="error_text">Please fill out all required fields above. Required fields have an orange outline.</div>').insertBefore('input[type=submit]');
		$('#error_text').slideDown(350);

		return false;
	} else{
		return true;
	}
}

function toggle(){
	if (toggleVal == false){
		$('nav').css('max-height','333px');
		$('.ham:first-of-type, .ham:last-of-type').css('fill','#0C3D56');
		toggleVal = true;
	} else{
		$('nav').css('max-height','64px');
		$('.ham:first-of-type, .ham:last-of-type').css('fill','#fff');
		toggleVal = false;
	}
}

/*****************************************************************************************************/
// Borrowed functions
/*****************************************************************************************************/

function GetIEVersion() {
	  var sAgent = window.navigator.userAgent;
	  var Idx = sAgent.indexOf("MSIE");
	  if (Idx > 0)
	    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
	  else if (!!navigator.userAgent.match(/Trident\/7\./))
	    return 11;
	  else
	    return 0;
}

// Borrowed animate function works on SVG hamburger icon.
function animate($el, attrs, speed) {
    speed = speed || 400;
    var start = {},
        timeout = 20,
        steps = Math.floor(speed/timeout),
        cycles = steps;
    
    $.each(attrs, function(k,v) {
        start[k] = $el.attr(k);
    });
    
    (function loop() {
        $.each(attrs, function(k,v) {
            var pst = (v - start[k])/steps;
            $el.attr(k, function(i, old) {
                return +old + pst;
            });
        });
      if ( --cycles )
          setTimeout(loop, timeout);
      else
          $el.attr(attrs);
    })();
}
