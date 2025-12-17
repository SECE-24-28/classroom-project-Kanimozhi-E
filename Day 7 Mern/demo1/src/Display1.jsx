import { useContext, useState } from "react";
import { allDates } from "./App";

function Display1() {

    const { name } = useContext(allDates);

    console.log("i am inside display ", name);

    const [myname, setname] = useState("shiva");
    console.log("Hello", myname);

    return (
        <>
            <h1>hello {myname}</h1>
            <button onClick={() => setname("varni")}>click here</button>
        </>
    );
}

export default Display1;
