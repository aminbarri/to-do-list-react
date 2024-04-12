import { Component } from "react";
import HelloWord from "../helloword/helloword";

export default class ToggleName extends Component{
    constructor(props){
        super(props)
        this.state={
            displayName:true
        }
    }
    toggleNameChange = ()=>{
        this.setState(prevState =>{
            return {
                displayName: !prevState.displayName
            }
        })
    }
    render(){
        return <div><button onClick={this.toggleNameChange}>Toggle Name</button>
            {this.state.displayName == true ?
              <HelloWord lastName='amin' />
             :undefined
            }
           
             
        </div>
    }
}