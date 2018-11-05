import React from 'react';
import './GameWrapper.css';

class GameWrapper extends React.Component {
	render() {
		return (
			<div className='game-wrapper'>{this.props.children}</div>
		);
	}
}

export default GameWrapper;
