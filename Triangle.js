import React from "react";
import { Component } from "react";
import './index.css';

const base=10;
const height=7;

class Triangle extends React.Component{
    render(){
        return(
            <div class="triangle">
                <h2>Area of Triangle</h2>
                <h3>Formula:1/2*b*h</h3>
                <h4>Base:{base},Height:{height}</h4>
                <p>Ans:{1/2*base*height}</p>
            </div>
        );
}
}
export default Triangle;