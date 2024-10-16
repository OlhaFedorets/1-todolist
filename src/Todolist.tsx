import React, {useState} from 'react';
import {FilterTypes} from "./App";

type Props = {
    title: string
    tasks: Task[]
    removeTask: (taskId: number) => void
    // filterTasks: (filterValue: FilterTypes) => void
}

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = ({title, tasks, removeTask}: Props) => {

    const [valueForFilter, setValueForFilter] = useState('All');

    const filterTasks = (filterValue: FilterTypes) => {
        setValueForFilter(filterValue)
    }

    const filteredTasks = () => {
        // let durshlag = tasks;
        // if (valueForFilter === 'Active') durshlag = tasks.filter((el) => !el.isDone)
        // if (valueForFilter === 'Completed') durshlag = tasks.filter((el) => el.isDone)
        // return durshlag


        // то же самое через switch
        let durshlag = tasks;
        switch (valueForFilter) {
            case 'Active': {
                return durshlag = tasks.filter((el) => !el.isDone)
            }
            case 'Completed': {
                return durshlag = tasks.filter((el) => el.isDone)
            }
        }
        return durshlag

    }

    const funCompleted = filteredTasks()


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {
                tasks.length === 0
                    ? <p>EMPTY</p>
                    : <ul>
                        {funCompleted.map((task) => {
                            return (
                                <li key={task.id}>
                                    <button onClick={() => removeTask(task.id)}>x</button>
                                    <input type="checkbox" checked={task.isDone}/>
                                    <span>{task.title}</span>
                                </li>
                            )
                        })}
                    </ul>
            }

            <div>
                <button onClick={() => filterTasks('All')}>'All'</button>
                <button onClick={() => filterTasks('Active')}>'Active'</button>
                <button onClick={() => filterTasks('Completed')}>'Completed'</button>
            </div>
        </div>
    )
}