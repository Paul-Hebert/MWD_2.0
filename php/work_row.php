			<div class="row">
				<div class="workExampleWrapper">
					<?php echo '<a href="' . $link . '" target="_blank" class="workExample hidden">';
						
						if ($digital === true){
							echo '
								<div class="controls">
									<span class="close"></span>
									<span class="minimize"></span>
									<span class="maximize"></span>
								</div>
							';
						}

						echo '<img  alt="' . $title . ' screenshot" src="imgs/thumbs/' . $img .'">'; 
					?>
					</a>	
				</div>

				<div class="details">
					<h2>
						<?php echo $title; ?>
					</h2>
					<p>
						<?php echo $description; ?>
					</p>
					<?php echo'<a href="' . $link . '" class="button">' . $button_text . '</a>'; ?>					
				</div>
			</div>	