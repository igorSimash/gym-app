import React from 'react';
import Exercise from "./Exercise";
import {getExercise} from "../utils/Userbase";
import useSWR from "swr";
import Loader from "../UI/Loader";

const History = () => {
    const { data, error } = useSWR('exercise', getExercise)
    console.log(data);
    if(error) return "Error";
    if(!data) return <Loader/>;
    return (
        <div className={'history-result'}>
            {
                data.map((item, index) =>
                    <Exercise
                        key={index}
                        date={`${new Date(item.item.date).getFullYear()}-${new Date(item.item.date).getMonth() + 1}-${new Date(item.item.date).getDate()}`}
                        exercise={item.item.exercise} reps={item.item.sets + " "} sumKg={item.item.sumKg}/>)
            }
        </div>
    );
};

export default History;