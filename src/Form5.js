import React, { useEffect } from "react";

function Form5() {
  const [Data, SetData] = React.useState({ Hobby: [], course: "" });

  const handleClick = (e) => {
    if (e.target.type === 'checkbox') {
      let arr = [...Data.Hobby]; // Create a copy of the Hobby array
      if (arr.includes(e.target.value)) {
        arr.splice(arr.indexOf(e.target.value), 1); // Remove hobby
      } else {
        arr.push(e.target.value); // Add hobby
      }
      SetData({ ...Data, Hobby: arr });
    } else if (e.target.type === 'radio') {
      SetData({ ...Data, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    const userItem = localStorage.getItem("UserItem");
    if (userItem) {
      SetData(JSON.parse(userItem)); // Sync with localStorage data
    }
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("UserItem", JSON.stringify(Data));
    console.log("Data submitted:", Data);
  };

  const handleClear = () => {
    localStorage.clear();
    SetData({ Hobby: [], course: "" }); // Reset the state
  };

  return (
    <div>
      <br />
      Course<br />
      <label>CSE</label>
      <input 
        type="radio" 
        name="course" 
        value="CSE" 
        onChange={handleClick} 
        checked={Data.course === 'CSE'} 
      />
      <label>IT</label>
      <input 
        type="radio" 
        name="course" 
        value="IT" 
        onChange={handleClick} 
        checked={Data.course === 'IT'} 
      />
      <br /><br />

      Hobby<br />
      <label>Drawing</label>
      <input 
        type="checkbox" 
        name="Hobby" 
        value="Drawing" 
        onChange={handleClick} 
        checked={Data.Hobby.includes('Drawing')} 
      />
      <label>Dancing</label>
      <input 
        type="checkbox" 
        name="Hobby" 
        value="Dancing" 
        onChange={handleClick} 
        checked={Data.Hobby.includes('Dancing')} 
      />
      <label>Singing</label>
      <input 
        type="checkbox" 
        name="Hobby" 
        value="Singing" 
        onChange={handleClick} 
        checked={Data.Hobby.includes('Singing')} 
      />
      <br />

      <button onClick={handleSubmit}>Submit Here</button>
      <br />
      <button onClick={handleClear}>Clear</button>
      <br />
    </div>
  );
}

export default Form5;
