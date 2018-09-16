			<?php 
				echo '<a class="thumbnail" href="work.php?id=' . $count . '" data-target="' . str_replace(' ', '_', $example[0]) . '">
				<img  alt="' . $example[0] . ' screenshot" src="imgs/thumbs/' . $example[3] .'.png">';
			?>

				<div class="details">
					<h3>
						<?php echo $example[0]; ?>
					</h3>			
				</div>
			</a>	