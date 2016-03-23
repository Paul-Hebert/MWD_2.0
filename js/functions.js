/*/////////////////////////////////////////////////////////////////////////////
    Vars and Arrays
//////////////////////////////////////////////////////////////////////////////*/

var testimonials = [
					['Paul went above and beyond in working hard to understand my web design needs &#8230; and he made the process easy and fun to be involved in.','- Anna Garzon,','Wildflour Bakery'],
					['Able to really embrace my ideas and make them a reality &#8230; I highly recommend his work &#8230; Paul is professional and his work is amazing.','- Sam Steyer,','The Pour House'],
					['Very original and creative. I love working with him as he always gives me many directions to choose from &#8230; the designs are interesting and fresh.','- Nicholas Huang,','Impurity Bike Co.'],
					['As a small business I was very lucky to have Paul work for me &#8230; I would recommend Paul to anyone!','- Dann Rogers,','Musician']/*,
					['A really strong contributor &#8230; [he is] consistently producing great work.','- Debra Johnson,','Tehama Group Communications'],
					['Very good and driven &#8230; [he came] up with an excellent website &#8230; and designed a logo I loved.','- Bob Tolar,','Pixel Perfect LED']*/
				];

var main = [
			['Websites','#websites'],
			['Brands','#branding'],
			['Businesses','#businesses'],
			['Relationships','#relationships']
		];

var testi_val = 0;

var main_val = 0;

var duration = 800;

var svg_duration = 2000;

var stroke_width = '3pt';

var cph_changed = false;

var main_frequency = 4500;

var testi_frequency = 4500;

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

	set_click_events();

    setInterval( "switch_main()", main_frequency );
    testimonial_timer = setInterval( "switch_testimonials()", testi_frequency );
});


/*/////////////////////////////////////////////////////////////////////////////
    Functions
//////////////////////////////////////////////////////////////////////////////*/

function set_click_events(){
	$('#arrow').click( function(){
		$('html, body').animate({
		    scrollTop: $("body").offset().top
		}, 300);
	});

	$('.left').click( function(){
		manually_switch_testimonials(-2);
	});

	$('.right').click( function(){
		manually_switch_testimonials(0);
	});
}

function load_svgs(){
	if (screen.width > 700){
		if (ie === false){
			$("#main .col-5").load("php/svgs.php", function(){
				draw_svg( $('#websites path') );
			});
		} else{
			$("#main .col-5").load("php/pngs.php");			
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

function switch_testimonials(){
	$('#testimonials div').fadeOut(duration, function(){
		$('#testimonials div:nth-of-type(1)').html('\u201c' + testimonials[testi_val][0] + '\u201d');
		$('#testimonials div:nth-of-type(2)').text(testimonials[testi_val][1]);
		$('#testimonials div:nth-of-type(3)').text(testimonials[testi_val][2]);
		$('#testimonials div').fadeIn(duration);
	});

	testi_val++;

	if (testi_val >= testimonials.length){
		testi_val = 0;
	}
}

function manually_switch_testimonials(num){
	clearInterval(testimonial_timer);

	testi_val += num;
	switch_testimonials();

	if (testi_val >= testimonials.length){
		testi_val = 0;
	} else if( testi_val < 0){
		testi_val = testimonials.length - 1;
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


function websiteChanged(target){
	if (cph_changed == false){
		var switchHeight = $('#' + target).height();
		$('#' + target).html('<h4 class="disclaimer">The Pour House recently switched to a new website. To view an archived copy of the site we designed for them, click here.</h4>').css({'color':'#000','background':'#fff'}).css('height',switchHeight);
		cph_changed = true;
	} else{
		window.open("cph_newest/");
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
