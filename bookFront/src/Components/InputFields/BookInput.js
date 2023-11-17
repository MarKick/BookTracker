import React, {useState}  from "react";

const BookInput = ({props}) => {
    const [dd, setDD] = useState(false); 

    const handleClick = () => {
        setDD(!dd)
        // Add book to DB, first send JSON data to backend
    }

    return (
        <div>
              
              
              <button style={{ fontSize: 15, color: 'black'}} onClick={handleClick}> Add book to book list</button> 
              
        </div>
    );
}; export default BookInput;
