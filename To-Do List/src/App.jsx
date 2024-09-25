import { useState, useEffect } from 'react';
import './gen/app.css';
import { CardContainer } from './components/cardTask';
import { addTask } from './api/addData.js';

function App() {
  const [tasksButtonAdd, settasksButtonAdd] = useState(false);
  const [activedEd, SetactivedEd] = useState(false);
  const [dataF, SetDataF] = useState({
    Title: '',
    Description: '',
    TimeFinal: '',
    Priority: '',
  });

  const classButtonTask = `botton-add ${tasksButtonAdd ? "activeBt" : "disableBt"}`;

  const handleActiveForm = () => {
    settasksButtonAdd(true);
    SetactivedEd(false);
  };

  const handleDesActiveForm = () => {
  
    if (!activedEd) {
      addTask(dataF); 
    }
    settasksButtonAdd(false);
    SetactivedEd(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetDataF((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const HandleDetectActiveComponent = (status, activeData) => {
    SetactivedEd(status);
    if (status) {
      SetDataF(activeData);
    }
  };

  

  useEffect(() => {
    if (activedEd) handleActiveForm();
  }, [activedEd]);

  return (
    <>
      <div className='container-app'>
        <div className='sup-barr'>
          <h1>To-Do List <i className="fa-solid fa-list-check"></i></h1>
        </div>
        <div className='bto-barr'>
          <CardContainer OnpressAction={(status, activeData) => {
            HandleDetectActiveComponent(status, activeData);
          }} />
        </div>
      </div>
      <div className='box-rell'></div>
      <div className={classButtonTask} onClick={handleActiveForm}>
        {tasksButtonAdd ? (
          <div className='containerInput'>
            <input type="text" name="Title" placeholder="Title" value={dataF.Title} onChange={handleChange} />
            <input type="text" name="Description" placeholder="Description" value={dataF.Description} onChange={handleChange} />
            <input type="time" name="TimeFinal" value={dataF.TimeFinal} onChange={handleChange} />
            <div className='p-select'>
              <label>priority: </label>
              <select name="Priority" value={dataF.Priority} onChange={handleChange}>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
              </select>
            </div>
            <div className='btn-add' onClick={(e) => { e.stopPropagation(); handleDesActiveForm(); }}>
              <p>Añadir tarea</p>
            </div>
          </div>
        ) : (
          <p>Add Task</p>
        )}
      </div>
    </>
  );
}

export default App;
