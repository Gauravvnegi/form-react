// DisplayData.js
import React from "react";

const DisplayData = ({ data }) => {
  return (
    <div>
      <h2>Submitted Data:</h2>
      <p>First Name: {data.fName}</p>
      <p>Last Name: {data.lName}</p>
    </div>
  );
};

export default DisplayData; 
