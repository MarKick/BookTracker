import React, {useState}  from "react";
import TextField from "./TextField";
import TextArea from "./TextArea";

function postForm(title) {
    var success = 0;
    fetch('http://localhost:3001/addBook', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ title: title })
    })
    .then(async res => res.json())
    .then(async resData => {
        success = 1; // change to check if DB added ok
        console.log(title);
    })
    return success;
}

const BookInput = ({props}) => {
    // const [data, setData] = useState(false); 
    // const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");

    return (
        <div>
            <div>
                <p style={{ fontSize: 15, color: 'white'}}> Title:</p>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required>

                </input>
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
                <button style={{ fontSize: 15, color: 'black'}} onClick={() => postForm(title)}> Add book to book list</button> 
            </div>
            
              
        </div>
    );
}; export default BookInput;
