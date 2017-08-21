import React from 'react';

class Pill extends React.Component{
	constructor(){
		super();
		this.dimensions = {
			width: 150,
			height: 60,
			rx: 30,
			ry: 30,
		};

	}

	render() {
    return (
        <rect
        	width={this.dimensions.width}
        	height={this.dimensions.height}
        	rx={this.dimensions.rx}
        	ry={this.dimensions.ry}
        	y={this.props.offset * (this.dimensions.height + 10)}
        	fill="url(#Hatch)"
        	stroke="red"
        	strokeWidth={5}
        	/>
    )
  }
}

export { Pill };