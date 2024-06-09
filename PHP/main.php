<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "hugo.creneau@etu.uca.fr";

    $email_subject = "New Contact Form Submission: $subject";

    $email_body = "You have received a new message from $name ($email):\n\n$message";

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $email_subject, $email_body, $headers)) {
        header("Location: index.html");
        exit;
    } else {
        echo "Failed to send the email.";
    }
}