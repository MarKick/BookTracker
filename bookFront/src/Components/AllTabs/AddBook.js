import React, {useState}  from "react";
import BookInput from "../InputFields/BookInput";


const AddBook = ({props}) => {
    const [dd, setDD] = useState(false); 

    const sendToDB = () => {
        setDD(!dd)
        // 
    }

    return (
        <div>
              <button style={{ fontSize: 15, color: 'black'}} onClick={sendToDB}> Add book</button> 
              
              <div>{dd ? <BookInput/> : null}</div>
        </div>
    );
}; export default AddBook;
