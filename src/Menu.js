import React, {useState} from 'react';
import NewTraining from "./components/NewTraining";
import History from "./components/History";
import Statistics from "./components/Statistics";

const Menu = () => {
    const [selectedPage, setSelectedPage] = useState('training')

    return (
        <div className={'main'}>
            <div className="selectors">
                <div className={`item training ${selectedPage === 'training' ? 'bg-purple-500' : 'bg-purple-700'}`}
                     onClick={(e) => setSelectedPage(e.target.classList[1])}
                >
                    Нове тренування
                </div>
                <div className={`item history ${selectedPage === 'history' ? 'bg-purple-500' : 'bg-purple-700'}`}
                     onClick={(e) => setSelectedPage(e.target.classList[1])}
                >
                    Історія
                </div>
                <div className={`item statistics ${selectedPage === 'statistics' ? 'bg-purple-500' : 'bg-purple-700'}`}
                     onClick={(e) => setSelectedPage(e.target.classList[1])}
                >
                    Статистика
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