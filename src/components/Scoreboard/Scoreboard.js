import React from "react";
import "./Scoreboard.css";

// Creates a Scoreboard component using the score and top score props from App.js state
function Scoreboard({
    score,
    topScore
}) 
{
    return (
            <div className="container">
                <div className="row pl-0">
                        <div className="col-md-12">
                            <div className ="current-score text-left ml-0"><h5>Score: {score} | Top Score: {topScore}</h5></div>
                        </div>
                </div>
            </div>
);
}

// Exports Scoreboard component
export default Scoreboard;