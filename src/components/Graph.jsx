import React, {useEffect, useState} from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import {Line} from "react-chartjs-2";
import {getExercise} from "../utils/Userbase";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const Graph = ({exercise, muscle}) => {
    const [state, setState] = useState([])

    useEffect(() => {
        getExercise().then(r => setState(r))
    }, [])

    let graphData = []

    state.filter((item) => item.item.exercise === exercise).map((item) =>
        graphData.push({
            kg: item.item.maxKg,
            date: `${new Date(item.item.date).getFullYear()}-${new Date(item.item.date).getMonth() + 1}-${new Date(item.item.date).getDate()}`
        })
    )
    graphData.sort((c, b) => {
        return new Date(c.date) - new Date(b.date);
    })

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Прогрес',
            },
        },
    };
    const data = {
        labels: graphData.map((item) => item.date),
        datasets: [
            {
                label: exercise,
                data: graphData.map((item) => item.kg),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    return (
        <div className={'graph'}>
            <Line className={'flex'} options={options} data={data}/>
        </div>
    );
};

export default Graph;