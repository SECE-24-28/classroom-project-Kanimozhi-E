import { useRef, useState } from "react"

const Display2=()=>
{
const [myname,setName]=useState(" ")
const input=useRef()
const view=()=>
{
    console.log("the value is",input.current.value)
    setName(input.current.value)

}
//console.log("the value is",{myname})
return(
    <>
    <h1>im from display2 {myname}</h1>
    {/* <input type="text" value={myname} onChange={(e)=>{setName(e.target.value)}}></input> */}
    {/* <button onClick={()=>{setName("")}}>clear</button> */}
    <input type="text"ref={input}></input>
    <button onClick={view}>click</button>
    </>
)
}
export default Display2;