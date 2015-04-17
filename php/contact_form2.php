		<div class="contact dark">
			<a name="contact"></a>
				<div class="row">
					<div class="col-3">&nbsp;</div>
					<div class="col-8 center stretch-12">
						<h3>
							Let's work together!
						</h3>
					</div>
					<div class="col-3">&nbsp;</div>
				</div>

				<div class="contactHolder stretch-12">
					<img src="imgs/envelope.png" class="desktop"/>
					<form class="contactForm" method="post" action="mailto.php" id="content" enctype="multipart/form-data">
						<div class="row">
							<label class="col-3 stretch-12" for="name">Name:</label>
							<input type="text" name="name" id="name" class="col-8 stretch-12" value="John Doe"/>
						</div>
						<div class="row">
							<label class="col-3" for="email">E-mail:</label>
							<input type="text" name="email" id="email" class="col-8 stretch-12" value="johndoe@email.com"/>
						</div>
						<div class="row">
							<label class="col-3 stretch-12" for="subject">Subject:</label>
							<input type="text" name="subject" id="subject" class="col-8 stretch-12" value="Hey!"/>
						</div>
						<div class="row">
							<label id="textLabel" for="message" class="col-3 stretch-12">Message:&nbsp;</label>
							<textarea name="message" id="message" class="col-8 stretch-12">Dear Mild West Designs,</textarea>
						</div>
					<input type="submit" class="submit" value="Send" id="send"/>
					</form>
				</div>
		</div>