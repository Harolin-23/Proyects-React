import React, { useState, useEffect, useRef } from 'react';
import { data } from '../data/data.js';
import { fetchData } from '../api/callData.js';
import './cardsTask.css';

export const CardContainer = ({ OnpressAction }) => {
    const [dataTask, setDataTak] = useState([]);
    const [presionadoStates, setPresionadoStates] = useState({});
    const timeoutRefs = useRef({});

    const handleMouseDown = (index) => {
        timeoutRefs.current[index] = setTimeout(() => {
            setPresionadoStates((prevState) => ({
                ...prevState,
                [index]: !prevState[index]
            }));
        }, 1000);
    };

    const FechElements = async () => {
        const response = await fetchData(data);
        setDataTak(response);
        // Initialize presionadoStates with true for each item
        const initialStates = {};
        response.forEach((_, index) => {
            initialStates[index] = true;
        });
        setPresionadoStates(initialStates);
    };

    useEffect(() => {
        FechElements();
    }, [OnpressAction]);

    const handleMouseUp = (index) => {
        clearTimeout(timeoutRefs.current[index]);
    };

    const editorOpenb = (index) => {
        setPresionadoStates((prevState) => ({
            ...prevState,
            [index]: true
        }));
        OnpressAction(true);
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
                        <div className='activeEditor' onClick={() => editorOpenb(index)}>
                            <h1>Click para editar <i className="fa-solid fa-pen"></i></h1>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};
