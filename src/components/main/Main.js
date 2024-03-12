import React from "react";
import "./main.css"

function Main(){
    return (
        <div className='main'>
            <h2>Habilidades</h2>
            <div className='cvMain'>
                <ul className='ListaHabilidadesMain'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>NodeJS</li>
                    <li>Visual Basic</li>
                    <li>SQL</li>
                    <li>REACT</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>MySQL Workbench</li>

                </ul>
            </div>
            <h2>Formacion Academica Universitaria</h2>
            <div className='cvMain'>
                <p>Tecnologo en Analisis y Desarrollo de Software (En Proceso)</p>
                <p>Tecnico en Analisis Financiero</p>
            </div>
            <h2>Experiencia Laboral</h2>
            <div className='cvMain'>
                <p><strong>Servicio al Cliente.</strong> 1 año</p>
                <p><strong>Militar.</strong> 1 año</p>
            </div>
            <h2>Proyectos desarrollados</h2>
            <div className="cvMain">
                <ul className="ListaHabilidadesMain">
                    <li><p>Ajedrez </p></li>
                    <li><p>Buscaminas</p></li>
                    <li><p>Aplicacion Prestamos</p></li>
                    <li><p>Control Medicamentos</p></li>
                    <li><p>Registro Personas</p></li>
                </ul>
            </div>
        </div>
    )
}

export default Main