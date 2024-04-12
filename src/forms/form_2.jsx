import { useState } from "react"

export default function Form(){
    const [formvalues, setformvalues]  = useState({
        name:'',
        age:'',
        accept: false
    })
  


    const handleChange =(e)=>{
       
        //setinputname(document.querySelector('#name').value)
        const currentTarget = e.currentTarget
        const id = currentTarget.id
         let value =currentTarget.value
         if(currentTarget.type === 'checkbox'){
            value = currentTarget.checked
         }
        
         setformvalues(prevState =>{
            return {...prevState , ...{[id]: value}}
         })
         console.log(formvalues)
         

    }
    

    return <>
    <div className="container my-5">
        {JSON.stringify(formvalues) }
   
        <form >
            <div className="form-group">
                <label >name</label>
                <input type="text" id="name" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label >age</label>
                <input type="text" id="age" className="form-control" onChange={handleChange}/>

            </div>
            <div className="form-check">
                <label htmlFor="accept" >confirm</label>
                <input type="checkbox" id="accept" className="form-check-input" onChange={handleChange}/>
            </div>
            
            <div className="form-group">
                <button className="btn btn-primary">Save</button>
            </div>
           


        </form>
         </div>
    </>
}