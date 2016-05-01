/*/////////////////////////////////////////////////////////////////////////////
    Vars and Arrays
//////////////////////////////////////////////////////////////////////////////*/

var main = [
			['Websites','#websites'],
			['Brands','#branding'],
			['Businesses','#businesses'],
			['Relationships','#relationships']
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

    setInterval( "switch_main()", main_frequency );
});


/*/////////////////////////////////////////////////////////////////////////////
    Functions
//////////////////////////////////////////////////////////////////////////////*/

function load_svgs(){
	if (screen.width > 700){
		if (ie === false){
			$("#animation_wrapper").load("php/svgs.php", function(){
				draw_svg( $('#websites path') );
			});
		} else{
			$("#animation_wrapper").load("php/pngs.php");			
		}
	}
}

function switch_fields(){
	switch_main();
	switch_testimonials();
}

function switch_main(){
	shrink_svg( $(main[main_val][1] + ' path') );

	$('#main_changer').animate({'opacity':0}, duration, function(){
		$('#main_changer').text(main[main_val][0]).animate({'opacity':1},duration);

		if ($(window).width() > 700){
			if (ie === false){
				draw_svg( $(main[main_val][1] + ' path') );
			} else{
				draw_png( $(main[main_val][1]) );
			}
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
		path.style.strokeDasharray = length + ' ' + length;
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
