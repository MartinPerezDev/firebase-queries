import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SongsProvider } from "./context/SongsContext";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <SongsProvider>
        <main className="app">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:idSong" element={<Detail />} />
          </Routes>
        </main>
      </SongsProvider>
    </BrowserRouter>
  );
}

export default App;
