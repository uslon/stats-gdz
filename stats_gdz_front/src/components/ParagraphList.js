import React from "react";
import ParagraphItem from "./ParagraphItem";

function ParagraphList (props) {
    let paragraphList = []
    let titlesDict = {}
    let problemsDict = {}

    const addTask = (element) => {
        const {task_id, solution} = element
        const paragraph_id = Math.floor(task_id / 100)
        const task = task_id % 100
        if (!(paragraph_id in titlesDict)) {
            titlesDict[paragraph_id] = 'Задание ' + paragraph_id
            problemsDict[paragraph_id] = [{id: task, key: task, title: task, solution: solution}]
        } else {
            problemsDict[paragraph_id].push({id: task, key: task, title: task, solution: solution})
        }
    }

    const {tasksList} = props
    tasksList.forEach(addTask)

    console.log(titlesDict)
    console.log(problemsDict)
    // titlesDict.forEach(addToList)

    for (let key in titlesDict) {
        paragraphList.push({id: parseInt(key, 10),
                title: titlesDict[key], tasksList: problemsDict[key]})
    }

    return (
        <div>
            {paragraphList.map(paragraph=><ParagraphItem key = {paragraph.id} paragraph = {paragraph}/>)}
        </div>
    )
}

export default ParagraphList;