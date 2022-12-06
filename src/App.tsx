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
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import CadastroPost from './components/postagens/cadastroPostagem/CadastroPost';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';


function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ minHeight: '100vh' }}>
        <Routes>

          <Route path="/home" element={<Home />} />

          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/cadastrar" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/posts" element={<ListaPostagem />} />

          <Route path='/formularioTema' element={<CadastroTema />} />

          <Route path='/formularioTema/:id' element={<CadastroTema />} />

          <Route path='/formularioPost' element={<CadastroPost />} />

          <Route path='/formularioPost/:id' element={<CadastroPost />} />

          <Route path='/deletarTema/:id' element={<DeletarTema />} />

          <Route path='/deletarPostagem/:id' element={<DeletarPostagem />} />

        </Routes>
      </div>
      
      <Footer />
    </Router>

    // Todo componente precisa de um tsx e um css.

    // trocar a versão do MUI para v4 no site da documentação
  );
}

export default App;
