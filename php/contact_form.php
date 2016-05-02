<form class="contactForm" method="post" action="php/mailto.php" id="content" enctype="multipart/form-data">
	<h1>
		Let's work together!
	</h1>
	<label for="name">Name:</label>
	<span class="input_wrapper"><input type="text" name="name" id="name" placeholder="John Doe"/></span>

	<label for="email">E-mail:</label>
	<span class="input_wrapper"><input type="text" name="email" id="email" placeholder="johndoe@email.com"/></span>

	<label for="subject">Subject:</label>
	<span class="input_wrapper"><input type="text" name="subject" id="subject" placeholder="Hey!"/></span>

	<label id="textLabel" for="message">Message:&nbsp;</label>
	<span class="input_wrapper"><textarea name="message" id="message" placeholder="Hey Paul,"></textarea></span>

	<input type="submit" class="button" value="Send" id="send"/>
</form>