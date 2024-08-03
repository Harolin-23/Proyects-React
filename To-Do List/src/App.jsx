import { useState,useEffect } from 'react'

import './gen/app.css'
import {CardContainer} from './components/cardTask'

function App() {

  const [tasksButtonAdd, settasksButtonAdd] = useState(false)
  const [activedEd, SetactivedEd] = useState(false)

  const classButtonTask = `botton-add ${tasksButtonAdd ? "activeBt" : "disableBt"}`;

    const handleActiveForm = ()=>{
      settasksButtonAdd(true)
      SetactivedEd(false)
    }
    const handleDesActiveForm = ()=>{
      settasksButtonAdd(false)
    }

    useEffect(() => {
      if(activedEd) handleActiveForm();
    }, [activedEd]);

    const HandleDetectActiveComponent = (status)=>{
      SetactivedEd(status);
    }
  
  return (
    <>
      <div className='container-app'>
          <div className='sup-barr'>
             <h1>To-Do List  <i class="fa-solid fa-list-check"></i></h1>
          </div>
          <div className='bto-barr'>
            <CardContainer OnpressAction={HandleDetectActiveComponent}/>
            <CardContainer />
          </div>
         
      </div>
      <div className='box-rell'></div>

      <div className={classButtonTask} onClick={handleActiveForm}>
        {
          tasksButtonAdd ? (
              <div className='containerInput'>
    
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Description" />
                <input type="time" />
                <div className='p-select'>
                  <label>priority: </label>
                    <select name="color">
                      <option value="Alta"> <i class="fa-solid fa-circle"></i>Alta</option>
                      <option value="Media">Media<i class="fa-solid fa-circle organge"></i></option>
                      <option value="baja">baja <i class="fa-solid fa-circle green"></i></option>
                    </select>
                </div>
                <div className='btn-add' onClick={(e) => { e.stopPropagation(); handleDesActiveForm(); }}>
                  <p>Añadir tarea</p>
                </div>
               
              </div>
            ):( 
          <p>Add Task</p> )
        }
           
      </div>
    </>
  )
}

export default App
