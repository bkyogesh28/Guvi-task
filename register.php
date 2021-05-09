<?php
session_start();
include_once("dbconfig/config.php");
$name = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$sql = "SELECT * FROM login WHERE email='$user_email'";
$resultset = mysqli_query($con, $sql) ;
$row = mysqli_fetch_assoc($resultset);
if(!isset($row['email'])){
    $stmt = $con->prepare("INSERT INTO login (name, email,password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $password);
    $stmt->execute();
    echo "Successfuly Registered";

} else {
    echo "Email is Saved Already";
}

?>
