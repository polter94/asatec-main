// import React from "react";
import "./inicio.css";
import logo from "/public/img/ASATEC-logo.png";
import aes from "/public/img/AES-logo.png";
import feintec from "/public/img/FEINTEC.png";
import muni from "/public/img/MUN-CBA.png";
import asotec from "/public/img/ASOTEC.png";

import { PiMapPin } from "react-icons/pi";
import { PiPhone } from "react-icons/pi";
import { PiEnvelope } from "react-icons/pi";
import { PiThumbsUp } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";

const inicio = () => {
  return (
    <div>
      <div className="container inicio-background">
        <div className="box roboto">
          <h1>BIENVENIDO</h1>
          <p className="text-box">
            Únete a nuestra <b>comunidad</b> y accede a una amplia red de
            contactos. Aumenta tus <b>conocimientos</b>, mejora tus habilidades
            y expande tus oportunidades laborales.
          </p>

          <p>
            <b>¡En AES+ siempre hay algo nuevo que aprender!</b>
          </p>
          <a href="" className="text-box boton">
            Conoce nuestros cursos
          </a>
        </div>
      </div>

      <div className="container inicio-background-blue">
        <div className="box-transp">
          <img src={logo} alt="logo de ASATEC" />
          <img src={aes} alt="logo de AES" />
        </div>
      </div>

      <div className="container inicio-background-l-blue ">
        <div className="box-transp roboto">
          <p className="title"><b>Asociación Argentina de Técnicos en telefonía móvil- ASATEC.</b></p>
          <p>
            Nuestra asociación <b>nació hace 15 años</b> con la misión de
            promover el desarrollo profesional de los técnicos de celulares.
            Creemos en la importancia de la <b>formación continua</b> y la{" "}
            <b>actualización</b> de conocimientos. Por eso, creamos{" "}
            <b>ASATEC Estudios Superiores (AES+)</b>, que ofrece una amplia gama
            de cursos y especializaciones. Contamos con certificados no
            oficiales que garantizan la <b>calidad</b> de nuestros servicios y
            el <b>compromiso</b> con la excelencia.
          </p>
          <a href="/nosotros" className="boton">
            Leer mas
          </a>
        </div>
      </div>

      <div className="container inicio-background-l-blue">
        <div className="box-transp roboto">
          <p className="title"><b>Trabajan y confían en nosotros:</b></p>
          <img src={feintec} alt="" />
          <img src={muni} alt="" />
          <img src={asotec} alt="" />
        </div>
      </div>

      <div className="container inicio-background-cactus">
        <div className="box-white roboto">
          <p className="title"><b>¡Asociate!</b></p>
          <p>
            ASATEC es la primera asociación de técnicos de celulares en
            Argentina, y única en Latinoamérica. Contamos con múltiples
            beneficios. Rellena el siguiente formulario para unirte a la red más
            grande del país.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSexTh2R6-aHYfsnvXIvHbX4ngbTnocA_rOVMYS6PYAOwpclnA/viewform"
            className="boton"
          >Quiero asociarme</a>
        </div>
      </div>

      <div className="container inicio-background-l-blue">
        <div className="box-transp roboto">
        <p className="title"><b>Ubicación y contacto</b></p>
        <a href="" className=""><PiMapPin className="icono"/></a>
        <a href="" className=""><PiPhone className="icono"/></a>
        <a href="" className=""><PiEnvelope className="icono"/></a>
        <a href="" className=""><PiThumbsUp className="icono"/></a>
        <a href="" className="icono-boton"><PiInstagramLogo className="icono-bold"/></a>
        <a href="" className="icono-boton"><PiFacebookLogo className="icono-bold"/></a>
        </div>
      </div>
    </div>
  );
};

export default inicio;
