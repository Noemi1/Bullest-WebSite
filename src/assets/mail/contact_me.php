<!-- <?php
// Check for empty fields
if(empty(trim($_POST['name']))  		||
   empty(trim($_POST['email'])) 		||
   empty(trim($_POST['phone'])) 		||
   empty(trim($_POST['message']))	||
   !filter_var(trim($_POST['email']),FILTER_VALIDATE_EMAIL))
   {
      echo "No arguments Provided!";
      return http_response_code(400);
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Create the email and send the message
$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
$headers .= "From: noreply@bullest.com.br\r\n"; // remetente
$headers .= "Return-Path: noreply@bullest.com.br\r\n"; // return-path
$envio = mail("contato@bullest.com.br", "Contato Site BulleST", "Nome: $name\n\nE-mail: $email_address\n\nTelefone: $phone\n\nMensagem:\n$message", $headers);
// $envio = mail("calmeida.no@gmail.com", "Contato Site BulleST", "Nome: $name\n\nE-mail: $email_address\n\nTelefone: $phone\n\nMensagem:\n$message", $headers);
return true;			
?> -->