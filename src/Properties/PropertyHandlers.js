import React from 'react';
import { Pill, Diamond, Squiggle } from './Shapes';

class DefaultProperty extends React.Component{
	constructor(props) {
		super(props);
		this.processProps();
	}

	processProps(){
		//Shape
		switch (this.props.shape){
			case "Pill":
				this.shape = Pill;
				break;
			case "Diamond":
				this.shape = Diamond;
				break;
			case "Squiggle":
				this.shape = Squiggle;
				break;
			default:
				this.shape = Pill;
				break;
		}

		//color
		this.color = this.props.color;

		//Fill
		switch (this.props.fill){
			case "Solid":
				this.fill = this.color;
				break;
			case "Open":
				this.fill = "White";
				break;
			case "Hatch":
				this.fill = "url(#Hatch)";
				break;
			default:
				this.fill = 'White';
				break;

		}

		//number
		switch (this.props.number){
			case 1:
				this.offset_list = [0.0];
				break;
			case 2:
				this.offset_list = [-0.5, 0.5];
				break;
			case 3:
				this.offset_list = [-1.0, 0.0, 1.0];
				break;
			default:
				this.offset_list = [0.1];
				break;

		}
	}

	generateShapes(){
		const shapes = this.offset_list.map((offset) =>
			<this.shape offset={offset} color={this.color} fill={this.fill} key={offset.toString()}/>
		);
		return shapes
	}

	generatePattern(){
		let pattern = null;
		if (this.props.fill === "Hatch"){
			pattern = (
				<defs>
					<pattern id="Hatch" width={8} height={1} patternUnits="userSpaceOnUse">>
    					<line x1={0} y1={1} stroke={this.color} strokeWidth={2}/>
    				</pattern>
    			</defs>
			)
		}
		return pattern;
	}


	render(){
		return (
			<svg>
				{ this.generatePattern() }
				{ this.generateShapes() }
			</svg>
		)
	}


}

export { DefaultProperty }