funtion validateform(){
x=document.getElementBYId("username").value;
if(x==""){
alert("username must be filled");
return false;
}
x=document.getElementBYId("email").value;
if(x==""){
alert("email must be filled");
return false;
}

x=document.getElementBYId("password").value;
if(x==""){
alert("password must be filled");
return false;
}
x=document.getElementBYId("Degree").value;
if(x==""){
alert("Degree must be filled");
return false;
}
x=document.getElementBYId("Branch").value;
if(x==""){
alert("Branch must be filled");
return false;
}
x=document.getElementBYId("Collegename").value;
if(x==""){
alert("Collegename must be filled");
return false;
}
x=document.getElementBYId("repeate password").value;
if(x==""){
alert("repeate password must be filled");
return false;
}
}
