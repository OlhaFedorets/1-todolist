import React from 'react';
import {FilterTypes} from "./App";

type Props = {
    title: string
    tasks: Task[]
    removeTask: (taskId: number) => void
    filterTasks: (filterValue: FilterTypes) => void
}

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = ({ title, tasks, removeTask, filterTasks }: Props) => {

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {
                    !tasks.length
                    ? <div>EMPTY</div>
                    :tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <button onClick={()=>removeTask(task.id)}>x</button>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button onClick={()=>filterTasks('All')}>'All'</button>
                <button onClick={()=>filterTasks('Active')}>'Active'</button>
                <button onClick={()=>filterTasks('Completed')}>'Completed'</button>
            </div>
        </div>
    )
}