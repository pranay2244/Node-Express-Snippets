const query = new URLSearchParams(window.location.search);
var phone = query.get('phone');
var database = firebase.database().ref('users');
database.child(phone).on('value',(snapshot) => {
        obj = snapshot.val()
		if(obj!=null){
			document.getElementById("name").innerHTML  = obj['Name'];
			document.getElementById("email").innerHTML = obj['Email'];
			document.getElementById("pass").innerHTML = obj['Pass'];
			document.getElementById("college").innerHTML = obj['College'];
			document.getElementById("courses").innerHTML = obj['Course'];
			document.getElementById("phone").innerHTML = obj['Phone'];
		}
		else
			alert('Data not found');
});