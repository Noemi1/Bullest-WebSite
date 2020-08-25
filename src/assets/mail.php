<?php
    require './PHPMailer/src/PHPMailer.php';


switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
		
		$body = json_decode($HTTP_RAW_POST_DATA, true);
		
		// Check for empty fields
		if(empty($body['Nome'])) {  // Ele entra no if como se o nome fosse vazio, mas não está vazio essa droga
			echo "Nome deve ser informado!";
			echo "Nome: " + $body['Nome'];
			return false;
		} else if(empty($body['Email'])) {
			echo "Email deve ser informado!";
			echo $body['Email'];
			return false;
		} else if(empty($body['Mensagem'])) {
			echo "Mensagem deve ser informado!";
			echo $body['Mensagem'];
			return false;
		}
			
		$name = $body['Nome'];
		$email_address = $body['Email'];
		$message = $body['Mensagem'];
		$assunto = empty($body['Assunto']) ? '' : $body['Assunto']; 
		$telefone = empty($body['Telefone']) ? '' : $body['Telefone']; 

		// Create the email and send the message
		$headers = "MIME-Version: 1.1\r\n";
		$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
		$headers .= "From: noreply@kadin.com.br\r\n"; // remetente
		$headers .= "Return-Path: noreply@kadin.com.br\r\n"; // return-path
		$envio = mail("contato@bullest.com.br", "Contato Site Bullest: \n\n$assunto", "Nome: $name\n\nTelefone: $telefone\n\nE-mail: $email_address\n\nMensagem:\n$message", $headers);
		return true;	
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}


?>