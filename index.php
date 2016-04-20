<!DOCTYPE html>

<html>
	<head>
		<?php include('php/resources.php'); ?>

		<title>Paul Hebert Designs</title>
		<META NAME="Description" CONTENT="Mild West Designs is a small graphic design and web development firm based out of Chico, CA."/>
	</head>

	<body>
		<?php include('php/header.php') ?>

		<div id="main" class="row">
			<div class="col-7 stretch-12">
					<p class="center">
						I Build 
					</p>
					<div id="main_changer" class="center">
						Websites
					</div>
				<div class="center">
					<a href="contact.php" class="button">Get In Touch</a>
				</div>
			</div>
			
			<div class="col-5 desktop">
			</div>
		</div>

		<div id="work">	
			<h1>Work</h1>

			<?php
				$title = 'Pixel Perfect LED';
				$description = 'Pixel Perfect LED specializes in renting out the latest LED technology. I developed a brand and visual identity for the company as well as a custom Wordpress theme that allows them to edit their site themselves.';
				$link = 'http://www.pixelperfectled.com';
				$img = 'pixel.png';
				$button_text = 'View the Site';
				$digital = true;
				include('php/work_row.php');

				$title = 'Board in Hand';
				$description = 'An e-commerce site selling high quality, hand decorated skateboard decks. Board in Hand sells decks as art pieces as well as complete decks that are ready to ride!';
				$link = 'http://www.boardinhand.com';
				$img = 'board_in_hand.png';
				$button_text = 'View Boards';
				$digital = true;
				include('php/work_row.php');

				$title = 'Picture This';
				$description = 'This custom-built e-commerce site was developed to allow the client to sell photography online. The site has a simple interface for uploading new photos, changing prices, and accurately calculating shipping rates.';
				$link = 'http://www.picturethisphotos.us';
				$img = 'picturethis.png';
				$button_text = 'View Photos';
				$digital = true;
				include('php/work_row.php');

				$title = 'Colors of the Web';
				$description = 'A data visualization I created to showcase the colors used by the 10 most popular sites on the web. (As of October 2014)';
				$link = 'web_colors/';
				$img = 'web_colors.png';
				$button_text = 'View the Colors';
				$digital = true;
				include('php/work_row.php');

				$title = 'Personal Activity Tracker';
				$description = '24 people recorded their time spent doing 12 activities over 24 hours. This data visualization allows you to explore the data in a fun, intuitive manner.';
				$link = 'personal_activity_tracker/';
				$img = 'p_a_t.png';
				$button_text = 'View the Results';
				$digital = true;
				include('php/work_row.php');

				$title = 'Real Time Code Graphing';
				$description = 'This information visualization helps people to understand how coding works. It writes out the code to draw a graph, using statistics on the code as data.';
				$link = 'real_time_code_grapher/';
				$img = 'code_graph.png';
				$button_text = 'Watch the Visualization';
				$digital = true;
				include('php/work_row.php');

				$title = 'Typographic Timeline';
				$description = 'An interactive timeline showing advances in typographic technology.';
				$link = 'typographic_timeline/';
				$img = 'timeline.png';
				$button_text = 'Learn More';
				$digital = true;
				include('php/work_row.php');

				$title = 'Pluto\'s Revenge';
				$description = 'In this platformer game you take on the role of an astronaut from Pluto whose ship crashes on an alien planet. Explore the world, battle enemies, and gather parts to repair your ship. This game is still a work in progress. Check back for more levels!';
				$link = 'game_redesign/';
				$img = 'game.png';
				$button_text = 'Play the Game';
				$digital = true;
				include('php/work_row.php');

				$title = 'Gridley Grid Generator';
				$description = 'A tool I built to help web designers generate custom CSS grid systems.';
				$link = 'gridley/';
				$img = 'gridley.png';
				$button_text = 'Build Your Grid';
				$digital = true;
				include('php/work_row.php');

				
				$title = 'Local Branch';
				$description = 'Local Branch is a web app that helps Californian home-owners find local plants for their gardens, so that they can save water and money while having a beautiful yard.';
				$link = 'local-branch/';
				$img = 'local-branch.png';
				$button_text = 'Find Plants';
				$digital = true;
				include('php/work_row.php');

				$title = 'Blurbb Email Builder';
				$description = 'Coding HTML emails that look good in all the major email clients, browsers and devices is hard and time consuming. Blurbb is a drag-and-drop email builder that makes it easy to build emails that look beautiful on any device without ever having to touch code. Start with one of our many themes and then customize it to your heart\'s content. Blurbb is perfect for newsletters and invitations as well as automated and transactional emails.';
				$link = 'blurbb/';
				$img = 'blurbb.png';
				$button_text = 'Build Your Email';
				$digital = true;
				include('php/work_row.php');
			?>
		</div>

		<div id="call_to_action">
			<?php include('php/contact_form.php'); ?>
		</div>

		<?php
			include('php/footer.php');
			include('php/scripts.php');
		?>
	</body>
</html>