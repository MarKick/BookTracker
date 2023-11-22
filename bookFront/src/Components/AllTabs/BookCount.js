import React, {useState, useEffect}  from "react";
import "./bookInfo.css";

const BookCount = (props) => {
    const [loading, setLoading] = useState(true); 
    const [data, setData] = useState({});
    const year = props.year;

    const fetchData = () => {
        fetch('http://localhost:3001/getBookList', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ year: props.year})
        })
        .then(async res => res.json())
        .then(async resData => {
            setData(resData);
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
        <div>
              <div>{loading ? <p className="bookCountText"> Book count : -</p> : <p className="bookCountText"> Book count : {Object.keys(data).length
}</p>}</div>
        </div>
    );
}; export default BookCount;