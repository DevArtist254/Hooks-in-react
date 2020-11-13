import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lName: ""
  });

  function handleEvent(event) {
    //destr. the the event to handle
    const { value, name } = event.target;

    setFullName((prev) => {
      if (name === "fName") {
        return {
          fname: value,
          lName: prev.lName
        };
      } else if (name === "lName") {
        return {
          fname: prev.fname,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lName}
      </h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleEvent} />
        <input name="lName" placeholder="Last Name" onChange={handleEvent} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
