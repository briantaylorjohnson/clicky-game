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
    cards,
    score: 0,
    clickedCards: [],
    copy: "",
  };
  
  randomizer = id =>
  {
    this.setState(
    {
      cards: this.state.cards.sort(function(a,b)
      {
        return 0.5 - Math.random();
      })
    })
  }

  gameLogic = id =>
  {
    let clicked = this.state.clickedCards;
    const alreadyGuessed = clicked.includes(id);

    if (!alreadyGuessed)
    {
      this.state.clickedCards.push(id);
      let updatedScore = this.state.score + 1;
      this.setState({score: updatedScore});

      console.log("New Score: " + updatedScore);
      if (updatedScore === 12)
      {
        console.log("Big winner!");
        this.setState(
        {
          score: 0,
          clickedCards: [],
          copy: "Hooray! You are back to your new self again -- a winnner!"
        });
      }

      else
      {
        this.setState(
        {
          copy: "That's great pick! Toad would be proud."
        });
      }
    }

    else
    {
      console.log("Game over!");
      this.setState(
      {
        score: 0,
        clickedCards: [],
        copy: "You already picked that card! Bowser's going to get the Princes! Oh no!"
      });
    }
  }

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
                    key={i}
                    randomizer={this.randomizer}
                    gameLogic={this.gameLogic}
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
