<?php
    $post = (!empty($_POST)) ? true : false;
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if($post){
        $name = htmlspecialchars($name);
        $name = urldecode($name);

        $email = htmlspecialchars($email);
        $email = urldecode($email);
        $email = trim($email);

        $message = htmlspecialchars($message);
        $message = urldecode($message);
        $error = '';

        if(!$error) {
            $name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

            $subject ="Новое сообщение с сайта moderno";
            $subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";

            $message1 ="\n\nИмя: ".$name."\n\nE-mail: " .$email."\n\nСообщение: ".$message."\n\n";	


            $header = "Content-Type: text/plain; charset=utf-8\n";

            $header .= "From: Новое сообщение <example@gmail.com>\n\n";	
            $mail = mail("jungarkajuna@gmail.com", $subject1, iconv ('utf-8', 'windows-1251', $message1), iconv ('utf-8', 'windows-1251', $header));

            if($mail) {
            echo 'OK';
            }
        }
        else {
            echo '<div class="notification_error">'.$error.'</div>';
        }
    }
?>