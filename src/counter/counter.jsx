import { Component } from "react";

import React, { useState, useEffect } from 'react';

export default function Counter({initialValue, step}) {
    const [counter, setCounter] = useState(initialValue);

    const handleClick = () => {
        // Increment the counter using the setCounter function
        setCounter(counter + step);
    };
    const handleReset = () => {
        // Increment the counter using the setCounter function
        setCounter(0);
    };

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={handleReset}>Reset!</button>
            {/* Display the current value of the counter */}
            We have {counter} clicks.<br />
        </div>
    );
}
/*
export default class counter extends Component{

    constructor(props){
        super(props)
        this.state ={counter:0
        }
    }
    componentDidMount(){
        // eslint-disable-next-line no-labels, no-unused-expressions
        this.interval = setInterval(() => {
            this.setState(prevState => {
                console.log(prevState);
                return { counter: prevState.counter + 1 };
            });
        }, 1000);
    
       
    }
    render(){
        return  <div>
            we have {this.state.counter} s
        </div>
    }
}*/