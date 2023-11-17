
import React, {useState, useEffect}  from "react";
import BookInfo from "./BookInfo";

const ViewBookYear = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  // const url = "https://jsonplaceholder.typicode.com/users"; // TODO: Remove, connect to API instead

  // const fetchInfo = () => { 
  //   return fetch(url) 
  //           .then((res) => res.json()) 
  //           .then((d) => setData(d)) 
  //   }
  const fetchData = () => {
    fetch('http://localhost:3001/getBookList', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(async res => res.json())
    .then(async resData => {
          
        // console.log(resData.year2024.books[0]);
        // const returnVal = JSON.parse(resData);
        setData(resData);
        setLoading(false);
        // console.log(data);
    })
  }
  useEffect(() => {
      fetchData();
  }, [])

  function seeData() {
    console.log(data.year2024.books);
  }
  
  const thisYear = props.year;

  return (
    <div> {
      loading ? <p>Fetching data</p> :

      <div className="ViewBookYear">
        <h1>Read books {thisYear}!</h1>  
        <center>
        {data.year2024.books.map((dataObj, index) => {
            return (<div key={index}> 
              <BookInfo 
                id={index}
                props={dataObj}
              />
            </div>);
        })}
        </center>
      
        <a href="addBook" className="addBookLink" > Add book </a>
        <button onClick={seeData}> See data </button>
        
      </div>
    }
    </div>
  );
};
export default ViewBookYear;

