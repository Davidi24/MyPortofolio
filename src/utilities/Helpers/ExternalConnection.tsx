


export const handledownload = (cv: string) => {
    const link = document.createElement("a");
    link.href = cv; 
    link.download = "CV_David_Keci.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    if (isMobile) {
      window.location.href = `github://user?username=${username}`;
    } else {
      window.open(`https://github.com/${username}`, "_blank");
    }
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
  

  export const openWebsite = (url: string) => {
    window.open(url, "_blank");
  };
  