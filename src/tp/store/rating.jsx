export default function Rating({count,rate}){
    return <>
    <span
        className="badge rounded-pill text-bg-primary"
        >{rate}({count})</span>
    
    </>
}