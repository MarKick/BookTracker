import React, {useState}  from "react";
// import TextField from "./TextField";
// import TextArea from "./TextArea";
import './text-input-style.css';
import './bookInput.css'

const BookInput = (props) => {
    // const [data, setData] = useState(false); 
    const [buttonnstate, setButtonstate] = useState("3");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    // const [score, setScore] = useState("");
    const [review, setReview] = useState("");

    const year = props.year;

    function postForm(year, title, author, score, review) {
        var success = 0;
        fetch('/addBook', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ year: year, title: title, author: author, score : score, review: review })
        })
        .then(async res => res.json())
        .then(async resData => {
            success = 1; // change to check if DB added ok
            console.log(title);
        })
        return success;
    }    

    return (
        <div>
            <div>
                <p className="titleInput"> Title:</p>
                <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                required>
                </input>
            </div>
            <div>
                <p className="fieldInput"> Author:</p>
                <input
                value={author}
                onChange={e => setAuthor(e.target.value)}
                required>
                </input>
            </div>
            <div>
                <p className="fieldInput"> Score:</p>
                {/* TO DO: Set styling on radiobuttons */}
                <form>
                    <div className="radio">
                        <label className="buttonControlLabel">
                            1
                            <input type="radio" value="1" name="scoreset" onChange={e => setButtonstate("1")}/>
                            
                        </label>
                    </div>
                    <div className="radio">
                        <label className="buttonControlLabel">
                            2
                            <input type="radio" value="2" name="scoreset" onChange={e => setButtonstate("2")}/>
                        </label>
                    </div>
                    <div className="radio">
                        <label className="buttonControlLabel">
                            3
                            <input type="radio" value="3" name="scoreset" onChange={e => setButtonstate("3")}/>
                        </label>
                    </div>
                    <div className="radio">
                        <label className="buttonControlLabel">
                            4
                            <input type="radio" value="4" name="scoreset" onChange={e => setButtonstate("4")}/>
                        </label>
                    </div>
                    <div className="radio">
                        <label className="buttonControlLabel">
                            5
                            <input type="radio" value="5" name="scoreset" onChange={e => setButtonstate("5")}/>
                        </label>
                    </div>
                </form>
            </div>
            <div>
                <p className="fieldInput"> Review:</p>
                <textarea
                value={review}
                onChange={e => setReview(e.target.value)}
                required>
                </textarea>
            </div>

            <div>
                <button className="addBookToList" onClick={() => postForm(year, title, author, buttonnstate, review)}> Add book to book list</button> 
            </div>
            
              
        </div>
    );
}; export default BookInput;
