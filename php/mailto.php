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
<script>
window.location = '../index.php';
</script>