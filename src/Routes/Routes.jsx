import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import ListadeImagens from "../components/image";
import Download from "../pages/Download";

function Routas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/imagem/:id" element={<Download imagens={ListadeImagens} />} />
    </Routes>
  );
}

export default Routas;
