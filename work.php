<!DOCTYPE html>

<html>
	<head>
		<?php 
			include('php/resources.php'); 

			include('php/work.php');

			if (! isset( $_GET['id'] )){
				echo '<title>Work | Paul Hebert Designs</title>';
			} else{
				echo '<title>' . $work[$_GET['id']][0] . '</title>';
			}
		?>
		<META NAME="Description" CONTENT="Mild West Designs is a small graphic design and web development firm based out of Chico, CA."/>
	</head>

	<body>
		<?php include('php/header.php') ?>

		<div id="work">	
			<?php

				if (! isset( $_GET['id'] )){
					echo '<div class="row">';
					echo '<div id="thumbnails">';
						$count = 0;
						foreach($work as $example){
							include('php/work_thumbnail.php');
							$count++;
						}				
					echo '</div></div>';
				} else{
					$example = $work[ $_GET['id'] ];
					include('php/work_example.php');				
				}
			?>
		</div>

		<?php
			include('php/scripts.php');
		?>
	</body>
</html>