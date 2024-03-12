import React from "react";
import './footer.css';
import {GitHub} from '@mui/icons-material';

export default function Footer(){
    return(
        <div className='footer'>
            <ul className='ulFooter'>
                <li className='contactListItemFooter'><a href="https://github.com/regulitos"><p><GitHub/></p><p>GitHub</p></a></li>
            </ul>
        </div>
    )
}