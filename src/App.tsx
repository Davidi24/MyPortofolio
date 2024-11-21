import { BrowserRouter, Route, Routes } from "react-router-dom";
import EntryPage from "./pages/EntryPage";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<EntryPage />} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
