import React from 'react'
import { ToDo } from './ToDo'

export const TableToDo = (props) => {
    const { tasks } = props
    return(
        <div>
            <h1>TableToDo</h1>
                <div>
                    <ul>
                        {tasks ? (
                            tasks.map((todo, index) =>{
                                return (
                                    <ToDo todo = {todo} index = {index}></ToDo>
                                )
                            })
                        ):('')}
                    </ul>
                </div>
        </div>
    )
}