import React from "react";
import '../styles/ParagraphItem.css'
import {Link} from "react-router-dom";
import Solution from "./Solution";

function ParagraphItem ({paragraph}) {
    const {title, tasksList} = paragraph;
    const [showTasks, setShowTasks] = React.useState(false)
    const [beforeHeader, setBeforeHeader] = React.useState('+')

    const onClick = ()=> {
        setShowTasks(!showTasks)
        setBeforeHeader(beforeHeader === '+' ? '-' : '+')
    }


    return (
        <div>
            <header className='header-container'>
                <div className='button-wrapper'>
                    <button className='show-hide-button' onClick={onClick}>{beforeHeader}</button>
                </div>
                <h2>{title}</h2>
            </header>
            <div>
                { showTasks ? Tasks({paragraph, tasksList}) : null }
            </div>
        </div>
    )
}

function Tasks ({paragraph, tasksList}) {
    console.log('entered tasks')

    const tasksButtons = []
    tasksList.forEach((elem)=>{
        console.log('Add solution')
        console.log(elem.solution)
        const currentButton = (<Link key = {elem.id} to={{pathname: '/solution/', solution: elem.solution}}>
                                    <button className='single-task'>
                                        {paragraph.id}.{elem.id}
                                    </button>
                               </Link>)
        tasksButtons.push(currentButton)
    })

    return (
        <div className='tasks-container'>
            {tasksButtons}
        </div>
    )
}


export default ParagraphItem;