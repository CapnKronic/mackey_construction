<?php


$receiving_email_address = 'test@jmackeyconstruction.com';
// $receiving_email_address = 'info@jmackeyconstruction.com';
$mail_subject = 'Contact Request: ';

$hostname = 'localhost';
$username = 'kronicjo';
$password = '$M0kin5258';
$db = "jmc";

$dbconnect = mysqli_connect($hostname, $username, $password, $db);

if ($dbconnect->connect_error) {
  die("Database connection failed: " . $dbconnect->connect_error);
}

if (isset($_POST['submit'])) {
  // $user_name=$_POST['username'];
// $user_password=$_POST['psw'];




  $to = $receiving_email_address;
  $from_name = $_POST['name'];
  $from_email = $_POST['email'];
  $address = $_POST['address'];
  $subject = $mail_subject . $from_name;
  $phone = $_POST['phone'];
  $message = $from_name . "\r\n" . $phone . "\r\n" . $from_email . "\r\n" . $address . "\r\n" . $_POST['message'];

  $query = "INSERT INTO web_contacts (contact, phone, email, addr, notes)
VALUES ('$from_name', '$phone', '$from_email', '$address', '$message')";

  if ($dbconnect->query($query) === TRUE) {
    echo "New record created successfully";
  }

  $conn->close();




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
// mail($to, $subject, $message, "From:" . $from_email);
// echo "Request Sent";





}
?>