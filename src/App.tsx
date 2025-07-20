import { BrowserRouter, Route, Routes } from "react-router-dom";
import EntryPage from "./pages/EntryPage";
import me from "./assets/Icons/me.png"
import { sendMessage } from "./utilities/Helpers/ExternalConnection";
import { useEffect } from "react";


const Prova = () => {
  return (
    <>
      <img src={me} alt="" className="h-[40rem]" />
    </>
  )
}



function App() {

  useEffect(() => {
    if (!sessionStorage.getItem('websiteOpened')) {
      sendMessage({
        fullName: "CV Download Notification",
        email: "kecidavid22@yourdomain.com",
        phone: "+491234567890",
        subject: "Website opened",
        message: "Someone opened your website",
      });
      sessionStorage.setItem('websiteOpened', 'true');
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<EntryPage />} />
        </Routes>
        <Routes>
          <Route path="/prova" element={<Prova />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
