
import React from "react";

function addBook() {
  console.log("Add book")
  alert("Add book")
}

const ViewBookYear = () => {
  return (
    <div className="ViewBookYear">
      <p>Book content!</p>
      {<button onClick={addBook}>Add book to reading list</button>}
    </div>
  );
};
export default ViewBookYear;