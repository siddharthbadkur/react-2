import { createContext, useState } from "react";

const myContext=createContext();

const Contextprovider=({children})=>{
    const[val, setVal] =useState(0);
}
return(
    <>
    <myContextProvider value={{val,setval}}>
    {children}
    </myContextProvider>
    </>
);

export default Contextprovider;
export {myContext};



