import React from 'react';
import classes from "./MySelect.module.css";

const MuscleSelect = ({options, defaultOption, value, onChange,}) => {
    return (
        <select
            value={value}
            className={classes.muscleSelect}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value="">{defaultOption}</option>
            {options.map(option =>
                <option key={Math.random()} value={option.value}>{option.group}</option>
            )}
        </select>
    );
};

export default MuscleSelect;