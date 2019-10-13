import React from "react";
import "./Messages.css";

// Creates Messages component to output copy to the player based upon game logic (win, lose, Etc.)
// Uses the copy prop from state in App.js
function Messages({
    copy
}) 
{
    return (
            <div className="container">
                <div className="row pl-0">
                        <div className="col-md-12">
                            <div className ="current-score text-left ml-0"><p>{copy}</p></div>
                        </div>
                </div>
            </div>
);
}

// Exports the Messages function 
export default Messages;