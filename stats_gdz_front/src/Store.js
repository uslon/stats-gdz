import { connect } from 'react-redux';
import {createStore} from 'redux'
import {act} from "@testing-library/react";


function tasksReducer(state, action) {
    switch (action.type) {
       case 'UPDATE':{
            console.log('inside taskReducer')
            let newState = action.tasks.data;
            console.log(newState);
            return newState;
       }
       default:{
           return state;
       }
  }
}

const initialTasks = [
    {
        "task_id": 104,
        "solution": "Считайте статистику."
    },
    {
        "task_id": 202,
        "solution": "Считайте статистику."
    },
    {
        "task_id": 302,
        "solution": "Считайте статистику."
    },
    {
        "task_id": 401,
        "solution": "Считайте статистику."
    },
    {
        "task_id": 405,
        "solution": "Считайте статистику."
    },
];

function updater() {
    fetch('http://127.0.0.1:8000/gdz/tasks/').then(data=>data.json()).then(data=>store.dispatch({type:'UPDATE', tasks: {data}}));
}

const store = createStore(tasksReducer, initialTasks);
updater();


export default store;
