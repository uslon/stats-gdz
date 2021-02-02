import React from "react";
import '../styles/ProposeSolutionItem.css'

function ProposeSolutionItem ({paragraphs}) {
    const handleClick = ()=>{
        console.log('Solution proposal\n')
    }

    return (
        <div className='wrapper'>
            <button className='button' onClick={handleClick}>{'Предложить решение'}</button>
        </div>
    )
}

export default ProposeSolutionItem;