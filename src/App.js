import React, { Component } from "react";
import './App.css';
import Nav from "./components/Nav";
import Messages from "./components/Messages";
import Scoreboard from "./components/Scoreboard";
import {Cards, Card} from "./components/Card";
import cards from "../src/cards.json"

class App extends Component
{
  state = 
  {
    cards,
    score: 0,
    topScore: 0,
    clickedCards: [],
    copy: "Welcome! Try to click all the cards without repeating. Click a card to start the game...",
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

      if (updatedScore > this.state.topScore)
      {
        this.setState(
        {
          topScore: updatedScore
        });
      }

      console.log("New Score: " + updatedScore);
      if (updatedScore === 12)
      {
        console.log("Big winner!");
        this.setState(
        {
          score: 0,
          clickedCards: [],
          topScore: 0,
          copy: "Hooray! You are back to your new self again -- a winnner!"
        });
      }

      else
      {
        let successMessage = Math.round(Math.random()*3);

        if (successMessage === 1)
        {
          this.setState(
          {
            copy: "That's great pick! Toad would be proud."
          });
        }

        else if (successMessage === 2)
        {
          this.setState(
          {
            copy: "Wahoo! Keep going."
          });
        }

        else
        {
          this.setState(
          {
            copy: "You're really good at this!"
          });
        }
      }
    }

    else
    {
      console.log("Game over!");
      this.setState(
      {
        score: 0,
        clickedCards: [],
        copy: "You already picked that card... Game over. Click a card to start again."
      });
    }
  }

  render()
  {
    return (
      <div>
        <Nav />
        <Scoreboard
          score={this.state.score}
          topScore={this.state.topScore}
        >
        </Scoreboard>
        <Messages
          copy={this.state.copy}
        >

        </Messages>
        <div className="container">
          <div className="row">
            <div size="col-md-12">
              <Cards>
                {this.state.cards.map((cards, i) => {
                  return (
                    <Card 
                      id={cards.id}
                      name={cards.name}
                      url={cards.url}
                      key={i}
                      randomizer={this.randomizer}
                      gameLogic={this.gameLogic}
                    >
                    </Card>
                  )
                }
                )}
              </Cards>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
