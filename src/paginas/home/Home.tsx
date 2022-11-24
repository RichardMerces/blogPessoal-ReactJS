import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "Teal" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;

{/*
function Home()  {
    return (
    <>
        <Box display='flex'flexDirection='column' justifyContent='center' alignItems='center' mb='2'>
            <h1>Home</h1>
        </Box>
        <Box display='flex' justifyContent='center'>
            <Button>Botão 1</Button>
            <Button>Botão 2</Button>
        </Box>

          Container Principal
        <Grid container>
            <Grid item xs={12} sm={6} style={{background: 'orange', height: '100vh'}}>Item 1</Grid>
            <Grid item xs={12} sm={6} style={{background: 'lightgrey', height: '100vh'}}>Item 2</Grid>
            <Grid item xs={12} sm={6} style={{background: 'pink', height: '100vh'}}>Item 3</Grid>
             Container Interno 
            <Grid item xs={12} sm={6}>
                <Grid item direction="column" style={{background: 'orange', height: '50vh'}}>Item 4</Grid>
                <Grid item direction="column" style={{background: 'lightgrey', height: '50vh'}}>Item 5</Grid>
            </Grid>
        </Grid> */}
        {/* <div className="titulo">
            <h1>Olá Mundo!</h1>

            <h2>Aprendendo ReactJs com a Generation Brasil</h2>
        </div>

        <div className="container">
            <img src={imagem} className="img" alt="imagem" />
        </div> 
    </>
    )
}
*/}