/*jshint esversion: 6 */
import React from 'react';
import './Card.css';

class Card extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selected: false,
		};
	}

	handleClick(){
		this.setState((prevState, props) => {
				return {selected: !prevState.selected};
			}
		);
		this.props.onClick(this.props.card);
	}

	reset(){
		console.log('reseting card state');
	}

	render() {
		return (
			<div className={this.state.selected ? 'card selected' : 'card'} onClick={() => this.handleClick()}>
				<svg height={230} width={360}>
					<rect x={5} y={5} height={220} width={350} rx={10} ry={10} fill="white" stroke="grey" strokeWidth={2}/>
					<this.props.handler {...this.props.card} />
				</svg>
			</div>
		)
	}
}


class Deck{
	constructor(handler){
		this.handler = handler;
		this.structure = this.handler.getStructure();
		let { stack, keys } = this.createDeck(this.structure);
		this.stack = stack;
		this.keys = keys;
		console.log(this.stack)
	}

	createDeck(structure){
		let stack = []
		let keys = Object.keys(structure);
		this.permute(stack, [], keys, 0)
		return { stack, keys }
	}

	permute(stack, partial, keys, index){
		if (index >= keys.length){
			stack.push(partial.slice());
			return;
		}
		let current = keys[index];
		for( let value of this.structure[current]){
			partial.push(value);
			this.permute(stack, partial, keys, index + 1);
			partial.pop();
		}
	}

	zip(keys, values){
		var obj = {};
		for( var i=0; i < keys.length; i++){
			obj[keys[i]] = values[i]
		}
		return obj;
	}

	shuffle(){
		for (let i = this.stack.length - 1; i > 0; i--) {
        	let j = Math.floor(Math.random() * (i + 1));
        	let temp = this.stack[i];
        	this.stack[i] = this.stack[j];
        	this.stack[j] = temp;
    	}
	}

	draw(props){
		var values = this.stack.pop()
		var property = this.zip(this.keys, values);
		var code = this.handler.encodeProperty(property)
		var card = <Card handler={this.handler} card={property} key={code} {...props}/>
		return { property, card};
	}


}




export { Card, Deck }