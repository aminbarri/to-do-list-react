import { useState } from "react"
import event from "../events/events";

export default function Form(){

    const [name , setName] =useState();
    const [age , setAge] =useState();
    const handleNameInputChange=()=>{
        const name=document.querySelector('#name').value
        setName(name)
       

    }
    const handleAgeInputChange=()=>{
        
        const age=document.querySelector('#age').value
        setAge(age)

    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log({
             name,
             age
        })
    }
    return   <div>
        <form >
            <input type="text" id="name" onChange={handleNameInputChange}  placeholder="name"/>
           
            <input type="number" id="age" placeholder="age" onChange={handleAgeInputChange}/>
            <input type="submit" onClick={handleSubmit} />

        </form>
    </div>
}