function Validation(values){
    let error = {};
    const email_pattern = /\S+@\S+\.\S+/;
    if(values.email === ""){
        error.email = "Please complete email field!";
    }else if(!email_pattern.test(values.email)){
        error.email = "Invalid Email format";
    }else{
        error.email = "";
    }
    if(values.password === ""){
        error.password = "Please complete password field!";
    }else if(values.password <= 7){
        error.password = "The password must contain at least 8 characters!";
    }else{
        error.password = "";
    }
    return error;
}
export default Validation;