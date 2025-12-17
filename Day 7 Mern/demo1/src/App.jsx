import { createContext, useState } from "react";
import Display1 from "./Display1";
import Display from "./Display";

export const allDates = createContext();

function App() {
  const [mydata, setdata] = useState();

  var name = "aarthi";
  var ch = "aa";
  var arr = [22, 33, 44, 55];
  var person = {
    name1: "dhanu",
    dept: "ECE"
  };

  const receive = (d) => {
    console.log("i am inside app", d);
    setdata(d);
  };

  return (
    <allDates.Provider value={{ name, person, receive, arr }}>
      <h1>welcome</h1>
      <h1>welcome received from parent, {mydata}</h1>

      {/* <Display name={name} ch={ch} arr={arr} person={person} receive={receive}/> */}
      <Display />
    </allDates.Provider>
  );
}

export default App;
