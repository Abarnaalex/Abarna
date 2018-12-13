funtion validateform(){
x=document.getElementBYId("email").value;
if(x==""){
alert("email must be filled");
return false;
}
x=document.gerElementBYId("password").value;
if(x==""){
alert("password must be filled");
return false;
}
}
