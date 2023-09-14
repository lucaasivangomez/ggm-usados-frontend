import React from 'react'
import LogoAdidas from "./../../assets/Adidas_Logo.jpg";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'


const Login: React.FC = () => {
  const goTo = useNavigate();

  const redirectToHome = (e: any) => {
    e.preventDefault();
    goTo("/");
  }

  return (
    <>
      <header>
        <div className="color-fondo">
          <div className="container flex justify-between ">
            <img src={LogoAdidas} alt="Logo Adidas" className="imagenes" />
            <img src={LogoAdidas} alt="Logo Adidas" className="imagenes" />
          </div>
        </div>
      </header>
      <main>
        <hr />
        <div className='flex justify-center w-full'>
          <div className='flex flex-column gap-y-8 min-w-28'>
            <Typography gutterBottom variant="h5" component="div">
              INICIAR SESIÓN
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Mail/Username"
              defaultValue="Username"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Button onClick={redirectToHome} variant="outlined">Ir</Button>
            <Button onClick={redirectToHome} variant="outlined">Atras</Button>
          </div>
        </div>

      </main>
    </>
  )
}

export default Login