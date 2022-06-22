import React from 'react';
import classes from "./MySelect.module.css";

const ExerciseSelect = ({options, defaultOption, value, onChange, muscle}) => {
    const items = [];

    for (const item of options) {
        if (item.group === muscle)
            item.name.map((exercise) => items.push(<option key={Math.random()} value={exercise}>{exercise}</option>))
    }

    return (
        <select
            value={value}
            className={classes.exerciseSelect}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value="">{defaultOption}</option>
            {
                items
            }
        </select>
    );
};

export default ExerciseSelect;