import React from "react";
import { Component } from "react";
const a=5;
const b=6;
class Perimeter extends React.Component{
    render(){
        return(
            <div className="Perimeter">
            <h2>Perimeter of parallelogram</h2>
            <h3>Formula:2a+2b</h3>
            <h4>a : {a},b : {b}</h4>
            <p>Ans: {2*a+2*b}</p>            
            </div>
        );
    }
}
export default Perimeter;