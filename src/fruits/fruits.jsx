export default function Fruit({fruits}){
    const fruitsarr = function(){
        return fruits.map(function(fruit){
            return <li>{fruit}</li>
        })
    }
    return <>
    <br />
    <br />
    <br />
    <h1>Fruits:</h1>
    <ul>
        
        {fruitsarr()}
    </ul>
    </>
}