import React from 'react';
import { Card, Deck } from './Card';
import { DefaultProperty } from './Properties/PropertyHandlers';
import './App.css';


class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: false,
    };
    this.deck = new Deck(DefaultProperty);
    this.deck.shuffle();
  }
  render() {
    return (
      <div>
        <div className="board-row">
            {this.deck.draw().card}
            {this.deck.draw().card}
            {this.deck.draw().card}
        </div>
        <div className="board-row">
            {this.deck.draw().card}
            {this.deck.draw().card}
            {this.deck.draw().card}
        </div>
        <div className="board-row">
            {this.deck.draw().card}
            {this.deck.draw().card}
            {this.deck.draw().card}
        </div>
      </div>
    );
  }
}


class Game extends React.Component{
  render(){
    return (
      <div>
        <Board/>
      </div>
    );
  }
}

export { Game };