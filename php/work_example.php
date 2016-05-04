			<div class="row">
				<div class="workExampleWrapper">
					<?php echo '<a href="' . $example[2] . '" target="_blank" class="workExample hidden">';
						
						if ($example[5] === true){
							echo '
								<div class="controls">
									<span class="close"></span>
									<span class="minimize"></span>
									<span class="maximize"></span>
								</div>
							';
						}

						echo '<img  alt="' . $example[0] . ' screenshot" src="imgs/thumbs/' . $example[3] .'">'; 
					?>
					</a>	
				</div>

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