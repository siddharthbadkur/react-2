
import { useContext } from "react";
import { myContext } from "./ countercontext";
import  bhopal from"./bhopal";
const Cybrom=()=>{
    const {val, setVal}=useContext(myContext);
    return(

        <>  
<h1> my counter program</h1>

<button onClick={()=> {setVal(val+10)}}>increment by 10</button>
  Count:{val}
 <button onClick={()=> {setVal(val-10)}}>decrementby 10</button>
<bhopal/>

        </>
    );
 }

 export default Cybrom;