<!DOCTYPE html>

<html>
	<head>
		<?php include('php/resources.php'); ?>

		<title>Mild West Designs</title>
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
					<a href="contact.php">Request a Quote</a>
				</div>
			</div>
			
			<div class="col-5 desktop">
			</div>
		</div>

		<div id="services" class="dark row">
			<div class="col-2 stretch-12">
				<img src="imgs/brand.png" class="row" alt="Multiple documents from a brand"/>
				
				<h3>Branding</h3>

				<P>
					Make a great first impression and attract new customers with my professional branding services.
				</p>
			</div>

			<div class="col-2 stretch-12">
				<img src="imgs/design.png" class="row" alt="A pencil"/>
				
				<h3>Design</h3>

				<P>
					My high quality designs will help your business stand out in the marketplace.		
				</p>
			</div>

			<div class="col-2 stretch-12">
				<img src="imgs/development.png" class="row" alt="A gear"/>
				
				<h3>Development</h3>
				
				<p>
					With years of experience, I'll use the latest web technologies to deliver you a high quality site. 
				</p>
			</div>
		</div>

		<div id="testimonials" class="row">
			<span class="testimonial_arrow left"><</span>
			<span class="testimonial_arrow right">></span>
			<div class="col-6 center stretch-12" id="quote">
				&ldquo;As a small business I was very lucky to have Paul work for me &#8230; I would recommend Paul to anyone!&rdquo;

			</div>
			<div class="col-6 center stretch-12">
				- Dann Rogers,
			</div>
			<div class="col-6 center stretch-12">
				Musician
			</div>
		</div>

		<?php
			include('php/contact_form.php');
			include('php/footer.php');
			include('php/scripts.php');
		?>
	</body>
</html>