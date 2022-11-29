var uname = document.getElementById("name").value;;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var subject = document.getElementById("subject").value;
var who = document.getElementById("who").value;
var msg = document.getElementById("message").value;

var wholemsg = "mailto:contact@thefaap.org?subject=" + subject + "?body" + "Name: " + uname + "\nEmail: " + email + "\nPhone: " + phone + "\nWho Are You: " + who  + "\nMessage: " + msg;
;

function submitForm(){
        console.log(wholemsg);
        // window.location.href=wholemsg;
}