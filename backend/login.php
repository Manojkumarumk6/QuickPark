<?php
// Start the session
session_start();

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Include the database connection file
require_once 'db.php'; // Adjust path if necessary

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Validate input
    if (empty($email) || empty($password)) {
        echo "<script>alert('Email and password are required!');</script>";
        echo "<script>window.location.href = '../log-in.html';</script>";
        exit;
    }

    // Prepare SQL statement to check if the user exists
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("Database query failed: " . $conn->error);
    }

    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if a user with the provided email exists
    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();

        // Verify the password
        if (password_verify($password, $user['password'])) {
            // Set session variables and redirect
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];

            header("Location: ../Book-a-Slot.html");
            exit;
        } else {
            echo "<script>alert('Invalid password!');</script>";
            echo "<script>window.location.href = '../log-in.html';</script>";
        }
    } else {
        echo "<script>alert('User not found!');</script>";
        echo "<script>window.location.href = '../log-in.html';</script>";
    }

    $stmt->close();
} else {
    echo "<script>alert('Invalid request method.');</script>";
    echo "<script>window.location.href = '../log-in.html';</script>";
}

$conn->close();
?>