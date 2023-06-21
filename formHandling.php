<?php
  $name = $_POST['name'];
  $tel = $_POST['tel'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $to = "vilgeforc5@gmail.com";
  mail($to,"My subject",$name);
  
?>