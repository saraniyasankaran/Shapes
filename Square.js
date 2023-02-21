import React from "react";
import { Component } from "react";
const a=4;
class Square extends React.Component{
    render(){
        return(
            <div className="Square">
            <h2>Area of the Square</h2>
            <h3>Formula:a*a</h3>
            <h4>a: {a}</h4>
            <p>Ans: {a*a}</p>            
            </div>
        );
    }
}
export default Square;