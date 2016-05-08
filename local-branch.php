<!DOCTYPE html>

<html>
	<head>
		<?php include('php/resources.php'); ?>

		<title>Local Branch Process Work </title>
		<META NAME="Description" CONTENT="Got a project you need help with? Get in touch with Mild West Designs."/>
	</head>

	<body>
		<?php 
			include('php/header.php');  
		?>

		<div id="work">
			<div style="text-align:center;">
				<h2>Local Branch Process Work</h2>

				<br><br><br>

				<h3>Digital Logo Sketches</h3>
				<a href="imgs/process/local-branch/logo_sketches.png">
					<img src="imgs/process/local-branch/logo_sketches-small.png">
				</a>

				<br><br><br>

				<h3>Persona, Branding and Wireframe posters</h3>
				<a href="imgs/process/local-branch/Hebert_persona.pdf" target='_BLANK'>
					<img src="imgs/process/local-branch/Hebert_persona.png" style="width:300px;display:inline-block;">
				</a>			

				<a href="imgs/process/local-branch/Hebert_branding.pdf" target='_BLANK'>
					<img src="imgs/process/local-branch/Hebert_branding.png" style="width:300px;display:inline-block;">
				</a>

				<a href="imgs/process/local-branch/Hebert_wireframes.pdf" target='_BLANK'>
					<img src="imgs/process/local-branch/Hebert_wireframes.png" style="width:300px;display:inline-block;">
				</a>

				<br><br><br><br><br><br><br>
				<h3>The Website</h3>					
			</div>

			<?php
				include('php/work.php');

				$example = $work[0];

				include('php/work_example.php');
			?>	
		</div>

		<?php
			include('php/scripts.php'); 
		?>
	</body>
</html>