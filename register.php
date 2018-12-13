<?php
include("config.php");
$link=$db;
// check connection
if($link===false){
die("ERROR:Could not connect.".mysqli_connect_error());
}
$username=$_post['user name'];
$collegename['college name'];
$degree=$_['degree'];
$branch=$_['branch'];
$email=$_['email'];
$password=$_['password'];
$repeatpassword=$_['repeatpassword'];
//attempt insert  query execution
$sql="INSERT INTO register('username','collegename','degree','branch',email','password','repeatpassword')values
values($username,$collegename,$degree,$branch,$email,$password,$repeatpassword);
if(mysqli_query($db,$sql)){
echo"records added succesfully.";
}else{ echo"ERROR:could not able to execute $sql.".mysqli_error($link);
}
//close connection
mysqli_close($link);?>
