import React from "react";
import { Component } from "react";
const pi = 3.14;
const r = 6;
const h = 7;
class Cone extends React.Component{
    render(){
        return(
            <div className="Cylinder">
            <h2>Volume of Cone</h2>
            <h3>Formula:1/3*pi*r*r*h</h3>
            <h4>r : {r}, h : {h}</h4>
            <p>Ans: {1/3*pi*r*r*h}</p>            
            </div>
        );
    }
}
export default Cone;