import React, {useState}  from "react";
import "./bookInfo.css";
import BookText from "./BookText";

const BookInfo = ({props}) => {
    const [dd, setDD] = useState(false); 
    const handleClick = () => {
        setDD(!dd)
    }
    
    return (
        <div>
            <button className="bookInfoButton" onClick={handleClick}> {props.title}</button> 
            <div>{dd ? <BookText props={props}/>: null}</div> 

        </div>
    );
}; export default BookInfo;

// 

// 