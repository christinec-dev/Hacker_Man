import React, { Component } from 'react';
//imports our randomizer and images needed for each step
import { randomWord } from './Randomize';
import step0 from "../css/images/0.png";
import step1 from "../css/images/1.png";
import step2 from "../css/images/2.png";
import step3 from "../css/images/3.png";
import step4 from "../css/images/4.png";
import step5 from "../css/images/5.png";
import step6 from "../css/images/6.png";

//creates a state component that will compose our hangman (hackerman) game
class Hangman extends Component {
  
  //sets the default state for the incorrect steps + images to render
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6]
  }

  //the initital state after each round/reload which will return mistakes to 0 and generate a new word
  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    }
  }

  //will add the correct letter upon correct guess, or blur out letter upon incorrect guess
  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  //will display the letter guessed when word matches
  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  //will generate the "keyboard" buttons for user input during guessing
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz#@$&".split("").map(letter => (
      <button
        className='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >{letter}
      </button>
    ));
  }

  //reset Button that will reset the number of mistakes and generate a new word
  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    });
  }

  //will display winner/loser results
  render() {
    //game over upon max number of incorrect guesses(6)
    const gameOver = this.state.mistake >= this.props.maxWrong;
    //game won upon correct guess
    const isWinner = this.guessedWord().join("") === this.state.answer;      
   
    //will generate the outcome
    let gameStat = this.generateButtons();

    //if the player guessed the right word, give access to secret key
    if (isWinner) {
       gameStat = <div>
         <p  className="success">Wow!</p>
        <a rel="noopener noreferrer" href="https://youtu.be/dQw4w9WgXcQ" target="_blank"> UNLOCK REWARD: <i className="fas fa-key"></i></a>
      </div>
    }

    //if the player guessed incorrectly, try again
    if (gameOver) {
      gameStat = <p className="fail">Try Again!</p>
    }

    //returns the display of the actual game
    return (
      <div className="Hangman container-fluid">
        {/* this will display the current number of incorrect guesses per round */}
       <div className="row">
          <div className="text-center text-error">Error 403 Received: {this.state.mistake} out of {this.props.maxWrong}
          </div>
        </div>
        {/* container for decorative image */}
        <div className="binary col-12">
        </div>
        {/* instructions and entry form */}
        <div className="row">
          <div className="text-center col-12">
            <p className="text-desc">Crack The Secret Code To Gain System Access:</p>
            {/* if the letter/word is correct, enter it/show success message, else show failure message and answer */}
            <p className="text-center text-answer col-md-4">{!gameOver ? this.guessedWord() : this.state.answer}</p>
          </div>
        </div>
        {/* image that will render more steps upon mistakes */}
        <div className="row text-center ">
        <div className="col-lg-6 col-12">
              <div className="col-lg-3 images-top"></div>
              <img src={this.props.images[this.state.mistake]} alt=""/>  
          </div>

        <div className="col-lg-6 col-12">
          {/* keyboard input */}
          <div className="text-result">
                <p className="terminal">  
                  <span className="terminal-text">root@youcanthackme:</span>
                  {gameStat}
                </p>
            </div>
            {/* reset button */}
                <button className='btn btn-info' onClick={this.resetButton}> CODE RESET </button>
                <div className="col-lg-3 images"></div>
              </div>
            </div>
      </div>
    )
  }
}

//exports for use in other files
export default Hangman;
