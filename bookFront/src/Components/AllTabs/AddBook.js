import React, {useState}  from "react";
import BookInput from "../InputFields/BookInput";


const AddBook = (props) => {
    const [dd, setDD] = useState(false); 
    

    const sendToDB = () => {
        setDD(!dd)
        // 
    }
    const yearOfTab = props.year;
    return (
        <div>
              {/* TO DO: Add styling to add book button to have either + or - in it to either expand or reverse pop-down */}
              <button style={{ fontSize: 15, color: 'black'}} onClick={sendToDB}> Add book</button> 
              <p>Year of tab: {yearOfTab}</p>
              <div>{dd ? <BookInput/> : null}</div>
        </div>
    );
}; export default AddBook;
