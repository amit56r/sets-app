import React from 'react';
import { Pill } from './Properties/Shapes';

class Card extends React.Component{
	render() {
		return (
			<svg>
				<defs>
					<pattern id="Hatch" width={5} height={3} patternUnits="userSpaceOnUse">>
    					<line x1={0} y1={0} x2={0} y2={10} strokewWidth={5} stroke="red"/>
    				</pattern>
    			</defs>
				<Pill offset="0"/>
			 	<Pill offset="1"/>
			 	<Pill offset="2"/>
			</svg>
		)
	}
}

export { Card }