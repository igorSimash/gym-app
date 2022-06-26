import React from 'react';
import classes from "./Exercise.module.css"


const Exercise = ({date, exercise, reps, sumKg}) => {
    return (
        <div className={classes.result}>
            <div className={classes.container}>
                <div>Date</div>
                <div className={'text-red-600 underline'}>{date}</div>
            </div>
            <div className={classes.container}>
                <div>Exercise</div>
                <div className={'text-right text-red-600'}>{exercise}</div>
            </div>
            <div className={classes.container}>
                <div>Sets</div>
                <div className={'text-red-600'}>{reps}</div>
            </div>
            <div className={classes.container}>
                <div>Sum weight</div>
                <div className={'text-red-600'}>{sumKg}</div>
            </div>
        </div>
    );
};

export default Exercise;