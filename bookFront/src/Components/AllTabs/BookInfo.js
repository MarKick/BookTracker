import React, {useState}  from "react";
import "./bookInfo.css";

const BookInfo = ({props}) => {
    const [dd, setDD] = useState(false); 

    const handleClick = () => {
        setDD(!dd)
        // TO-DO: Make fetch to get book information from backend
    }

    return (
        <div
        // style={{
        //   width: "30em",
        //   backgroundColor: "#a9a9a9",
        //   padding: 2,
        //   borderRadius: 10,
        //   marginBlock: 10,
        // }}
            >
              {/* TODO: Make these buttons to seperate sites */}
              <div>
                <button className="bookInfoButton" onClick={handleClick}> {props.title} ~ {props.author}</button> 
              </div>
              
              {/* className={styles.bookInfoButton} */}
              <div>{dd ? <p>text info</p>: null}</div>
            </div>
    );
}; export default BookInfo;

// 

// 