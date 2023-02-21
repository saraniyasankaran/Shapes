import React from "react";
import { Component } from "react";
const pi = 3.14;
const r = 6;
const h = 7;
class Cylinder extends React.Component{
    render(){
        return(
            <div className="Cylinder">
            <h2>Volume of Cylinder</h2>
            <h3>Formula:pi*r*r*h</h3>
            <h4>r : {r}, h : {h}</h4>
            <p>Ans: {pi*r*r*h}</p>            
            </div>
        );
    }
}
export default Cylinder;