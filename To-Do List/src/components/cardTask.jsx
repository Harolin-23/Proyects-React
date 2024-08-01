
import React, { useState } from 'react';


import './cardsTask.css'

export const CardContainer = ()=>{

    
    return(
        <div className='container-task event'>
            <div className='superior-info'>
                    <div className='title-task'>
                        <p><b>Sacar la Basura</b></p>
                    </div>
                    
              
                <hr />
                <p>priority <i class="fa-solid fa-circle"></i></p>

                <div className='checker'>
                        <i class="fa-regular fa-circle"></i>
                    </div>
            </div>
            <div className='bottom-info'>
                <div className='more-info'>
                    <p>El perro se puede comer la basura y hay que sacarla antes de que lo haga</p>
                </div>
                <div className='especifications'>
                    <p>Fecha limite: <b>12:20 PM</b></p>
                </div>
                <div className='time'>
                    <p>20:10 pm <b><i class="fa-regular fa-clock"></i></b></p>
                </div>
               
            </div>
        </div>
    )
}

