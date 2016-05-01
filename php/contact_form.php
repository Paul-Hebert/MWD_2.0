<form class="contactForm" method="post" action="php/mailto.php" id="content" enctype="multipart/form-data">
	<h1>
		Let's work together!
	</h1>
	<label for="name">Name:</label>
	<input type="text" name="name" id="name" placeholder="John Doe"/>

	<label for="email">E-mail:</label>
	<input type="text" name="email" id="email" placeholder="johndoe@email.com"/>

	<label for="subject">Subject:</label>
	<input type="text" name="subject" id="subject" placeholder="Hey!"/>

	<label id="textLabel" for="message">Message:&nbsp;</label>
	<textarea name="message" id="message" placeholder="Hey Paul,"></textarea>

	<input type="submit" class="button" value="Send" id="send"/>
</form>