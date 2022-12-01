import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';


function App() {
  return (
    <Router>
        <Navbar />
        <Routes>

            <Route path="/home" element={<Home />} />

            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />

            <Route path="/cadastrar" element={<CadastroUsuario />} />

            <Route path="/temas" element={<ListaTema />} />

            <Route path="/posts" element={<ListaPostagem />} />
            
        </Routes>
        <Footer />
    </Router>

    // Todo componente precisa de um tsx e um css.

    // trocar a versão do MUI para v4 no site da documentação
  );
}

export default App;
