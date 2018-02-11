/*jshint esversion: 6 */
import React from 'react';
import { Deck } from './Card';
import { DefaultProperty } from './Properties/PropertyHandlers';
import './App.css';

class Board extends React.Component{
  constructor(props){
    super(props);
    // preparing deck
    this.deck = new Deck(DefaultProperty);
    this.deck.shuffle();

    let nRows = 3;
    let nColumns = 3;
    let cards = Array(nRows).fill().map(() => Array(nColumns).fill(null));

    this.state = {
      nRows : 3,
      nColumns: 3,
      cards: cards,
    };
    cards =  this.updateCards(cards);
    this.canidates = [];
  }

  updateCards(old_cards){
    const cards = old_cards;
    for( let row=0; row < this.state.nRows; row++){
      for ( let col=0; col < this.state.nColumns; col++){
        if ( cards[row][col] === null){
            cards[row][col] = this.deck.draw({onClick: this.generateCardClickHandler(row, col)});
        }
      }
    }
    return cards;
  }

  generateCardClickHandler(row, col){
    return (property) => {
      this.canidates.push({
        row: row,
        col: col,
        property: property,
      });
      console.log(this.canidates);
      if(this.canidates.length === 3){
        this.checkCanidates();
      }
    };
  }

  checkCanidates(){
    let locations = this.canidates.map((c) => { return {row: c.row, col: c.col };});
    let properties = this.canidates.map((c) => { return c.property;});
    let cards =  this.state.cards.slice();
    console.log(this.isSet(properties));
    if (this.isSet(properties)){
      for( let loc of locations){
        cards[loc.row][loc.col] = this.deck.draw();
      }
    } else {
      for( let loc of locations){
        console.log(cards[loc.row][loc.col].card.props);
      }
    }
    this.canidates = [];
    this.setState({
        cards: cards,
    });
  }

  isSet(properties){
    let keys = Object.keys(properties[0]);
    for(let key of keys){
      let p_array = [];
      for(let property of properties){
        p_array.push(property[key]);
      }
      let p_set = new Set(p_array);
      if (p_set.size !== 1 && p_set.size !== 3){
        return false;
      }
    }
    return true;
  }

  renderCards(){
      let rowElements = [];
      for( let row=0; row < this.state.nRows; row++){
        let colElements = [];
        for( let col=0; col < this.state.nColumns; col++){
          colElements.push(
            this.state.cards[row][col].card
          );
        }
        rowElements.push((
          <div className="board-row" key={row}>
            { colElements }
          </div>
        ));
      }

    return (
      <div>
        { rowElements }
      </div>
    );

  }
  render() {
    return (
      <div>
        { this.renderCards() }
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