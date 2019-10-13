import React from "react";
import "./Messages.css";

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

export default Messages;