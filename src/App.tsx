import React from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { Task } from './Todolist';

function App() {
    const title1 = 'What to learn-1'
    const title2 = 'What to learn-2'
    const title3 = 'What to learn-3'

    const tasks1:Task[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]

    const tasks2:Task[] = [
        {id: 1, title: 'Hello world', isDone: true},
        {id: 2, title: 'I am happy', isDone: false},
        {id: 3, title: 'Yo', isDone: false},
    ]

    const tasks3:Task[] = []

    return (
        <div className="App">
            <Todolist title={title1} tasks={tasks1}/>
            <Todolist title={title2} tasks={tasks2}/>
            <Todolist title={title3} tasks={tasks3}/>
        </div>
    );
}

export default App;
