<?php

$receiving_email_address = 'test@jmackeyconstruction.com';
$mail_subject = 'Contact Request: ';



$to = $receiving_email_address;
$from_name = $_POST['name'];
$from_email = $_POST['email'];
$address = $_POST['address'];
$subject = $mail_subject . $from_name;
$phone = $_POST['phone'];
$message = $_POST['message'];
$str = $from_name . "\r\n" . $phone . "\r\n" . $from_email . "\r\n" . $address . "\r\n" . $message;
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


// $hostname= '173.199.114.177';
$hostname= '';
$username = 'webreq';
$password = 'SM0kin52581';
$db = 'web_req';

$dbconnect=mysqli_connect($hostname,$username,$password,$db);

if ($dbconnect->connect_error) {
  die("Database connection failed: " . $dbconnect->connect_error);
}

// if(isset($_POST['submit'])) {
  

$query = "INSERT INTO webrequests (contact, phone, email, addr, notes)
VALUES ('$from_name', '$phone', '$from_email', '$address', '$message')";


if ($dbconnect->query($query) === TRUE) {
// echo "New record created successfully";
}

$dbconnect->close();

mail($to, $subject, $str, "From:" . $from_email);
echo "Request Sent";

?>