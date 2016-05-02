<form class="contact_form" method="post" action="php/mailto.php" id="content" enctype="multipart/form-data">
	<h1>
		Let's work together!
	</h1>
	<label for="name">Name:</label>
	<span class="input_wrapper"><input type="text" class="required" name="name"/></span>

	<label for="email">E-mail:</label>
	<span class="input_wrapper"><input type="text" class="required" name="email"/></span>

	<label for="subject">Subject:</label>
	<span class="input_wrapper"><input type="text" class="required" name="subject"/></span>

	<label id="textLabel" for="message">Message:&nbsp;</label>
	<span class="input_wrapper"><textarea name="message" class="required"></textarea></span>

	<input type="submit" class="button" value="Email Me" id="send"/>
</form>