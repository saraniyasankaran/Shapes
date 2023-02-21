import React from "react";
import Circle from "./Circle";
import './index.css';
import Triangle from "./Triangle";
import Square from"./Square";
import Perimeter from "./Perimeter";
import Hexagon from "./Hexagon";
import Cylinder from "./Cylinder";
import Cone from "./Cone";
function App(){
  return(
    <div>
      <div className="shape">
        <div>
     <Circle/>
     </div>
     <div>
      <Triangle/>
     </div>
     <div>
      <Square />
     </div>
     <div>
      <Perimeter/>
     </div>
     </div>
     <div className="shape">
      <div>
        <Hexagon />
      </div>
      <div>
        <Cylinder/>
      </div>
      <div>
        <Cone/>
      </div>

     </div>
    </div>
  );

}
export default App;