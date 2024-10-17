<?php
   header('Content-Type: application/json');

   if (!extension_loaded('curl')) {
       die('cURL extension is not loaded.');
   }

   require_once __DIR__ . '/vendor/autoload.php';
   Dotenv::load(__DIR__); 

   $telegram_token = getenv('TELEGRAM_TOKEN');
   $telegram_chat_id = getenv('TELEGRAM_CHAT_ID'); 

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

   // Отправка сообщения по почте
   mail("youremail1@gmail.com",$subject,$message);
   mail("youremail2@gmail.com",$subject,$message);
   mail("youremail3@gmail.com",$subject,$message);

   // Отправка сообщения в Telegram
   $telegram_message = "Новая заявка с сайтика:\n" .
       "Имя: $name\n" .
       "Номер: $tel\n" .
       "Емейл: $visitor_email\n" .
       "Сообщение: $message_form";

   $telegram_url = "https://api.telegram.org/bot$telegram_token/sendMessage?chat_id=$telegram_chat_id&text=".urlencode($telegram_message);

   // Отправка запроса в Telegram API
   $ch = curl_init();
   curl_setopt($ch, CURLOPT_URL, $telegram_url);
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   curl_setopt($ch, CURLOPT_POST, true);
   $response = curl_exec($ch);
   curl_close($ch);

   echo json_encode(['success' => true]);
?>
