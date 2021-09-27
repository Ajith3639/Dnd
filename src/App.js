
import './App.css';
import Content from './content';
import { useDrag,DndProvider } from 'react-dnd'
import {HTML5Backend} from "react-dnd-html5-backend"

function App() {
  const notes=["default1","default2","input1","input2"]
 
  return (
    <DndProvider backend={HTML5Backend}>
     <div className="App">
        

           <Content/>
          
           
         </div>
         
    </DndProvider>
   
  );

}

export default App;
