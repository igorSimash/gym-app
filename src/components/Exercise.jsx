import React from 'react';
import classes from "./Exercise.module.css"


const Exercise = ({date, exercise, reps, sumKg}) => {
    return (
        <div className={classes.result}>
            <div className={classes.container}>
                <div>Дата</div>
                <div>{date}</div>
            </div>
            <div className={classes.container}>
                <div>Назва</div>
                <div>{exercise}</div>
            </div>
            <div className={classes.container}>
                <div>Підходи</div>
                <div>{reps}</div>
            </div>
            <div className={classes.container}>
                <div>Сумарна маса</div>
                <div>{sumKg}</div>
            </div>
        </div>
    );
};

export default Exercise;