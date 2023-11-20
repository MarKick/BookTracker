
import React, {useState, useEffect}  from "react";
import BookInfo from "./BookInfo";
import AddBook from "./AddBook";
import BookCount from "./BookCount";

const ViewBookYear = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [tabdata, setTabdata] = useState();
  // const url = "https://jsonplaceholder.typicode.com/users"; // TODO: Remove, connect to API instead
  const thisYear = props.year;
  const thisTab = props.tab;

  const fetchData = () => {
    fetch('http://localhost:3001/getBookList', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(async res => res.json())
    .then(async resData => {
        setData(resData);
        setTabdata(resData[thisTab])
        setLoading(false);
    })
  }
  useEffect(() => {
      fetchData();
  }, [])

  return (
    <div> {
      loading ? <p>Fetching data</p> :

      <div className="ViewBookYear">
        <h1>Read books {thisYear}!</h1>  
        <center>
        {tabdata.books.map((dataObj, index) => {
            return (<div key={index}> 
              <BookInfo 
                id={index}
                props={dataObj}
                year={thisYear}
              />
            </div>);
        })}
        </center>
        <BookCount/>
        <AddBook
          year={thisYear}
        />
      </div>
    }
    </div>
  );
};
export default ViewBookYear;

