<?php 
$name = $_POST['Name'];
$email = $_POST['Email'];
$phone = $_POST['Phone'];
$company = $_POST['Company'];

$to = "info@interactiveworkers.com";

$subject = "New message from possible client ($name)";

$body = "Information about new client: \n$name\n$email\n$phone\n$company";

mail($to, $subject, $body);