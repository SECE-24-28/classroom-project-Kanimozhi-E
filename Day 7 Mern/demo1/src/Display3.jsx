import { useEffect, useState } from "react"

const Display3=()=>{
    const[myData,setData]=useState(100)

useEffect(()=>
{
    console.log("i am inside useEffect",{myData})
})
return(
    <>
    <h1> i am from display3</h1>
    <h2>the data:{myData}</h2>
    <button onClick={()=>{
        setData((t)=>t=t+1)
    }}>increment</button>

    </>
)
}
export default Display3