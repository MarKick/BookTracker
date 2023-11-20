import React, {useState, useEffect}  from "react";
import "./bookInfo.css";

const BookCount = ({props}) => {
    const [loading, setLoading] = useState(true); 
    const [data, setData] = useState({});
    
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
            setLoading(false);
        })
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
              <div>{loading ? <p className="bookCountText"> Book count : 0</p> : <p className="bookCountText"> Book count : {data.tab1.count}</p>}</div>
        </div>
    );
}; export default BookCount;