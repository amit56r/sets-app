import React from 'react';
import { DefaultProperty } from './Properties/PropertyHandlers';
import './Card.css';

class Card extends React.Component{
	render() {
		return (
			<div>
				<svg width="100%" height="100%" viewBox="0 0 650 425">
					<rect x={5} y={5} height={350} width={225} rx={10} ry={10} fill="white" stroke="grey" strokeWidth={2}>
					</rect>
					<DefaultProperty
						shape={this.props.shape}
						number={3}
						color="Red"
						fill="Hatch"
					/>
				</svg>
			</div>
		)
	}
}

export { Card }