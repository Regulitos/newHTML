import React from "react";
import "./header.css"
import fotopersonal from "./fotopersonal.JPG";
import {Smartphone,LocationOn,Mail} from '@mui/icons-material';



export default function Header(){
    return (
        <div className="header">
            <div className="headerPhoto">
                <img src={fotopersonal} alt="foto-personal" className={'headerPhotoImg'}/>
            </div>
            <div className="headerNombres">
                <h1>Juan David Garcia Martinez</h1>
                <p>Tecnologo en Analisis y Desarrollo de Software</p>
            </div>
            <div className="headerContacto">
                <ul className="contactList">
                    <li className="contactListItem"><p><Smartphone/></p><p>(+57) 300 334 7131</p></li>
                    <li className="contactListItem"><p><LocationOn/></p><p>Pereira / Risaralda / Colombia</p></li>
                    <li className="contactListItem"><p><Mail/></p><p>jdgarcia905@soy.sena.edu.co</p></li>

                </ul>
            </div>
        </div>
    )
}