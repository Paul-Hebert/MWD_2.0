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

var duration = 800;

var svg_duration = 2000;

var stroke_width = '3pt';

var cph_changed = false;

var main_frequency = 4500;

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
	load_svgs();

	initialize_work_animations();

    setInterval( "switch_main()", main_frequency );

    initialize_contact_form();
});


/*/////////////////////////////////////////////////////////////////////////////
    Functions
//////////////////////////////////////////////////////////////////////////////*/

function load_svgs(){
	if (ie === false){
		$("#animation_wrapper").load("php/svgs2.php", function(){
			draw_svg( $('#websites path') );
		});
	} else{
		$("#animation_wrapper").load("php/pngs.php");			
	}
}

function initialize_work_animations(){
	console.log(1);
	$(window).scroll(function(){
		console.log(2);
		$('.workExample').each(function(){
			console.log(3);
			if( isScrolledIntoView( $(this) ) ){
				$(this).removeClass('hidden');
			} else{
				$(this).addClass('hidden');				
			}
		});
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

// http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
function isScrolledIntoView(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
