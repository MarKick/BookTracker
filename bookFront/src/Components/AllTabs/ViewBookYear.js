
import React, {useState, useEffect}  from "react";
import BookInfo from "./BookInfo";
import AddBook from "./AddBook";
import BookCount from "./BookCount";

const ViewBookYear = (props) => {
  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState({});
  const [tabdata, setTabdata] = useState([]);
  const [year, setYear] = useState(props.year);
  // const year = props.year;

  const fetchData = () => {
    fetch('http://localhost:3001/getBookList', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ year: year})
    })
    .then(async res => res.json())
    .then(async resData => {
        // setData(resData);
        setTabdata(resData);
        // setYear(resData.year);
        setLoading(false);
    })
  }
  useEffect(() => {
      fetchData();
      console.log(year);
  }, [])

  return (
    <div> {
      loading ? <p>Fetching data</p> :

      <div className="ViewBookYear">
        <h1>Read books {year}!</h1>  
        <center>
        {tabdata.map((dataObj, index) => {
            return (<div key={index}> 
              <BookInfo 
                id={index}
                props={dataObj}
                year={year}
              />
            </div>);
        })}
        </center>
        <BookCount
          year={year}
        />
        <AddBook
          year={year}
        />
      </div>
    }
    </div>
  );
};
export default ViewBookYear;

