import React from "react";
import "./Card.css";

function Cards({children})
{
    return <div className="card-group">{children}</div>
}

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

export {Cards, Card};