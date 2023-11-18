import React, {}  from "react";
import "./bookInfo.css";
const BookText = (props) => {


    return (
        <div>
            <div>
                <p className="bookInfoText"><b>Title: </b>{props.props.title}</p>
            </div>
            <div>
                <p className="bookInfoText"><b>Author: </b>{props.props.author}</p>
            </div>
            <div>
                <p className="bookInfoText"> <b>Score :</b> {props.props.score}/5</p>
            </div>
            <div>
                <p className="bookInfoText"><b>Review:</b></p>
                <p className="bookInfoReview"><i>{props.props.review}</i></p>
            </div>
        </div>
    );
}; export default BookText;