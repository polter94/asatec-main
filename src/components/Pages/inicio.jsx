// import React from "react";
import './inicio.css';
import logo from '/public/img/ASATEC-logo.png';
import aes from '/public/img/AES-logo.png';

const inicio = () => {
  return (
    <div>

      <div className="inicio-background">
        <div className="container roboto">
          <h1>BIENVENIDO</h1>
          <p className="text-box">Únete a nuestra <b>comunidad</b> y accede a una amplia red de contactos. Aumenta tus <b>conocimientos</b>, mejora tus habilidades y expande tus oportunidades laborales.</p>
          <p><b>¡En AES+ siempre hay algo nuevo que aprender!</b></p>
          <a href="" className='text-box boton'>Conoce nuestros cursos</a>
        </div>
      </div>

      <div className="inicio-background-blue">
        <div className='container-transp'>
          <img src={logo} alt="logo de ASATEC" />
          <img src={aes} alt="logo de AES" />
        </div>
      </div>

      <div className="inicio-background-l-blue ">
        <div className='container-transp roboto'>
          <h2>Asociación Argentina de Técnicos en telefonía móvil- ASATEC.</h2>
          <p>Nuestra asociación <b>nació hace 15 años</b> con la misión de promover el desarrollo profesional de los técnicos de celulares. Creemos en la importancia de la <b>formación continua</b> y la <b>actualización</b> de conocimientos. Por eso, creamos <b>ASATEC Estudios Superiores (AES+)</b>, que ofrece una amplia gama de cursos y especializaciones. Contamos con certificados no oficiales que garantizan la <b>calidad</b> de nuestros servicios y el <b>compromiso</b> con la excelencia.</p>
          <a href="/nosotros" className='boton'>Leer mas</a>
        </div>
      </div>

    </div>
  );
};

export default inicio;
