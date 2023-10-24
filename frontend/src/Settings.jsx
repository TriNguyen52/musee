import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
export default function Settings() {
    return (
        <div>
            <Popup trigger=
                {<label style={{cursor: 'pointer'}}> Settings </label>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='contentSettings'>
                                Dark mode 
                                ABC
                            </div>
                            <div>
                                <button onClick={() => close()}>Close</button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};