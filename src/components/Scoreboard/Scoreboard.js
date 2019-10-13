import React from "react";
import "./Scoreboard.css";

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

export default Scoreboard;