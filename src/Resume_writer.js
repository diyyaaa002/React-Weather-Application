import React from 'react'
import axios from 'axios'
function Resume_writer() {
    const [file, setFile] = React.useState(null);

  const uploadFile = () => {
    const formData = new FormData();

    formData.append("myFile", file);
    console.log(file)
    axios
      .post("http://localhost:5000/upload", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div>
         <h1>AI Resume Analyzer</h1>
    <labeL>Upload your file</labeL>
      <input
        type="file"
       onChange={(e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  }}
      />

      <button onClick={uploadFile}>
        Upload Resume
      </button>
    </div>
  )
}

export default Resume_writer