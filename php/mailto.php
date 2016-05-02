<?php
$to = "paul.hebert@paulhebertdesigns.com";
$from = $_POST['email'];
$subject = $_POST['subject'] . ' -- ' . $_POST['name'];
$message = $_POST['message'];

$headers = 'From: '. $from . "\r\n" .
    'Reply-To: ' . $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>
<h1>Thanks for reaching out!</h2>
<p>I'll get back to you quickly. In the meantime, is there anything else I can help you with?</p>
<a class="button" href="#">Do Something</a>
<a class="button" href="#">Do Something</a>
<a class="button" href="#">Do Something</a>
<a class="button" href="#">Do Something</a>