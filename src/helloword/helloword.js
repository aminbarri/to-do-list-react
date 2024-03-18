export default function HelloWord({lastName}){
    console.log(); 
    const age= 20
 

 return ( <div>
       
            <h1>hello {lastName}
                 {age >=18 ?' adult' :' young'}  </h1>
                </div>)
    /*
   
    let isAdult=false
    if(age >= 18){
        isAdult=true}
        
    if(isAdult){
        return ( <div>
       
            <h1>hello {lastName}
                 adult </h1>
                </div>)
    }   
    else
    return ( <div>
       
        <h1>hello {lastName}
              younger </h1>
            </div>)
*/
       
   
}