<?php
session_start();
include_once("dbconfig/config.php");
$name=$_POST['name1'];
$email=$_POST['email'];
$pass=$_POST['password'];
$sql="SELECT * FROM login WHERE email='$email'";
$res=mysqli_query($con,$sql);
$row=mysqli_fetch_assoc($res);
// $options = [
//     'cost' => 12,
// ];
// $hasedPass=password_hash($pass,PASSWORD_DEFAULT);
if(empty($name)){
    echo '<script>alert("Name is empty ")</script>';
}
if(empty($email)){
    echo '<script>alert("Email is Empty")</script>';
}
if(empty($pass)){
    echo '<script>alert("Password is empty")</script>';
}
if(!isset($row['email'])){
    $data=$con->prepare("INSERT INTO login (name,email,password) VALUES(?,?,?)");
    $data->bind_param("sss",$name,$email,$pass);
    $data->execute();
    echo("RegisterSuccess");
    // echo '<div class="alert alert-success alert-dismissable" id="flash-msg">
    // <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>
    // <h4><i class="icon fa fa-check"></i>User Saved Successfully</h4>
    // </div>';
}else{
    // echo '<div class="alert alert-danger alert-dismissable" id="flash-msg">
    // <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>
    // <h4><i class="icon fa fa-check"></i>Email exists</h4>
    // </div>';
}

?>