import { Contacts } from "../../types/Contact";



export const handledownload = (cv: string) => {
  const isDataURL = cv.startsWith("data:");
  const isBlobURL = cv.startsWith("blob:");
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  let blob: Blob | null = null;

  if (isDataURL) {
    blob = dataURLtoBlob(cv);
  } else if (isBlobURL) {
    blob = new Blob([cv], { type: "application/pdf" });
  }

  if (blob) {
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobURL;
    link.download = "CV_DavidKeci.pdf";

    if (isSafari) {
      window.open(blobURL, "_blank");
    } else {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    URL.revokeObjectURL(blobURL);
  } else {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "CV_DavidKeci.pdf";

    if (isSafari) {
      window.open(cv, "_blank");
    } else {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  sendMessage({
    fullName: "CV Download Notification",
    email: "kecidavid22@gmail.com",      
    phone: "",
    subject: "CV Downloaded",
    message: "Someone downloaded your CV from your website.",
  });
};


const dataURLtoBlob = (dataURL: string) => {
  const [header, base64] = dataURL.split(",");
  const mimeType = header.match(/:(.*?);/)?.[1] || "";
  const binary = atob(base64);
  const array = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) {
    array[i] = binary.charCodeAt(i);
  }

  return new Blob([array], { type: mimeType });
};


export const openLinkedInPage = (username: string) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = `linkedin://profile/${username}`;
  } else {
    window.open(`https://www.linkedin.com/in/${username}/`, "_blank");
  }
};

export const openGitHubPage = (username: string) => {
  window.open(`https://github.com/${username}`, "_blank");
};

export const openGmail = (email: string) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const gmailUrl = isMobile
    ? `mailto:${email}`
    : `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  window.open(gmailUrl, "_blank");
};

export const openWhatsApp = (phoneNumber: string) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const whatsappUrl = isMobile
    ? `https://wa.me/${phoneNumber}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}`;

  window.open(whatsappUrl, "_blank");
};

export const openInstagramPage = (username: string) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = `instagram://user?username=${username}`;
  } else {
    window.open(`https://www.instagram.com/${username}/`, "_blank");
  }
};


export const openWebsite = (url: string) => {
  window.open(url, "_blank");
};


import { checkAtributes } from "../Authentication/Contact";

export const sendMessage = async (formData: Contacts) => {
  const isValid = checkAtributes(formData);
  if (isValid.status == 0) {
    return isValid.message;
  }
  const form = new FormData();
  const secretKey = import.meta.env.VITE_MESSAGE_SECRETKEY;
  if (secretKey) {
    form.append("access_key", secretKey);
    form.append("fullName", formData.fullName);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    if (formData.subject) {
      form.append("company", formData.subject);
    }
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        return "Form Submitted Successfully";
      } else {
        console.error("Error", data);
        return data.message || "Failed to submit the form. Please try again.";
      }
    } catch (error) {
      console.error("Submission error:", error);
      return "An error occurred while sending the message. Please try again.";
    }
  }
  else {
    console.log("You dont have access")
  }

};
