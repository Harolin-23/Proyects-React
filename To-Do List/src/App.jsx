import { useState } from 'react'

import './gen/app.css'
import {CardContainer} from './components/cardTask'

function App() {


  return (
    <>
      <div className='container-app'>
          <div className='sup-barr'>
             <h1>To-Do List  <i class="fa-solid fa-list-check"></i></h1>
          </div>
          <div className='bto-barr'>
            <CardContainer />
            <CardContainer />
          </div>
         
      </div>
      <div className='box-rell'></div>

      <div className='botton-add'>
              Añadir Tarea
      </div>
    </>
  )
}

export default App
