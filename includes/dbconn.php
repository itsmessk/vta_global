<?php
// Database connection credentials
$host = "localhost";
$username = "root";
$password = "root";
$dbname = "Infoziant";

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
