export const signupAuthentication = (
    username: string,
    email: string,
    password: string,
    repeatPassword: string
  ) => {
    // Check if all fields are provided
    if (!username || !email || !password || !repeatPassword) {
      return { id:1, success: false, message: "All fields are required." };
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { id:2, success: false, message: "Invalid email format." };
    }
  
    // Check if passwords match
    if (password !== repeatPassword) {
      return { id:3, success: false, message: "Passwords do not match." };
    }
  
    // Validate password strength (example: at least 8 characters)
    if (password.length < 8) {
      return { id:4, success: false, message: "Password must be at least 8 characters long." };
    }
  
    return { id:5, success: true, message: "Signup successful." };
  };
  