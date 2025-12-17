import { useParams } from "react-router-dom"

function User(){
    const data= useParams()
    return(
        <>
        
        <h1>im from user {data.a}</h1>
        </>
    )
}

export default User