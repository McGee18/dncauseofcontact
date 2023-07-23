function validateForm() {
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;
    // var ccn = document.forms["form"]["ccn"].value;
    var error = "";

    if (name == "") {
    error += "Please enter your name.\n";
    }

    if (email == "") {
    error += "Please enter your email address.\n";
    } else if (!validateEmail(email)) {
    error += "Please enter a valid email address.\n";
    }

    if (error != "") {
    alert(error);
    return false;
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}

// function validateForm(){
//         var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
//         var name = document.getElementById('name').value;
//         if(!regName.test(name)){
//             alert('Please enter your full name (first & last name).');
//             document.getElementById('name').focus();
//             return false;
//         }else{
//             alert('Valid name given.');
//             return true;
//         }
//     }

    // function validateName(name) {
    //     var fl = /^[a-zA-Z]+ [a-zA-Z]+$/;
    //     return fl.test(name);
    // }




