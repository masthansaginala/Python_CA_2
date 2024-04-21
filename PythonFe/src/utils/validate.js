export const validateData = (email, password, ...rest) => {
    console.log("rest==",...rest);
    console.log("rest[0].userName",rest[0].userName);
    // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    // Password rules
    // Be between 8 and 20 characters long.
    // Contain at least one uppercase letter.
    // Contain at least one lowercase letter.
    // Contain at least one digit.
    // Allow special characters.
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const  isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,20}$/.test(password);

    const  isConfirmPasswordValid = rest[0].confirmPassword === password;

    console.log(isConfirmPasswordValid);

    if(!rest[0].userName) return "Please enter Username.";
    if(rest[0].isSignUpForm && !isEmailValid) return "Please enter a valid email address.";
    if(!isPasswordValid) return "Please enter a valid password.";
    if(rest[0].isSignUpForm && !isConfirmPasswordValid) return "Password and Confirm password should be same.";

    return null; // if email and password is valid then we are returning null.
}