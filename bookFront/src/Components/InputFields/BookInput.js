import React, {useState}  from "react";
import './text-input-style.css';
import './bookInput.css'

const BookInput = (props) => {
    const [buttonnstate, setButtonstate] = useState("3");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [review, setReview] = useState("");
    const [success, setSuccess] = useState(false);

    const year = props.year;

    function postForm(year, title, author, score, review) {
        fetch('/addBook', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ year: year, title: title, author: author, score : score, review: review })
        })
        .then(async res => res.json())
        .then(async resData => {
            setSuccess(true); 
            console.log(title);
        })
        .catch((err) => {
            console.log(err);
            setSuccess(false);
        });
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
            <div>
            {success ? <p> Success to add book!</p> : null}
            </div>
              
        </div>
    );
}; export default BookInput;
