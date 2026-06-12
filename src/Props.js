import React from "react";

function Props({ ProductData }) {
  const ProductData = [
    { id: 1, Name: "Diya", Sem: 5 },
    { id: 2, Name: "Rahul", Sem: 6 },
    { id: 3, Name: "Anjali", Sem: 4 }
  ];
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Sem</th>
          </tr>
        </thead>
        <tbody>
          {ProductData.map((val) => (
            <tr key={val.Name}>
              <td>{val.Name}</td>
              <td>{val.Sem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Props;
