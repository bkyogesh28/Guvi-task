<?php   
session_start(); 
session_destroy(); 
header("location:login.html"); 
echo("LogoutSuccess");
exit();
?>