import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';


export type FilterTypes = 'All' | 'Active' | 'Completed'


function App() {
    const title = 'What to learn-1'

    // let tasks:Task[] = [
    //     {id: 1, title: 'HTML&CSS', isDone: true},
    //     {id: 2, title: 'JS', isDone: true},
    //     {id: 3, title: 'React', isDone: false},
    //     {id: 1, title: 'Redux', isDone: true},
    //     {id: 2, title: 'Typescript', isDone: false},
    //     {id: 3, title: 'RTX query', isDone: false},
    // ]

    //   покажи, положи и перерисуй
    let [tasks, setTasks] = useState([
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 2, title: 'JS', isDone: true},
            {id: 3, title: 'React', isDone: false},
            {id: 4, title: 'Redux', isDone: true},
            {id: 5, title: 'Typescript', isDone: false},
            {id: 6, title: 'RTX query', isDone: false},
        ]
    )

    const removeTask = (taskId: number) => {
        // tasks = tasks.filter((el) => el.id !== taskId)
        // setTasks(tasks)

        setTasks(tasks.filter((el) => el.id !== taskId))
    }

    // const [valueForFilter, setValueForFilter] = useState('All');
    //
    // const filterTasks = (filterValue: FilterTypes) => {
    //     setValueForFilter(filterValue)
    // }
    //
    // let durshlag = tasks;
    // if (valueForFilter === 'Active') durshlag = tasks.filter((el) => !el.isDone)
    // if (valueForFilter === 'Completed') durshlag = tasks.filter((el) => el.isDone)


    return (
        <div className="App">
            <Todolist
                title={title}
                tasks={tasks}
                removeTask={removeTask}
                // filterTasks={filterTasks}
            />
        </div>
    );
}

export default App;
