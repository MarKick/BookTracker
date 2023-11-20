import React, {useState}  from "react";
import TextField from "./TextField";
import TextArea from "./TextArea";
import './text-input-style.css';

function postForm(title, author, score, review) {
    var success = 0;
    fetch('http://localhost:3001/addBook', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ title: title, author: author, score : score, review: review })
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
    const [author, setAuthor] = useState("");
    const [score, setScore] = useState("");
    const [review, setReview] = useState("");

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
                <p style={{ fontSize: 15, color: 'white'}}> Author:</p>
                <input
                value={author}
                onChange={e => setAuthor(e.target.value)}
                required>
                </input>
            </div>
            <div>
                <p style={{ fontSize: 15, color: 'white'}}> Score:</p>
                <input
                value={score}
                onChange={e => setScore(e.target.value)}
                required>
                </input>
            </div>
            <div>
                <p style={{ fontSize: 15, color: 'white'}}> Review:</p>
                <textarea
                value={review}
                onChange={e => setReview(e.target.value)}
                required>
                </textarea>
            </div>

            <div>
                <button style={{ fontSize: 15, color: 'black'}} onClick={() => postForm(title, author, score, review)}> Add book to book list</button> 
            </div>
            
              
        </div>
    );
}; export default BookInput;
