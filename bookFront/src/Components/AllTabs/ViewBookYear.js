
import React, {useState, useEffect}  from "react";
import BookInfo from "./BookInfo";
import AddBook from "./AddBook";
import BookCount from "./BookCount";
// import RemoveAllBooksButton from "../Buttons/RemoveAllBooksButton";

const ViewBookYear = (props) => {
  const [loading, setLoading] = useState(true);
  const [tabdata, setTabdata] = useState([]);
  const year = props.year;

  const fetchData = () => {
    fetch('/getBookList', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ year: props.year})
    })
    .then(async res => res.json())
    .then(async resData => {
        // setData(resData);
        setTabdata(resData)
        setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  useEffect(() => {
      fetchData();
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
        {/* <RemoveAllBooksButton/> */}
      </div>
    }
    </div>
  );
};
export default ViewBookYear;

