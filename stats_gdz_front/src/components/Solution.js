import React, {Component} from "react";
import '../styles/Solution.css'
import {Link} from "react-router-dom";

import {connect} from 'react-redux'

function Solution(props) {

    console.log(props)
    // const solution = 'Все задачи легко решаются, если внимательно прочитать методичку.'
    const {solution} = props.location
    console.log(solution)
    return (
        <div className='hintContainer'>
            <p>{solution}</p>
        </div>
    )

}

const mapStateToProps = function(state) {
    return {solution: state.solution};
}

const SolutionConnect = connect(mapStateToProps)(Solution)

export default SolutionConnect;