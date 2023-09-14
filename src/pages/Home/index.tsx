import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import LogoAdidas from "./../../assets/Adidas_Logo.jpg";
import CarCard from '@components/CarCard';


const Home: React.FC = () => {
  const goTo = useNavigate();

  const redirectToLogin = (e: any) => {
    e.preventDefault();
    goTo("/login");
  }
  const redirectToHome = (e: any) => {
    e.preventDefault();
    goTo("/");
  }
  const redirectToInfo = (e: any) => {
    e.preventDefault();
    goTo("/info");
  }
  return (
    <>
      <header>
        <div className="color-fondo">
          <div className="container flex justify-between ">
            <img src={LogoAdidas} alt="Logo Adidas" className="imagenes" />
            <Button onClick={redirectToLogin} variant="contained">INICIAR SESIÓN</Button>
            <img src={LogoAdidas} alt="Logo Adidas" className="imagenes" />
          </div>
        </div>
      </header>
      <main>
        <hr />
        <div className='gap-x-4 flex'>
          <Button onClick={redirectToHome} variant="outlined">HOME</Button>
          <Button onClick={redirectToInfo} variant="outlined">INFORMACION</Button>
          <Button variant="outlined">CONTACTO</Button>
        </div>
        <hr />
        <div className='flex justify-center w-full'>
          <div className='flex flex-wrap gap-[2%] gap-y-8'>
            <CarCard id='1'  modelo="RENAULT" descripcion="Asdasdasdasdasdasdqasdasdasdasd" />
            <CarCard id='2'  modelo="LUCAS" descripcion="Asdasdasdasdasdasdqasdasdasdasd" />
            <CarCard id='3'  modelo="OTAVIO" descripcion="Asdasdasdasdasdasdqasdasdasdasd" />
            <CarCard id='4'  modelo="RICK" descripcion="Asdasdasdasdasdasdqasdasdasdasd" />
            <CarCard id='5'  modelo="DIENTE" descripcion="Asdasdasdasdasdasdqasdasdasdasd" />
            <CarCard id='6'  modelo="PACO" descripcion="Asdasdasdasdasdasdqasdasdasdasd" />
            <CarCard id='7'  modelo="ASDASD" descripcion="Asdasdasdasdasdasdqasdasdasdasd" />
            <CarCard id='8'  modelo="PABLO" descripcion="Asdasdasdasdasdasdqasdasdasdasd" />
            <CarCard id='9'  modelo="ASPDOIASPD" descripcion="Asdasdasdasdasdasdqasdasdasdasd" />
            <CarCard id='10'  modelo="GOL" descripcion="Asdasdasdasdasdasdqasdasdasdasd" />
            <CarCard id='11'  modelo="NISSAN" descripcion="Asdasdasdasdasdasdqasdasdasdasd" />
            <CarCard id='12'  modelo="SENDERO" descripcion="Asdasdasdasdasdasdqasdasdasdasd" />
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default Home