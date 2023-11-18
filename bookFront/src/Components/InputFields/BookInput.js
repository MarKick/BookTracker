import React, {useState}  from "react";
import TextField from "./TextField";
import TextArea from "./TextArea";

const BookInput = ({props}) => {
    const [dd, setDD] = useState(false); 

    const handleClick = () => {
        setDD(!dd)
        // Add book to DB, first send JSON data to backend
    }

    return (
        <div>
            <div>
                <TextField
                    text={"Title:"}
                />
            </div>
            <div>
                <TextField
                    text={"Author:"}
                />
            </div>
            <div>
                <TextField
                    text={"Score:"}
                />
            </div>
            <div>
                <TextArea
                    text={"Review:"}
                />
            </div>

            <div>
                <button style={{ fontSize: 15, color: 'black'}} onClick={handleClick}> Add book to book list</button> 
            </div>
            
              
        </div>
    );
}; export default BookInput;
