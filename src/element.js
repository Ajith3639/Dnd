import React from 'react'
import './components.css'
import {useDrag} from "react-dnd"

function Element({name,id}) {
    const [{isDragging},drag] =useDrag(() =>
    ({
        type:"text",
        item: { id: id },
        collect: (monitor)=>({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <div className="contain">
         <h3 ref={drag} style={{border:isDragging?"5px solid pink":"0px"}}>{name}</h3></div>    
     
        )
}

export default Element
