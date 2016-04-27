		<div class="contact dark">
			<div class="col-8 center stretch-12">
				<h1>
					Let's work together!
				</h1>
			</div>

			<div class="contactHolder stretch-12">
				<form class="contactForm" method="post" action="php/mailto.php" id="content" enctype="multipart/form-data">
					<div class="row">
						<label class="col-3 stretch-12" for="name">Name:</label>
						<input type="text" name="name" id="name" class="col-8 stretch-12" placeholder="John Doe"/>
					</div>
					<div class="row">
						<label class="col-3" for="email">E-mail:</label>
						<input type="text" name="email" id="email" class="col-8 stretch-12" placeholder="johndoe@email.com"/>
					</div>
					<div class="row">
						<label class="col-3 stretch-12" for="subject">Subject:</label>
						<input type="text" name="subject" id="subject" class="col-8 stretch-12" placeholder="Hey!"/>
					</div>
					<div class="row">
						<label id="textLabel" for="message" class="col-3 stretch-12">Message:&nbsp;</label>
						<textarea name="message" id="message" class="col-8 stretch-12" placeholder="Hey Paul,"></textarea>
					</div>
				<input type="submit" class="button row" value="Send" id="send"/>
				</form>
			</div>
		</div>