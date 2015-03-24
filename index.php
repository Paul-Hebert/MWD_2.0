<!DOCTYPE html>

<html>
	<head>
    	<meta charset="utf-8"> 

		<title>Mild West Designs</title>

		<?php include('php/resources.php'); ?>
	</head>

	<body>
		<?php include('php/header.php') ?>

		<div id="main" class="row">

			<?php include('php/svgs.php'); ?>

			<div class="col-7">
					<h2 class="center">
						We Build&nbsp; 
					</h2>
					<div id="main_changer" class="center">
						Websites
					</div>
				<div class="center">
					<a href="contact.php">Request a Quote</a>
				</div>
			</div>
		</div>

		<div id="services" class="dark row">
			<div class="col-2">
				<img src="imgs/brand.png" class="row"/>
				
				<h3>Branding</h3>
				
				<p>
					This custom-built e-commerce site was developed to allow my client to sell photography online.
				</p>
			</div>

			<div class="col-2">
				<img src="imgs/design.png" class="row"/>
				
				<h3>Design</h3>
				
				<p>
					This custom-built e-commerce site was developed to allow my client to sell photography online.
				</p>
			</div>

			<div class="col-2">
				<img src="imgs/development.png" class="row"/>
				
				<h3>Development</h3>
				
				<p>
					This custom-built e-commerce site was developed to allow my client to sell photography online.
				</p>
			</div>
		</div>

		<div id="testimonials" class="row">
			<div class="col-6 center">
				&ldquo;As a small business I was very lucky to have Paul work for me . . . I would recommend Paul to anyone!&rdquo;
			</div>
			<div class="col-6 center">
				- Dann Rogers,
			</div>
			<div class="col-6 center">
				Musician
			</div>
		</div>

		<?php
			include('php/contact_form.php')
		?>
	</body>
</html>