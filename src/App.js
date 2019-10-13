import React, { Component } from "react";
import Nav from "./components/Nav";
import Messages from "./components/Messages";
import Scoreboard from "./components/Scoreboard";
import {Cards, Card} from "./components/Card";
import cards from "../src/cards.json"

// App Component
class App extends Component
{
  // State management for app
  state = 
  {
    cards,
    score: 0,
    topScore: 0,
    clickedCards: [],
    copy: "Welcome! Try to click all the cards without repeating. Click a card to start the game...",
  };
  
  // Function which randomizes the cards in the app; invoked when the player clicks a card
  randomizer = id =>
  {
    this.setState(
    {
      cards: this.state.cards.sort(function(a,b)
      {
        // Compares two cards (a and b) by assigning them a random number and iterates through the cards array
        return .5 - Math.random();
      })
    })
  }

  // Function which contains the primary game logic determining when a player wins or loses
  // Also manages the props in the state so that they are updated accordingly in the DOM
  gameLogic = id =>
  {
    // Creates an array to check and see if the clicked card has already been clicked
    let clicked = this.state.clickedCards;

    // Sets a boolean if true/false if the clicked card is in the array of cards already clicked
    const alreadyClicked = clicked.includes(id);

    // Checks to see if the clicked card is in array of cards already clicked; if it is not, then this conditional runs
    if (!alreadyClicked)
    {
      // Adds the clicked card to the array of cards already clicked
      this.state.clickedCards.push(id);

      // Creates a variable to hold the updated score
      let updatedScore = this.state.score + 1;

      // Updates the score prop in the state so that it is updated in the DOM
      this.setState({score: updatedScore});

      // Updates the top score prop in the state if it the current score is a top score
      if (updatedScore > this.state.topScore)
      {
        this.setState(
        {
          topScore: updatedScore
        });
      }

      // Checks to see if the player has won -- the highest possible score is 12 since there are 12 cards
      if (updatedScore === 12)
      {
        // Resets the state props if the player wins
        this.setState(
        {
          score: 0,
          clickedCards: [],
          topScore: 0,
          copy: "Hooray! You are back to your new self again -- a winnner! Click a card to play again."
        });
      }

      // If the player guessed correctly, but didn't win, then one of three success messages is randomly shown in the DOM
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

    // Conditional which runs if the clicked card is in the clicked cards array; the game is over
    else
    {
      // Resets the state props if the player loses (game over)
      // Top score is maintained so the player can try to beat it
      this.setState(
      {
        score: 0,
        clickedCards: [],
        copy: "You already picked that card... Game over. Click a card to start again."
      });
    }
  }

  // Renders the child components of the App component
  render()
  {
    return (
      <div>
        {/* Renders Nav component */}
        <Nav />

        {/* Renders Scoreboard component with score and top score props from state passed to component */}
        <Scoreboard
          score={this.state.score}
          topScore={this.state.topScore}
        >
        </Scoreboard>
        
        {/* Renders Messages component with copy prop from state passed to component */}
        <Messages
          copy={this.state.copy}
        >

        </Messages>

        {/* Renders Cards and Card component with related props from state passed to components; also uses map to iterate through card data from JSON import */}
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
