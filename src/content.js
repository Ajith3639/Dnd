import React, { useState,useEffect} from "react";
import Element from "./element.js";
import { useDrop } from "react-dnd";
import "./content.css";
import ReactFlow, { removeElements, addEdge } from "react-flow-renderer";

const notes = [
  {
    id: 1,

    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },
  {
    id: 2,
    data: { label: "Default node" },
    position: { x: 250, y: 25 },
  },
  {
    id: 3,
    data: { label: "second Node" },
    position: { x: 250, y: 25 },
  },
];
function Content() {

  const [boards, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "text",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

   const addImageToBoard = (id) => { 
    const pictureList = notes.filter((note) => id === note.id);
    setBoard((boards) => [...boards, pictureList[0]]);
    console.log(boards);
  };

  

  const onElementsRemove = (elementsToRemove) =>
    setBoard((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => {
    
    setBoard((els) => {
      addEdge(params, els);
    });
  };


 


  return (
    <div className="main">
      <div className="Content">
        <h3>Components</h3>
        {notes.map((note) => {
          return <Element name={note.data.label} id={note.id} />;
        })}
      </div>

      <div className="Board" ref={drop} style={{ height: 300 }}>
      {boards.map((board)=>{
         return <ReactFlow
          elements={boards}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          deleteKeyCode={46}
        />
      })}
       
      </div>
    </div>
  );
}

export default Content;
