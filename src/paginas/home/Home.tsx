import React from "react";
import imagem from './img/react.png';
import './Home.css';

function Home()  {
    return (
    <>
        <div className="titulo">
            <h1>Olá Mundo!</h1>

            <h2>Aprendendo ReactJs com a Generation Brasil</h2>
        </div>

        <div className="container">
            <img src={imagem} className="img" alt="imagem" />
        </div>
    </>
    )
}

export default Home;
