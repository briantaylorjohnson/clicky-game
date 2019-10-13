import React from "react";
import "./Card.css";

// Creates a <div> to hold the Super Mario cards 
function Cards({children})
{
    return <div className="card-group">{children}</div>
}

// Creates a Super Mario card using the props from the App.js passed from the JSON file
// Also pulls in the randomizer and gamelogic functions as props and creates a single function (clicker) to invoke them on click
function Card({
    id,
    name,
    url,
    randomizer,
    gameLogic,
    clicker = () => {randomizer(); gameLogic(id); }
}) 
{
    return (
                <div className="col-md-3">
                    <div className ="text-center mr-1 ml-1 mb-4">
                        <img className="card-char border border-warning" src={url} alt={name} onClick={clicker}></img>
                    </div>
                </div>
    );
}

// Exports the Cards and Card functions
export {Cards, Card};