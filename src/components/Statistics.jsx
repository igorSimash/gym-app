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
                    <label>Muscle:</label>
                    <MuscleSelect value={muscleType} options={muscles} defaultOption={"Choose muscle group"}
                                  onChange={selected => setMuscleType(selected)}/>
                </div>
                {
                    muscleType && <div className={"exercise-container container"}>
                        <label>Exercise:</label>
                        <ExerciseSelect muscle={muscleType} value={exercise} onChange={selected => setExercise(selected)}
                                        defaultOption={"Choose exercise"} options={exercises}/>
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