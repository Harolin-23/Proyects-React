import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { data } from '../data/data.js';
import { fetchData } from '../api/callData.js';
import './cardsTask.css';

const Card = ({ item, index, OnpressAction, handleSwipe, handleMouseDown, handleMouseUp, presionadoStates, deleteConfirmStates }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(index),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div
      {...handlers}
      className='container-task'
      onMouseDown={() => handleMouseDown(index)}
      onMouseUp={() => handleMouseUp(index)}
      key={index}
      id={index}
    >
      {presionadoStates[index] ? (
        <>
          <div className='superior-info'>
            <div className='title-task'>
              <p><b>{item.Title}</b></p>
            </div>
            <hr />
            <p>priority <i className="fa-solid fa-circle"></i></p>
            <div className='checker'>
              <i className="fa-regular fa-circle"></i>
            </div>
          </div>
          <div className='bottom-info'>
            <div className='more-info'>
              <p>{item.Description}</p>
            </div>
            <div className='especifications'>
              <p>Fecha limite: <b>{item.TimeFinal}</b></p>
            </div>
            <div className='time'>
              <p>{item.TimeAdded}<b><i className="fa-regular fa-clock"></i></b></p>
            </div>
          </div>
        </>
      ) : (
        <div className='activeEditor' onClick={() => OnpressAction(true)}>
          <h1>Click para editar <i className="fa-solid fa-pen"></i></h1>
        </div>
      )}
      {deleteConfirmStates[index] && (
        <div className='deleteConfirm'>
          <p>Desliza de nuevo para eliminar</p>
        </div>
      )}
    </div>
  );
};

export const CardContainer = ({ OnpressAction }) => {
  const [dataTask, setDataTak] = useState([]);
  const [presionadoStates, setPresionadoStates] = useState({});
  const [deleteConfirmStates, setDeleteConfirmStates] = useState({});
  const timeoutRefs = useRef({});

  useEffect(() => {
    const FechElements = async () => {
      const response = await fetchData(data);
      setDataTak(response);
      const initialStates = {};
      response.forEach((_, index) => {
        initialStates[index] = true;
      });
      setPresionadoStates(initialStates);
    };

    FechElements();
  }, [OnpressAction]);

  const handleMouseDown = (index) => {
    timeoutRefs.current[index] = setTimeout(() => {
      setPresionadoStates((prevState) => ({
        ...prevState,
        [index]: !prevState[index]
      }));
    }, 1000);
  };

  const handleMouseUp = (index) => {
    clearTimeout(timeoutRefs.current[index]);
  };

  const handleSwipe = (index) => {
    if (deleteConfirmStates[index]) {
      setDataTak((prevTasks) => prevTasks.filter((_, i) => i !== index));
      setDeleteConfirmStates((prevState) => {
        const newState = { ...prevState };
        delete newState[index];
        return newState;
      });
    } else {
      setDeleteConfirmStates((prevState) => ({
        ...prevState,
        [index]: true
      }));
    }
  };

  return (
    <>
      {dataTask.map((item, index) => (
        <Card
          item={item}
          index={index}
          OnpressAction={OnpressAction}
          handleSwipe={handleSwipe}
          handleMouseDown={handleMouseDown}
          handleMouseUp={handleMouseUp}
          presionadoStates={presionadoStates}
          deleteConfirmStates={deleteConfirmStates}
        />
      ))}
    </>
  );
};