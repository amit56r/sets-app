import React from 'react';

function offsetString(offset, gap){
	let offset_value = offset * (gap + 20);
	return "translate(" + offset_value + ",0)";
}

class Pill extends React.Component{
	constructor(props){
		super(props);
		this.dimensions = {
			width: 60,
			height: 150,
			rx: 30,
			ry: 30,
			x: 150,
			y: 40,
		};

	}

	render() {
    return (
        <rect
        	width={this.dimensions.width}
        	height={this.dimensions.height}
        	rx={this.dimensions.rx}
        	ry={this.dimensions.ry}
        	x={this.dimensions.x}
        	y={this.dimensions.y}
        	fill={this.props.fill}
        	stroke={this.props.color}
        	strokeWidth={5}
        	transform={offsetString(this.props.offset, this.dimensions.width)}
        />
    )
  }
}

class Diamond extends React.Component{

	render() {
    return (
        <polygon
            points="180,30 145,117 180,205 215,117"
        	fill={this.props.fill}
        	stroke={this.props.color}
        	strokeWidth={5}
        	transform={offsetString(this.props.offset, 65)}
        />
    )
  }
}

class Squiggle extends React.Component{

	render() {
    return (
        <path
            d="m 180,33 c -13,6 -23,11 -28,26 -5,15 -1,31 7,58 7,23 0,36 -3,43 -4,7 -9,17 -9,30 0,13 21,18 33,12 11,-5 23,-14 28,-26 5,-12 1,-32 -7,-59 -5,-17 -3,-29 3,-42 4,-9 10,-18 9,-30 0,-13 -18,-19 -33,-12 z"
        	fill={this.props.fill}
        	stroke={this.props.color}
        	strokeWidth={5}
        	transform={offsetString(this.props.offset, 65)}
        />
    )
  }
}


export { Pill, Diamond, Squiggle };