import React, {useState, useEffect}  from "react";


const BookCount = ({props}) => {
    const [loading, setLoading] = useState(true); 
    const [data, setData] = useState({});
    
    const availBookCount = () => {
        setLoading(false)
        // 
    }
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
              <div>{loading ? <p> Book count : 0</p> : <p> Book count : {data.tab1.count}</p>}</div>
        </div>
    );
}; export default BookCount;