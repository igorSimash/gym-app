import React, {useState} from 'react';
import NewTraining from "./components/NewTraining";
import History from "./components/History";
import Statistics from "./components/Statistics";
import {BiDumbbell} from "react-icons/bi"
import {FiClock} from "react-icons/fi";
import {ImStatsBars} from "react-icons/im"

const Menu = () => {
    const [selectedPage, setSelectedPage] = useState('training')

    return (
        <div className={'main'}>
            <div className="selectors">
                <div
                    className={`item ${selectedPage === 'training' ? 'text-white' : 'text-gray-300 opacity-70 hover:opacity-90'}`}>
                    <BiDumbbell className={'icon'}/>
                    <div
                        className={`training`}
                        onClick={(e) => setSelectedPage(e.target.classList[0])}
                    >
                        New workout
                    </div>
                </div>
                <div
                    className={`item ${selectedPage === 'history' ? 'text-white' : 'text-gray-300 opacity-50 hover:opacity-90'}`}>
                    <FiClock className={'icon'}/>
                    <div
                        className={`history`}
                        onClick={(e) => setSelectedPage(e.target.classList[0])}
                    >
                        History
                    </div>
                </div>
                <div
                    className={`item ${selectedPage === 'statistics' ? 'text-white' : 'text-gray-300 opacity-50 hover:opacity-90'}`}>
                    <ImStatsBars className={'icon'}/>
                    <div
                        className={`statistics`}
                        onClick={(e) => setSelectedPage(e.target.classList[0])}
                    >
                        Statistics
                    </div>
                </div>
            </div>
            <div className="screen">
                {selectedPage === 'training'
                    ? <NewTraining/>
                    : selectedPage === 'history'
                        ? <History/>
                        : <Statistics/>}
            </div>

        </div>
    );
};

export default Menu;