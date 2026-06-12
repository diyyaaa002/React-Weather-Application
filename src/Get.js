import React, { useState } from "react";
import axios from "axios";
import './Get.css'

function Get() {
  const [data, setData] = useState([]);
  const handleClick = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
      console.log(res.data)
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Get Product</button>
      {data.map((item) => {
        return <div id='mydiv'>{item.title}</div>;
      })}
    </div>
  );
}
export default Get;
