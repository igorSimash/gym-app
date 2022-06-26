import React, {useEffect, useState} from 'react';
import Exercise from "./Exercise";
import {getExercise} from "../utils/Userbase";
import useSWR, { SWRConfig } from "swr";


const History = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        getExercise().then(r => setState(r))
    }, [])
    // const {data, error} = useSWR('', getExercise)
    // console.log(data);
    // if(error) return "Error";
    // if(!data) return "Loader";
    return (
        <div className={'history-result'}>
            {
                state.map((item, index) =>
                    <Exercise
                        key={index}
                        date={`${new Date(item.item.date).getFullYear()}-${new Date(item.item.date).getMonth() + 1}-${new Date(item.item.date).getDate()}`}
                        exercise={item.item.exercise} reps={item.item.sets + " "} sumKg={item.item.sumKg}/>)
            }
        </div>
    );
};

export default History;