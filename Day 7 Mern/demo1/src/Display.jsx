import { useContext } from "react";
import { allDates } from "./App";
import Display1 from "./Display1";

function Display() {
  const { name, arr, person, receive } = useContext(allDates);

  const mydata = "im from display child to parent";

  return (
    <>
      <h2>Hello {name}!!</h2>
      <h2>{arr}</h2>

<h2>Array Elements</h2>
      <ul>
 {arr.map((d, ind) => (
          <li key={ind}>{d}</li>
        ))}
      </ul>

      <h2>{person.name1} {person.dept}</h2>

      <h2>I'm from Display</h2>
      <button onClick={() => receive(mydata)}>send to parent</button>

      <Display1 />
    </>
  );
}

export default Display;
