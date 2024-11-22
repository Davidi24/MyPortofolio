import { Contacts } from "../../types/Contact";
export const checkAtributes = (formData: Contacts) => {
    const { fullName, email, phone, message } = formData;
  
    if (!fullName || !email || !phone || !message) {
      return {
        status: 0,
        message: "All fields marked with * are required.",
      };
    }
  
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        status: 0,
        message: "Please enter a valid email address.",
      };
    }
  
    // Basic phone validation
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
    if (!phoneRegex.test(phone)) {
      return {
        status: 0,
        message: "Please enter a valid phone number.",
      };
    }
  
    return {
      status: 1,
      message: "Success",
    };
  };
  