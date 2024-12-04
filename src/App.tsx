import { BrowserRouter, Route, Routes } from "react-router-dom";
import EntryPage from "./pages/EntryPage";
import me from "./assets/Icons/me.png"


const Prova = ()=>{
  return(
    <>
    <img src={me} alt="" className="h-[40rem]" />
    </>
  )
}



function App() {

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
