					<form method="post" action="php/mailto.php" id="content" enctype="multipart/form-data" class="dark row">
						<h3 class="col-6 center">
							Let's work together!
						</h3>

						<div class="col-6 center">
							<label for="name">Name:</label>
							<input type="text" name="name" id="name" />
						</div>

						<div class="col-6 center">
							<label for="email">E-mail:</label>
							<input type="text" name="email" id="email" />
						</div>

						<div class="col-6 center">
							<label for="subject">Subject:</label>
							<input type="text" name="subject" id="subject"  />
						</div>

						<div class="col-6 center">
							<label for="message">Message:&nbsp;</label>
							<textarea name="message"></textarea>
						</div>

						<div class="col-6 center">
							<input type="submit" value="Send" id="send"/>
						</div>
					</form>