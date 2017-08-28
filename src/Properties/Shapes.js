import React from 'react';


function offsetString(offset, gap){
	let offset_value = offset * (gap + 20);
	return "translate(0 " + offset_value + ")"
}


class Pill extends React.Component{
	constructor(props){
		super(props);
		this.dimensions = {
			width: 150,
			height: 60,
			rx: 30,
			ry: 30,
			x: 40,
			y: 150,
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
        	transform={offsetString(this.props.offset, this.dimensions.height)}
        	/>
    )
  }
}

class Diamond extends React.Component{

	render() {
    return (
        <polygon
        	points="30,180 117,145 205,180 117,215"
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
            d="m 33,180 c 6,-13 11,-23 26,-28 15,-5 31,-1 58,7 23,7 36,0 43,-3 7,-4 17,-9 30,-9 13,0 18,21 12,33 -5,11 -14,23 -26,28 -12,5 -32,1 -59,-7 -17,-5 -29,-3 -42,3 -9,4 -18,10 -30,9 -13,0 -19,-18 -12,-33 z"
        	fill={this.props.fill}
        	stroke={this.props.color}
        	strokeWidth={5}
        	transform={offsetString(this.props.offset, 65)}
        	/>
    )
  }
}


export { Pill, Diamond, Squiggle };