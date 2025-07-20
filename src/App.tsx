import { BrowserRouter, Route, Routes } from "react-router-dom";
import EntryPage from "./pages/EntryPage";
import me from "./assets/Icons/me.png";
import { sendMessage } from "./utilities/Helpers/ExternalConnection";
import { useEffect } from "react";

// Helper to generate or get existing Browser ID
function getBrowserId() {
  let browserId = localStorage.getItem("browserId");
  if (!browserId) {
    browserId = crypto.randomUUID();
    localStorage.setItem("browserId", browserId);
  }
  return browserId;
}

const Prova = () => {
  return (
    <>
      <img src={me} alt="" className="h-[40rem]" />
    </>
  );
};

function App() {
  useEffect(() => {
    const browserId = getBrowserId();
    sendMessage({
      fullName: "CV Download Notification",
      email: "kecidavid22@yourdomain.com",
      phone: "+491234567890",
      subject: "Website opened",
      message: `Someone opened your website. BrowserID: ${browserId}`,
    });
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
