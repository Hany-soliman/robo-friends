import React from "react";
import '../styles.css'


const Card = ({hash, name, email}) => {
    return (
        <div className="card">
            <img src={`https://robohash.org/${hash}?200x200`} className="App-logo" alt="logo"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
