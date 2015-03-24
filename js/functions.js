testimonials = [
					['Paul went above and beyond in working hard to understand my web design needs . . . and he made the process easy and fun to be involved in.','- Anna Garzon,','Wildflour Bakery'],
					['Able to really embrace my ideas and make them a reality . . . I highly recommend his work . . . Paul is professional and his work is amazing.','- Sam Steyer,','The Pour House'],
					['Very original and creative. I love working with him as he always gives me many directions to choose from . . . the designs are interesting and fresh.','- Nicholas Huang,','Impurity Bike Co.'],
					['As a small business I was very lucky to have Paul work for me . . . I would recommend Paul to anyone!','- Dann Rogers,','Musician']
				];

main = [
			['Websites','#websites'],
			['Brands','#branding']/*,
			['Businesses','#websites'],
			['Relationships','#websites']*/
		];

testi_val = 0;

main_val = 0;

duration = 800;

svg_duration = 2000;

cph_changed = false;



$(function() {
	$('form div *').click( function(){
		if (! $(this).parent().hasClass('toggled')){
			$(this).parent().addClass('toggled');
			$(this).parent().children('label').css('left','-90px');
			$(this).parent().children('input, textarea').focus();	
		}
	})

	draw_svg( $('#websites path') );

    setInterval( "switch_main()", 4000 );
    setInterval( "switch_testimonials()", 4000 );
});



function switch_fields(){
	switch_main();
	switch_testimonials();
}

function switch_main(){
	shrink_svg( $(main[main_val][1] + ' path') );

	$('#main_changer').animate({'opacity':0}, duration, function(){
		$('#main_changer').text(main[main_val][0]).animate({'opacity':1},duration);
		draw_svg( $(main[main_val][1] + ' path') );
	});

	main_val++;

	if (main_val >= main.length){
		main_val = 0;
	}
}

function switch_testimonials(){
	$('#testimonials div').animate({'opacity':0}, duration, function(){
		$('#testimonials div:nth-of-type(1)').html('\u201c' + testimonials[testi_val][0] + '\u201d');
		$('#testimonials div:nth-of-type(2)').text(testimonials[testi_val][1]);
		$('#testimonials div:nth-of-type(3)').text(testimonials[testi_val][2]);
		$('#testimonials div').animate({'opacity':1},duration);
	});

	testi_val++;

	if (testi_val >= testimonials.length){
		testi_val = 0;
	}
}

function draw_svg(path_array){
	$('path').css('opacity','0');
	for(x=0; x < path_array.length; x++){
		path = path_array[x];
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.opacity = '1';
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		path.style.strokeWidth = '2pt';
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset ' + svg_duration + 'ms ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';
	}
}

function shrink_svg(path_array){
	for(x=0; x < path_array.length; x++){
		path = path_array[x];
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset ' + duration + 'ms ease-in-out';
		// Go!
		path.style.strokeDashoffset = length;
	}
	return;
}


function websiteChanged(target){
	if (cph_changed == false){
		var switchHeight = $('#' + target).height();
		$('#' + target).html('<h4 class="disclaimer">The Pour House recently switched to a new website. To view an archived copy of the site we designed for them, click here.</h4>').css('color','#000').css('height',switchHeight);
		cph_changed = true;
	} else{
		window.open("cph_newest/");
	}
}
