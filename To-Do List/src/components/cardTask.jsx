
import React, {  useState, useEffect, useRef } from 'react';


import './cardsTask.css'

export const CardContainer = ()=>{

    const [presionado, setPresionado] = useState(false);
    const [inicio, setInicio] = useState(0);
    const timeoutRef = useRef(null);
  
    const handleMouseDown = () => {
      setInicio(Date.now());
      timeoutRef.current = setTimeout(() => {
        if(presionado == true){
            setPresionado(false);
        }else{
            setPresionado(true);
        }
     
      }, 1000);
    };
  
    const handleMouseUp = () => {
      clearTimeout(timeoutRef.current);
      const fin = Date.now();
      const tiempo = fin - inicio;
    };
  
    return(
        <div className='container-task'
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        >
            {
                !presionado ? (
                    <>
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
                    </>
                ) : (
                    <div className=' activeEditor'>
                        <h1>Click para editar <i class="fa-solid fa-pen"></i></h1>
                    </div>
                )
            }
            
        </div>
    )
}

