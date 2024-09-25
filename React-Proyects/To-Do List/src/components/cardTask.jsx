import React, { useState, useEffect, useRef } from 'react';
import { data } from '../data/data.js';
import { fetchData } from '../api/callData.js';
import './cardsTask.css';

export const CardContainer = ({ OnpressAction, dataActive }) => {
    const [dataTask, setDataTak] = useState([]);
    const [presionadoStates, setPresionadoStates] = useState({});
    const [prioriy, Setprioriy] = useState([]);
    const timeoutRefs = useRef({});

    useEffect(() => {
        FechElements();
    }, [OnpressAction]);

    useEffect(() => {
        setOptionPriority();
    });

    const FechElements = async () => {
        const response = await fetchData(data);
        setDataTak(response);
        const initialStates = {};
        response.forEach((_, index) => {
            initialStates[index] = true;
        });
        setPresionadoStates(initialStates);
    };





    const handleMouseUp = (index) => {
        clearTimeout(timeoutRefs.current[index]);
    };

    const handleMouseDown = (index) => {
        timeoutRefs.current[index] = setTimeout(() => {
            setPresionadoStates((prevState) => ({
                ...prevState,
                [index]: !prevState[index]
            }));
        }, 1000);
    };

    const editorOpenb = (index) => {
        const dataActive = dataTask[index];
        setPresionadoStates((prevState) => ({
            ...prevState,
            [index]: true
        }));
        OnpressAction(true, dataActive);
    };

    const HandleDeleteCard = (index) => {
        const updatedDataTask = dataTask.filter((_, i) => i !== index);
        setDataTak(updatedDataTask);
        setOptionPriority(updatedDataTask);
    };

    const setOptionPriority = (tasks = dataTask) => {
        const priorities = tasks.map((item) => {
            if (item.Priority === 'Alta' || item.Priority === 'Media' || item.Priority === 'Baja') {
                return item.Priority;
            }
            return null;
        });
        Setprioriy(priorities);
    };

    return (
        <>
            {dataTask.map((item, index) => (
                <div
                    className='container-task'
                    onMouseDown={() => handleMouseDown(index)}
                    onMouseUp={() => handleMouseUp(index)}
                    key={index}
                >
                    {presionadoStates[index] ? (
                        <>
                            <div className='superior-info' key={index} id={index}>
                                <div className='title-task'>
                                    <p><b>{item.Title}</b></p>
                                </div>
                                <hr />
                                <p className='p-ry'>priority 
                                    {
                                    prioriy[index] === 'Alta' ? (
                                        <div className='circlePrior red'></div>
                                    ) : prioriy[index] === 'Media' ? (
                                        <div className='circlePrior orange'></div>
                                    ) : prioriy[index] === 'Baja' ? (
                                        <div className='circlePrior green'></div>
                                    ) : null
                                    }
                                </p>
                                <div className='checker'>
                                    <i className="fa-regular fa-circle" onClick={() => HandleDeleteCard(index)}></i>
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
                        <div className='activeEditor' onClick={() => editorOpenb(index)}>
                            <h1>Click para editar <i className="fa-solid fa-pen"></i></h1>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};