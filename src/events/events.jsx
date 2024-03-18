export default function event(){
    const handleClick = () => {
        alert('hello');
    };
    
    return <div>
        <button onClick={handleClick}>
            click
        </button>
    </div>
}