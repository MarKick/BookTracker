import React, {useState}  from "react";
// import "./bookInfo.css";

const RemoveAllBooksButton = ({props}) => {
    const [dd, setDD] = useState(false); 
    const [data, setData] = useState();

    const handleClick = () => {
        setDD(!dd)
        deleteData();
        // TO-DO: Make fetch to get book information from backend
    }
    // const year = props.year;
    const deleteData = () => {
        fetch('/deleteAllDB', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({})
        })
        .then(async res => res.json())
        .then(async resData => {
            setData(resData);
        })
      }

    return (
        <div>
            <button className="removeAllButton" onClick={handleClick}>Remove all entries</button> 
        </div>
    );
}; export default RemoveAllBooksButton;