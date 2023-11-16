
import React, {useState, useEffect}  from "react";

function addBook() {
  console.log("Add book")
  alert("Add book")
}

const ViewBookYear = (props) => {
  const [data, setData] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users"; // TODO: Remove, connect to API instead

  const fetchInfo = () => { 
    return fetch(url) 
            .then((res) => res.json()) 
            .then((d) => setData(d)) 
    }
  useEffect(() => {
      fetchInfo();
    }, [])

  // const thisYear = "2024";
  const thisYear = props.year;

  // TO DO: Change title to dynamically show year
  return (
    <div className="ViewBookYear">
      <h1>Read books {thisYear}!</h1>  
      <center>
        {data.map((dataObj, index) => {
            return (
              <div
                style={{
                  width: "30em",
                  backgroundColor: "#a9a9a9",
                  padding: 2,
                  borderRadius: 10,
                  marginBlock: 10,
                }}
              >
                <p style={{ fontSize: 15, color: 'black' }}>{dataObj.name}</p>
              </div>
            );
          })}
      </center>
      {<button onClick={addBook}>Add book</button>} 
    </div>
  );
};
export default ViewBookYear;