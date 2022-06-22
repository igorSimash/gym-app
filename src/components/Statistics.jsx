import React, {useState} from 'react';
import Graph from "./Graph";

import {muscles, exercises} from "../utils/GymObjects";
import ExerciseSelect from "../UI/ExerciseSelect";
import MuscleSelect from "../UI/MuscleSelect";


const Statistics = () => {
    const [muscleType, setMuscleType] = useState('');
    const [exercise, setExercise] = useState('');

    return (
        <div>
            <div className={'statistics-input'}>
                <div className="muscle-container container">
                    <label>М'яз:</label>
                    <MuscleSelect value={muscleType} options={muscles} defaultOption={"Оберіть групу м'язів"}
                                  onChange={selected => setMuscleType(selected)}/>
                </div>
                {
                    muscleType && <div className={"exercise-container container"}>
                        <label>Вправа:</label>
                        <ExerciseSelect muscle={muscleType} value={exercise} onChange={selected => setExercise(selected)}
                                        defaultOption={"Оберіть вправу"} options={exercises}/>
                    </div>
                }
            </div>
            {
                exercise &&
                <Graph exercise={exercise} muscle={muscleType}/>
            }
        </div>
    );
};

export default Statistics;