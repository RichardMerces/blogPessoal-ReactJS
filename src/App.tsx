import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './paginas/home/Home';
import { Grid } from '@material-ui/core';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <Footer />
      {/* <Grid container>
            <Grid item xs={12} sm={12}>
                <Home />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Home />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Home />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Home />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Home />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Home />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Home />
            </Grid>
      </Grid> */}
    </>
    // Todo componente precisa de um tsx e um css.

    // trocar a versão do MUI para v4 no site da documentação
  );
}

export default App;
