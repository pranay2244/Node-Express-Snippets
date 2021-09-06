var Name, email, phone;
var database = firebase.database().ref('users');

function getData() {
    Name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value
}

function read() {
    var phone = document.getElementById("phone").value;
    console.log("Read");
    database.child(phone).on('value', (snapshot) => {
        obj = snapshot.val()
        if (obj != null) {
            var s = `Name: ${obj['Name']}\n Email: ${obj['Email']}\n Phone:
${obj['Phone']} `;
            alert(s)
        } else
            alert('Data not found');
    });
}

function insert() {
    getData();
    console.log("Insert");
    database.child(phone).set({ Name, email, phone, })
}

function update() {
    getData();
    console.log("Update");
    database.child(phone).set({ Name, email, phone, })
}

function Delete() {
    var phone = document.getElementById("phone").value;
    console.log("Delete");
    database.child(phone).set(null);
}