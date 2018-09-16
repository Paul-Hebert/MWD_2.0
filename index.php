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
			<div id="animation_wrapper" class="desktop"></div>

			<h2>Hey There!</h2>

			<p>
				I'm Paul Hebert, a front end developer and user experience designer who is passionate about working at the intersection of design and technology.
				Right now I'm living in Portland and working for <a href="https://www.worktrucksolutions.com" target="_BLANK">Work Truck Solutions</a> as a front end web developer.
				I build <span id="main_changer">websites.</span>
			</p>
		</div>

		<div id="work">	
			<div class="row">
				<h1>Work</h1>

				<?php
					include('php/work.php');

					echo '<div class="thumbnails">';
						$count = 0;
						foreach($work as $example){
							include('php/work_thumbnail.php');
							$count++;
						}				
					echo '</div>';
				?>
			</div>
		</div>

		<div id="contact">
			<?php include('php/contact_form.php'); ?>
		</div>

		<?php
			include('php/scripts.php');
		?>
	</body>
</html>