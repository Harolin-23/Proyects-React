
import React, {  useState, useEffect, useRef } from 'react';


import './cardsTask.css'

export const CardContainer = ({OnpressAction})=>{

    const [presionado, setPresionado] = useState(true);
    const timeoutRef = useRef(null);
  
    const handleMouseDown = () => {
      timeoutRef.current = setTimeout(() => {
        presionado ?  setPresionado(false) :   setPresionado(true);
      }, 1000);
    };

    useEffect(() => {
      }, [OnpressAction]);
    

    const handleMouseUp = () => {
      clearTimeout(timeoutRef.current);
    };

    const editorOpenb = ()=>{
        setPresionado(true)
        OnpressAction(true)
    }
  
    return(
        <div className='container-task'
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        >
            {
                presionado ? (
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
                    <div className=' activeEditor' onClick={editorOpenb} >
                        <h1>Click para editar <i class="fa-solid fa-pen"></i></h1>
                    </div>
                )
            }
            
        </div>
    )
}

