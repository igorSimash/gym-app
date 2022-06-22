import React, {useState} from 'react';
import MuscleSelect from "../UI/MuscleSelect";
import {muscles, exercises} from "../utils/GymObjects";
import ExerciseSelect from "../UI/ExerciseSelect";
import {endExercise, exit, signIn, signUp} from "../utils/Userbase";

const NewTraining = () => {
    const [date, setDate] = useState('');
    const [muscleType, setMuscleType] = useState('');
    const [exercise, setExercise] = useState('');
    const [kilograms, setKilograms] = useState('');
    const [reps, setReps] = useState('');
    const [counter, setCounter] = useState(0);
    const [currKilograms, setCurrKilograms] = useState('')
    const [sets, setSets] = useState([]);
    const [sumKg, setSumKg] = useState(0);
    const [maxKg, setMaxKg] = useState('0');


    const addSet = () => {
        if (reps > 0 && kilograms > 0) {
            const set = `${parseFloat(kilograms)}x${parseInt(reps)}`;
            setCurrKilograms(kilograms)
            setSets([...sets, set]);
            setReps('');
            setKilograms('');
            setCounter(counter + 1)
            setSumKg(sumKg + (parseFloat(kilograms) * parseInt(reps)))
            if (parseFloat(kilograms) > parseFloat(maxKg))
                setMaxKg(kilograms)
        }
    }

    const endSet = async () => {
        endExercise(date, exercise, muscleType, sets, sumKg, maxKg);
        setDate(null)
        setMuscleType(null)
        setExercise(null)
        setSets([])
    }

    return (
        <div>
            {/*<button onClick={exit}>ex</button>*/}
            {/*<button onClick={signIn}>sign</button>*/}
            {/*<button onClick={signUp}>signUp</button>*/}
            <div className={'all-inputs'}>
                <div className="date-container container">
                    <label>Дата:</label>
                    <input onChange={(e) => setDate(e.target.valueAsDate)} type="date"
                           min="2021-01-01"/>
                </div>

                {
                    date && (
                        <div className="muscle-container container">
                            <label>М'яз:</label>
                            <MuscleSelect value={muscleType} options={muscles} defaultOption={"Оберіть групу м'язів"}
                                          onChange={selected => setMuscleType(selected)}/>
                        </div>)
                }
                {
                    muscleType && date && (
                        <div className={"exercise-container container"}>
                            <label>Вправа:</label>
                            <ExerciseSelect muscle={muscleType} value={exercise}
                                            onChange={selected => setExercise(selected)}
                                            defaultOption={"Оберіть вправу"} options={exercises}/>
                        </div>
                    )
                }
            </div>
            {
                exercise && muscleType && date &&
                (<div>
                        <div className={"numbers-container"}>
                            <div className={"container kilograms-container"}>
                                <label>Кілограм</label>
                                <input value={kilograms} onChange={(e) => setKilograms(e.target.value)} type="number"
                                       min="0"
                                       step="5"/>
                            </div>
                            <div className={'container'}>
                                <label>Повторювань</label>
                                <input value={reps} onChange={(e) => setReps(e.target.value)} type="number" min="0"
                                       step="5"/>
                            </div>
                        </div>
                        <div className={"center-container"}>
                            <button onClick={addSet} className={"button"}>Додати підхід</button>
                        </div>
                    </div>
                )
            }
            {
                sets.length > 0 &&
                (<div>
                        <div className={'exercise-counter'}>
                            <div>Вже є {counter} {counter === 1 ? 'підхід' : counter > 4 ? 'підходів' : 'підходи'}</div>
                            <div className={"flex"}>
                                {
                                    sets.map(currSet =>
                                        <div className={'my-0 mx-3'} key={Math.random()}>{currSet}</div>
                                    )}
                            </div>
                        </div>

                        <div className={"center-container"}>
                            <button onClick={endSet} className={"button finish-button"}>Завершити тренування</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default NewTraining;