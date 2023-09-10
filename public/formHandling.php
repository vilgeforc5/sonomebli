<?php
   header('Content-Type: application/json');
  $name = $_POST['name'];
  $tel = $_POST['tel'];
  $visitor_email = $_POST['email'];
  $message_form = $_POST['message'];

  $subject = "SONOMEBLI ";
  $subject .= date('Y-m-d H:i:s');

  $message = "Имя: ". $name ."\n";
  $message .= "Номер: ".$tel."\n";
  $message .= "Емейл: ".$visitor_email."\n";
  $message .= "Message: ".$message_form."\n";


  mail("vilgeforc5@gmail.com",$subject,$message);
  mail("Ecomfurnishop@gmail.com",$subject,$message);
  mail("sonomebli@gmail.com",$subject,$message);

?>