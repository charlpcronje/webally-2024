<?php
// /api/contact.php

// Database configuration
$dbConfig = [
    'host' => 'localhost',
    'dbname' => 'webally',
    'user' => 'cp',
    'pass' => '4334.4334'
];

// Email configuration
$emailConfig = [
    'smtp_host' => 'smtp.ionos.com',
    'smtp_port' => 587,
    'smtp_user' => 'charl@webally.co.za',
    'smtp_pass' => 'Pl@tinum4334'
];

try {
    // Get POST data
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Connect to database
    $pdo = new PDO(
        "mysql:host={$dbConfig['host']};dbname={$dbConfig['dbname']};charset=utf8mb4",
        $dbConfig['user'],
        $dbConfig['pass'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
    
    // Save to database
    $stmt = $pdo->prepare("
        INSERT INTO contact_submissions 
        (full_name, email, industry, subscribe_newsletter, subject, message) 
        VALUES (?, ?, ?, ?, ?, ?)
    ");
    
    $stmt->execute([
        $data['fullName'],
        $data['email'],
        $data['industry'],
        $data['subscribeNewsletter'] ? 1 : 0,
        $data['subject'],
        $data['message']
    ]);

    // Send admin notification
    $adminEmail = "info@webally.co.za";
    $adminSubject = "New Contact Form Submission";
    $adminMessage = "
        New contact form submission:\n
        Name: {$data['fullName']}\n
        Email: {$data['email']}\n
        Industry: {$data['industry']}\n
        Subject: {$data['subject']}\n
        Message: {$data['message']}\n
    ";
    
    // Send confirmation to user
    $userSubject = "Thank you for contacting webAlly";
    $userMessage = "
        Dear {$data['fullName']},\n\n
        Thank you for contacting webAlly. We have received your message and will respond shortly.\n\n
        Best regards,\n
        The webAlly Team
    ";

    // PHPMailer setup for emails
    require 'vendor/autoload.php';
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host = $emailConfig['smtp_host'];
        $mail->SMTPAuth = true;
        $mail->Username = $emailConfig['smtp_user'];
        $mail->Password = $emailConfig['smtp_pass'];
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = $emailConfig['smtp_port'];

        // Send to admin
        $mail->setFrom($emailConfig['smtp_user'], 'webAlly Contact Form');
        $mail->addAddress($adminEmail);
        $mail->Subject = $adminSubject;
        $mail->Body = $adminMessage;
        $mail->send();

        // Send to user
        $mail->clearAddresses();
        $mail->addAddress($data['email']);
        $mail->Subject = $userSubject;
        $mail->Body = $userMessage;
        $mail->send();

        http_response_code(200);
        echo json_encode(['success' => true]);
    } catch (Exception $e) {
        error_log("Mail error: {$e->getMessage()}");
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Error sending email']);
    }

} catch (Exception $e) {
    error_log("Error: {$e->getMessage()}");
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server error']);
}