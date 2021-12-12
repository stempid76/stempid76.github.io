function runValidate(form){
    
    if(validateName(form) && validatePassword(form))
        return true;
    else
        return false;
} 

function validateName(form){
    var name = form.elements["Username"];
    
    if(name.validity.valueMissing){                 
        name.setCustomValidity("Please enter your name here");
        return false;
    }
    else{
        name.setCustomValidity("");
        return true;
    }
} 

function validatePassword(form){
    var zipCode = form.elements["password"];
    
    if(password.validity.valueMissing){   
        password.setCustomValidity("Please enter your password");
        return false;
    }
    else if(password.validity.patternMismatch){
        password.setCustomValidity("Enter a valid 8 digit code");
        return false;
    }
    else{
        password.setCustomValidity("");
        return true;
    }
} 

