
import { useContext } from "react"
import { myContext } from "./contextprovider"



const bhopal=()=>{
    const{val}=useContext(myContext);
    return(
        <>
        <h1>another component:{val}</h1>
        </>
    );
}
export default bhopal;