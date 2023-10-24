import React, { useState } from 'react';
import './Noti.css'; 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
export default function Noti() {
    return (
        <div>
            <Popup trigger=
                {<label style={{cursor: 'pointer'}}> Notifications </label>}
                position="right center">
                <div>Noti1</div>
                <div>Noti2</div>
                {/* <button>Click here</button> */}
            </Popup>
        </div>
    )
};

