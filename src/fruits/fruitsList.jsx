import { useState } from "react"

export default function Fruit({fruits}){
    const [fruit ,setFruit] = useState('')
    const [fruitList, setFruitList] = useState([])
    const fruitsarr = ()=>{
       return fruitList.map(function(fruit,fruitkey){
            return <li key={fruitkey}>{fruit}</li>
        })
    }
    const handleInput =() =>{
        const fruitValue= document.querySelector('#fruit').value
        setFruit(fruitValue)
    }
    const handleAddfruit = (e)=>{
        e.preventDefault()
        setFruitList([...fruitList,fruit])
        
    }
    return <>
    <br />
    <br />
    <br />
    <span>
        <form >
            <input onChange={handleInput} type="text" id="fruit" />
            <input onClick={handleAddfruit} type="submit" value='add' />
        </form>
    </span>
    <h1>Fruits:</h1>
    <ul>
        
        {fruitsarr()}
    </ul>
    </>
}