import React, { useEffect } from "react";
import axios from "axios";
import "./Expense2.css"
function Expense2() {
  const [Data, SetData] = React.useState({
    Expense: "",
    Amount: "",
    Description: "",
    Transaction: "Credit",
  });

  const [ans, setAns] = React.useState([]);
  const [update, doUpdate] = React.useState(false);
  const [UpdateId,SetUpdateId]=React.useState(false)

  const HandleChange = (e) => {
    console.log("Event", e.target.name, e.target.value);
    SetData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = (e) => {
    console.log(Data);
    axios
      .post("http://localhost:7000/Expense/PostdbExpense", Data)
      .then((res) => {
        console.log("Response", res.data);
        SetData(' ')
        Get();
      })
      .catch((err) => {
        console.log("Error", err);
      });
      alert('Are you sure you want to post this data?')
  };

  function Get() {
    axios
      .get("http://localhost:7000/Expense/GetdbExpense")
      .then((res) => {
        console.log(res.data);
        setAns(res.data.Data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  const HandlePut = (id,e) => {
    console.log(Data);
    axios
      .put(`http://localhost:7000/Expense/UpdatedExpense?id=${id}`, Data)
      .then((res) => {
        console.log(res.data);
console.log('Data',id)
SetData({
  Expense: "",
    Amount:  "",
    Description: "",
    Transaction: "Credit",
})
        Get();
      })
      .catch((err) => {
        console.log("Error", err);
      });
       alert('Are you sure you want to UPDATE this data?')
       SetUpdateId(null)
  };

  const HandleDelete = (id) => {
    console.log(Data, id);
    axios
      .delete(`http://localhost:7000/Expense/DeletedbExpense?id=${id}`)
      .then((res) => {
        console.log("Data Deleted");
        Get();
        console.log(res.data);
        doUpdate(!update);
      })
      .catch((err) => {
        console.log("Error", err);
      });
      alert('Are you sure you want to DELETE this data?')
  };

  useEffect(() => {
    Get();
  }, []);

  return (
    <div className="expense-container">
      <center>
        <div>
          {" "}
          <h1>EXPENSE TRACKER</h1>
        </div>

        <label>
          <b>Expense</b>
        </label>
        <input
          name="Expense"
          value={Data.Expense ? Data.Expense : ""}
          onChange={HandleChange}
        />
        <br></br>
        <br></br>

        <label>
          <b>Amount</b>
        </label>
        <input
          name="Amount"
          value={Data.Amount ? Data.Amount : ""}
          onChange={HandleChange}
        />
        <br></br>
        <br></br>

        <label>
          <b>Transaction</b>
        </label>
        <select name="Transaction" onChange={HandleChange} value={Data.Transaction}>
          <option name="Transaction" value="Credit" selected="default">
            Credit
          </option>
          <option name="Transaction" value="Debit">
            Debit
          </option>
        </select>
        <br></br>
        <br></br>

        <label>
          <b>Description</b>
        </label>
        <input
          name="Description"
          value={Data.Description ? Data.Description : ""}
          onChange={HandleChange}
        />
        <br />
        <br />

        <button onClick={()=>{
          if(UpdateId)
          {
            HandlePut(UpdateId)
          }
          else{
            HandleSubmit();
          }
        }} className="btn btn-warning">
          {UpdateId?"Save Update":"Post"}
        </button>
        <br />
        <br />

        <table border={9} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>Expense</th>
              <th>Amount</th>
              <th>Transaction</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {ans &&
              ans.map((val) => (
                <tr>
                  <td>{val.Expense}</td>
                  <td>{val.Amount}</td>
                  <td>{val.Transaction}</td>
                  <td>{val.Description}</td>
                  <div className="action-buttons">
<button
                    class="btn btn-success"
                    onClick={() => {
                      SetUpdateId(val._id);
                      SetData(val)
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      HandleDelete(val._id);
                    }}
                    class="btn btn-info"
                  >
                    Delete
                  </button>

                  </div>
                  
                </tr>
              ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Expense2;
