import React from "react";
import "./Card.css";
import { Container, Row, Col } from "../Grid";

function Cards({children})
{
    return <div className="card-group">{children}</div>
}

function Card({
    id,
    name,
    url
}) {
    return (
                    <div className ="mt-1 mb-1 mr-1 ml-1 pr-1 pl-1 pt-1 pb-1 border border-warning">
                        <img className="card-char" src={url} alt={name}></img>
                    </div>

    );
}

export {Cards, Card};