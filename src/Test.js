import React, { useEffect } from "react";

function Test() {
  const [color, setcolor] = React.useState("blue");
  const [value, setValue] = React.useState("")

  useEffect(() => {
    console.log("UseEffect Called");
  });

// 1. No dep array -> renders on all changes
// 2. Empty array -> gets called when Renders 
// 3. Array with dep -> gets called (when Renders + when dep changes)

  return (
    <div>
        <input value={value} onChange={(e)=>{
            setValue(e.target.value);
        }} />
      <button onClick={() => setcolor("red")}>{color}</button>
    </div>
  );
}

export default Test;
