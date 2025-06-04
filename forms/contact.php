<?php

$receiving_email_address = 'info@jmackeyconstruction.com';
$mail_subject = 'Contact Request ';



$to = $receiving_email_address;
$from_name = $_POST['name'];
$from_email = $_POST['email'];
$subject = $mail_subject . $from_name;
$phone = $_POST['phone'];
$message = $from_name . $phone . "\r\n" . $_POST['message'];
// Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
/*
$contact->smtp = array(
  'host' => 'example.com',
  'username' => 'example',
  'password' => 'pass',
  'port' => '587'
);
*/

// echo $to, "\n", $from_name, "\n", $from_email, "\n", $subject, "\n", $message;
mail($to, $subject, $message, "From:" . $from_email);
echo "Request Sent";
?>