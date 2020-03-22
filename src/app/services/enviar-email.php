<?php

    include "./../../assets/PHPMAiler/PHPMAilerAutoload.php"
    $destinatario = strip_tags(trim($_POST["email"]));
    $nome = trim($_POST["nome"]
    $menssagem = wordwrap($_POST["mensagem"], 80);
    $assunto = wordwrap($_POST["assunto"], 20);

    $para = "calmeida.no@gmail.com";
    $cabecalho = "From: webmaster@example.com" . "\r\n" .
                 "Reply-To:" . $destinatario . "\r\n" .
                 "X-Mailer: PHP/".phpversion();

    mail($para, $assunto, $menssagem, $cabecalho);
    echo "<h2> Email enviado com sucesso! </h2>";
    exit;
?>