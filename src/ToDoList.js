import axios from "axios";
import React, { useEffect } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [Data, SetData] = React.useState({
    Title: " ",
    Description: " ",
    Status: " ",
    Priority: " ",
    Due_Date: " ",
    Created_At: " ",
  });
  const [Ans, SetAns] = React.useState([]);
  const [UpdateId, SetUpdateId] = React.useState(null);

  function Get() {
    axios
      .get("http://localhost:7000/ToDoList/GetdbToDoList")
      .then((res) => {
        const array = res.data.Data;
        SetAns(array);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  useEffect(() => {
    Get();
  }, []);

  const HandlePost = () => {
    axios
      .post("http://localhost:7000/ToDoList/PostdbToDoList", Data)
      .then((res) => {
        console.log("Post", res.data);
        Get();
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const HandleChange = (e) => {
    console.log("Data", e.target.name, e.target.value);
    SetData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const HandleUpdate = (id) => {
    axios
      .put(`http://localhost:7000/ToDoList/PutdbToDoList?id=${id}`, Data)
      .then((res) => {
        console.log("UPDATE DATA", res.data);
        Get();
       })
      .catch((err) => {
        console.log("Error", err);
      });
       SetUpdateId(null);
  };

  const HandleDelete = (id) => {
    axios
      .delete(`http://localhost:7000/ToDoList/DeletedbToDoList?id=${id}`)
      .then((res) => {
        console.log("Delete", res.data);
        Get();
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  return (
    <div className="todo-container">
      <center>
        <h1>TODO LIST</h1>
        <br />
        <label>Title</label>
        <input value={Data.Title} name="Title" onChange={HandleChange} />
        <br />
        <br />
        <label>Description</label>
        <input
          value={Data.Description}
          name="Description"
          onChange={HandleChange}
        />
        <br />
        <br />
        <label>Status</label>
        <select value={Data.Status} name="Status" onChange={HandleChange}>
          <option name="Status" value="Pending">
            Pending
          </option>
          <option name="Status" value="In Progress">
            In Progress
          </option>
          <option name="Status" value="Completed">
            Completed
          </option>
        </select>
        <br />
        <br />
        <label>Priority </label>
        High
        <input
          type="radio"
          value="High"
          name="Priority"
          onChange={HandleChange}
        />
        Medium
        <input
          type="radio"
          value="Medium"
          name="Priority"
          onChange={HandleChange}
        />
        Low
        <input
          type="radio"
          value="Low"
          name="Priority"
          onChange={HandleChange}
        />
        <br />
        <br />
        <label>Due_Date</label>
        <input
          type="date"
          value={Data.Due_Date}
          name="Due_Date"
          onChange={HandleChange}
        />
        <br />
        <br />
        <label>Created_At</label>
        <input
          type="date"
          value={Data.Created_At}
          name="Created_At"
          onChange={HandleChange}
        />
        <br />
        <br />
        <button
          className="btn btn-success"
          onClick={() => {
            if (UpdateId) {
              HandleUpdate(UpdateId);
            } else {
              HandlePost();
            }
          }}
        >
          {UpdateId ? "Update Task" : "Post Task"}
        </button>
        <br />
        <br />
        <table
          border={10}
          cellPadding={5}
          cellSpacing={5}
          class="table table-striped table-hover"
        >
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Due_Date</th>
              <th>Created_At</th>
            </tr>
          </thead>
          <tbody>
            {Ans &&
              Ans.map((val) => (
                <tr
                  className={
                    val.Status === "Pending"
                      ? "table-danger"
                      : val.Status === "Completed"
                      ? "table-success"
                      : val.Status === "In Progress"
                      ? "table-info"
                      : ""
                  }
                >
                  <td>{val.Title}</td>
                  <td>{val.Description}</td>
                  <td>{val.Status}</td>
                  <td>{val.Priority}</td>
                  <td>{val.Due_Date}</td>
                  <td>{val.Created_At}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        SetUpdateId(val._id);
                        SetData(val);
                      }}
                    >
                      Update Task
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        HandleDelete(val._id);
                      }}
                    >
                      Delete Task
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default ToDoList;
