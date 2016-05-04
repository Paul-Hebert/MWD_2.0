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
			<div id="animation_wrapper"></div>

			<h2>Hey There!</h2>

			<p>
				I'm Paul Hebert, a graphic designer and web developer whose passionate about working at the intersection of design and technology.
				I build <span id="main_changer">websites.</span>
			</p>

			<a href="contact.php" class="button">Get In Touch</a>
			<a href="Hebert_Resume.pdf" class="button" target="_BLANK">View My Resume</a>
			<a href="https://github.com/Paul-Hebert" class="button" target="_BLANK">View My Github</a>	
		</div>

		<div id="work">	
			<h1>Work</h1>

			<?php
				include('php/work.php');

				echo '<div id="thumbnails" class="desktop">';
					foreach($work as $example){
						include('php/work_thumbnail.php');
					}				
				echo '</div>';

				foreach($work as $example){
					include('php/work_example.php');
				}
			?>
		</div>

		<div>
			<?php include('php/contact_form.php'); ?>
		</div>

		<?php
			include('php/footer.php');
			include('php/scripts.php');
		?>
	</body>
</html>