import { useState } from "react"

const Display4=()=>{
    const[student,studentName]=useState({
        name:"shivaaa",
        gender:"female",
        mobile:1234567890
    })
    //console.log("the current state: ",{student})
    function updateName()
    {
        // studentName({name:"mani"})
        
        studentName((previousData)=>{
            console.log("........previous data",previousData)
            return({...previousData,name:"mani",mobile:2222222222})
        })
    }
    
    // const[name,setName]=useState("shiva")
    // const[gender,setGender]=useState("female")
    // const[num,setMobile]=useState(1999999999) i  this it is difficult to use for more data to overcome we create object

    return(
        <>
        <h1>name: {student.name}</h1>
        <h1>gender: {student.gender}</h1>
        <h1>mobile: {student.mobile}</h1>
        <button onClick={updateName}>Change the name</button>
        </>
    )



}
export default Display4