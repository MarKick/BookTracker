import React, {useState, useEffect}  from "react";


const BookInfo = ({props}) => {
    const [dd, setDD] = useState(false);

    function effectButton() {
        setDD(true)
    }

    return (
        <div
              style={{
                width: "30em",
                backgroundColor: "#a9a9a9",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              {/* TODO: Make these buttons to seperate sites */}
              <button style={{ fontSize: 15, color: 'black' }} > {props.title} ~ {props.author}</button> 
              
              <div>{dd ? <p>text info</p>: null}</div>
            </div>
    );
}; export default BookInfo;

// onClick={setDD(true)}

// 