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
				I'm Paul Hebert, a graphic designer and web developer who is passionate about working at the intersection of design and technology.
				I build <span id="main_changer">websites.</span>
			</p>
		</div>

		<div id="work">	
			<div class="row">
				<h1>Work</h1>

				<?php
					include('php/work.php');

					echo '<div id="thumbnails">';
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