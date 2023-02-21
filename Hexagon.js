import React from "react";
import { Component } from "react";
const L=5;
class Hexagon extends React.Component{
    render(){
        return(
            <div>
            <h2>Perimeter of Hexagon</h2>
            <h3>Formula:6*L</h3>
            <h4>L : {L}</h4>
            <p>Ans: {6*L}</p>            
            </div>
        );
    }
}
export default Hexagon;