export const CheckValidData = ( emailId, password) => {
    // Regex for valid email
    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(emailId);
  
    // Regex for password validation: at least 8 characters, one letter, one number
    const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  
    // Check name validity (simple check: non-empty and only letters)
   // const nameValid = /^[a-zA-Z\s]+$/.test(name);
  
    // Check name validity
   /* if (!nameValid) {
      return "Name is not valid. It should contain only letters.";
    }*/
  
    // Check email validity
    if (!emailValid) {
      return "Email is not valid";
    }
  
    // Check password validity
    if (!passwordValid) {
      return "Password is not valid. It should contain at least 8 characters, including one letter and one number.";
    }
  
    return null; // If all are valid, return null
  };
  