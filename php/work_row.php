			<div class="row">
				<?php echo '<a href="' . $link . '" target="_blank" class="col-7 workExample stretch-12">';
					
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

				<div class="col-1 big">&nbsp;</div>	

				<div class="col-4 stretch-12">
					<h2>
						<?php echo $title; ?>
					</h2>
					<p>
						<?php echo $description; ?>
					</p>
					<?php echo'<a href="' . $link . '" class="button">' . $button_text . '</a>'; ?>					
				</div>
			</div>	