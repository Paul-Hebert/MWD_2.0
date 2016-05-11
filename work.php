<!DOCTYPE html>

<html>
	<head>
		<?php include('php/resources.php'); ?>

		<title>Paul Hebert Designs</title>
		<META NAME="Description" CONTENT="Mild West Designs is a small graphic design and web development firm based out of Chico, CA."/>
	</head>

	<body>
		<?php include('php/header.php') ?>

		<div id="work">	
			<?php
				include('php/work.php');

				if (! isset( $_GET['id'] )){
					$example = $work[0];
				} else{
					$example = $work[ $_GET['id'] ];
				}

				include('php/work_example.php');
			?>
		</div>

		<?php
			include('php/scripts.php');
		?>
	</body>
</html>