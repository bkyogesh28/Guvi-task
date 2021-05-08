<?php
session_start();
include_once("dbconfig/config.php");
$age=$_POST['age'];
$num=$_POST['number'];
$role=$_POST['role'];
$email=$_SESSION['email'];
$query="SELECT * FROM details WHERE email='$email'";
$res=mysqli_query($con,$query);
$row=mysqli_fetch_assoc($res);
echo $row['email'];
if(!isset($row['email'])){
    $data=$con->prepare("INSERT INTO details (email,age,number,role) VALUES(?,?,?,?)");
    $data->bind_param("ssss",$email,$age,$num,$role);
    $data->execute();
    echo "UpdateS";
}elseif(isset($row['email'])){
    $data=$con->prepare("UPDATE details SET age=?,number=? WHERE email=?");
    $data->bind_param("sss",$age,$num,$email);
    $data->execute();
    echo "UpdatesS";
}else{
    echo "Updation Failed";
    
}
?>