<?php
   header('Content-Type: application/json');
  $name = $_POST['name'];
  $tel = $_POST['tel'];
  $visitor_email = $_POST['email'];
  $message_form = $_POST['message'];

  $to = "vilgeforc5@gmail.com";
  $subject = "SONOMEBLI ";
  $subject .= date();

  $message = "Имя: ". $name ."\n";
  $message .= "Номер: ".$tel."\n";
  $message .= "Емейл: ".$visitor_email."\n";
  $message .= "Message: ".$message_form."\n";


  mail($to,$subject,$message);
?>