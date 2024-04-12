import { Component } from "react";

import React, { useState, useEffect } from 'react';

export default function Counter({initialValue, step}) {
    const [counter, setCounter] = useState(initialValue);

    const [time, setTime] = useState(new Date());
    let timer =  null
    
    const handleClick = () => {
        // Increment the counter using the setCounter function
        setCounter(counter + step);
    };
    const handleReset = () => {
        // Increment the counter using the setCounter function
        setCounter(0);
    }; 
    useEffect (()=>{
        console.log('count changed')
        
    },[counter])

    useEffect (()=>{
        console.log('compenet mounted')
      console.log(time)
      timer= setInterval(()=>{
        setTime( new Date())
      },1000)

      return () =>{
        clearInterval(timer)
      }
    },[])

  

    return (
        <div>
            Date: <span>{time.toLocaleString()}</span>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={handleReset}>Reset!</button>
            
            We have {counter} clicks.<br />
        </div>
    );
}

/*export default class counter extends Component{

    constructor(props){
        super(props)
        this.state ={counter:0
        }
    }
    componentDidMount(){
        // eslint-disable-next-line no-labels, no-unused-expressions
        this.interval = setInterval(() => {
            this.setState(prevState => {
               
                return { counter: prevState.counter + 1 };
            });
        }, 1000);
    
       
    }
    componentDidUpdate(prevState){
       // console.log(prevState, this.state)
    }
    render(){
        return  <div>
            we have {this.state.counter} s
        </div>
    }
}*/