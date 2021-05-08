<?php
session_start();
include_once("dbconfig/config.php");
$name=$_POST['email'];
$password=$_POST['password'];
$name1=mysqli_real_escape_string($con,$name);
$password1=mysqli_real_escape_string($con,$password);
$query = mysqli_query($con, "SELECT * FROM login WHERE email='$name1' and password='$password1'");
if ($row = mysqli_fetch_array($query)) {
    $_SESSION['email'] = $row['email'];
    $_SESSION["loggedin"]= true;
    echo "LoginSuccess";
} else {
    echo "Login Failed";
}
?>