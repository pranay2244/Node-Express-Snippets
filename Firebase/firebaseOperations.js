var Name,email,pass,college,course,phone;
var database = firebase.database().ref('users');
function getData(){
    Name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value;
    college = document.getElementById("college").value;
    course = document.getElementById("course").value;
    phone = document.getElementById("phone").value
}
function read(){
    var phone = document.getElementById("phone").value;
	if(phone.toString()=='')
		alert('Enter a phone number');
	else
		window.location = `showData.html?phone=${phone}`;
    console.log("Read");
}
function insert(){
    getData();
    console.log("Insert");
    database.child(phone).set({
        Name: Name,
        Email: email,
        Phone: phone,
        Pass: pass,
        College: college,
        Course: course
    })
}
function update(){
    getData();
    console.log("Update");
    database.child(phone).set({
        Name: Name,
        Email: email,
        Phone: phone,
        Pass: pass,
        College: college,
        Course: course
    })
}
function Delete(){
    var phone = document.getElementById("phone").value;
    console.log("Delete");
    database.child(phone).set(null);
}