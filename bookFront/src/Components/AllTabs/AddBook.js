import React, {useState}  from "react";
import BookInput from "../InputFields/BookInput";
import "./addBook.css";

const AddBook = (props) => {
    const [dd, setDD] = useState(false); 
    const sendToDB = () => {
        setDD(!dd)
    }
    const yearOfTab = props.year;
    return (
        <div>
              {/* TO DO: Add styling to add book button to have either + or - in it to either expand or reverse pop-down */}
              <button className="addBookBtn" onClick={sendToDB}> Add book</button> 
              {/* <p>Year of tab: {yearOfTab}</p> */}
              <div>{dd ? <BookInput year={yearOfTab}/> : null}</div>
        </div>
    );
}; export default AddBook;
