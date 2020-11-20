import React from 'react'

export const ToDo = (props) => {
    const { todo, index } = props
    return (
        <div>
            <li key = {index} > {todo} </li>
        </div>
    )
}