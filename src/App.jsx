import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Componentes/ConteudoFooter/Footer";
import { CounterProvider } from "./Componentes/Funcoes/Buy";

function App() {
  return (
    <BrowserRouter>
      <CounterProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="#footer" element={<Footer />} />
        </Routes>
      </CounterProvider>
    </BrowserRouter>
  );
}

export default App;
