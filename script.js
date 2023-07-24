function validateForm() {
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;
    // var cc = document.forms["form"]["cc"].value;
    var error = "";

    if (name == "") {
    error += "Please enter your name.\n";
    } else if (!validateName(name)) {
    error += "Please enter a valid first & last name.\n";
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

    function validateName(name) {
        var fl = /^[a-zA-Z]+ [a-zA-Z]+$/;
        return fl.test(name);
    }
    
}





