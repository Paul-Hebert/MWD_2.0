			<?php echo '<div class="row" id="' . str_replace(' ', '_', $example[0]) . '">'; ?>
				<div class="workExampleWrapper">
					<?php 
						if($example[2] != '#'){
							echo '<a href="' . $example[2] . '" target="_blank" class="workExample hidden">';
						} else{
							echo '<div class="workExample hidden">';							
						}
						if ($example[5] === true){
							echo '
								<div class="controls">
									<span class="close"></span>
									<span class="minimize"></span>
									<span class="maximize"></span>
								</div>
							';
						}

						echo '<img  alt="' . $example[0] . ' screenshot" src="imgs/examples/' . $example[3] .'.png">'; 
						
						if($example[2] != '#'){
							echo '</a>';
						} else{
							echo '</div>';
						}
					?>
				</div>

				<?php
					if ($example[6] !== false){
						echo '<div id="process">';
							foreach($example[6] as $process_img){
								echo '<img  src="imgs/thumbs/' . $process_img . '.png">';
							}
						echo '</div>';
					}
				?>

				<div class="details">
					<h2>
						<?php echo $example[0]; ?>
					</h2>
					<p>
						<?php echo $example[1]; ?>
					</p>
					<?php 
						foreach ($example[4] as $button) {
							echo'<a href="' . $button[0] . '" class="button" ' . $button[1] . '>' . $button[2] . '</a>'; 
						}
					?>					
				</div>
			</div>	