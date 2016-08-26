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
					echo '<div class="thumbnails">';
						$count = 0;
						foreach($work as $example){
							include('php/work_thumbnail.php');
							$count++;

							if ($count == 12){
								echo '
								</div>
								<h1 id="extended">Additional Work</h1>
								<p>The following projects aren\'t included in my regular portfolio. Some are unfinished. Some are out of date. That said, I thought they might be useful to discuss.</p>
								<div class="thumbnails">';
							} 
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