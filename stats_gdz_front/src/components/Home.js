import React from "react";
import ReactDom from 'react-dom';

import ParagraphList from "./ParagraphList";
import ProposeSolutionItem from "./ProposeSolutionItem";


import {connect} from 'react-redux'
import store from "../Store";
import updater from "../Store"

function Home(props) {

    const tasksList = props.tasks
    console.log('Tasks list:')
    console.log(tasksList)

    return (
        <div className='mainContainer'>
            <ParagraphList tasksList={tasksList}/>
            <ProposeSolutionItem/>
        </div>
    )
}

const mapStateToProps = function(state) {
    return {tasks: state};
}

const TaskConnect = connect(mapStateToProps)(Home)

export default TaskConnect;