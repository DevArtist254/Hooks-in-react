import React, { useState } from "react";

function App() {
  const [firstName, setFName] = useState("");
  const [secondName, setSName] = useState("");

  function updateFName(e) {
    setFName(e.target.value);
  }

  function updateSName(e) {
    setSName(e.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {secondName}
      </h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={updateFName} />
        <input name="lName" placeholder="Last Name" onChange={updateSName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
