import React, { Component } from "react";
import './App.css';
import Nav from "./components/Nav";
import {Cards, Card} from "./components/Card";
import cards from "../src/cards.json"
import { Container, Row, Col } from "./components/Grid";

class App extends Component
{
  state = 
  {
    cards
  };
  
  render()
  {
    return (
      <div>
        <Nav />
        <Container>
          <Row>
            <Col size="m-12">
              <Cards>
                {this.state.cards.map((cards, i) => {
                  return <Card 
                    id={cards.id}
                    name={cards.name}
                    url={cards.url}
                ></Card>
                }
                )}
              </Cards>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
