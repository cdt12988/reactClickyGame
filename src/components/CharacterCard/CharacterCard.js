import React from 'react';
import './CharacterCard.css';

class CharacterCard extends React.Component {
	
	character = this.props.character
	
	render() {
		return (
			<img className='character-img' src={this.character.image} onClick={() => {this.props.handleGuess(this.character)}} />
		);
	}
}

export default CharacterCard;
