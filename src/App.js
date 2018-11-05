import React from 'react';

import ScoreBoard from './components/ScoreBoard';
import GameWrapper from './components/GameWrapper';
import CharacterCard from './components/CharacterCard';

import characters from './characters';

class App extends React.Component {

	state = {
		characters,
		score: 0,
		highscore: 0,
		message: 'Pick a DBZ character to get started!',
		previouslyClicked: [],
		gameover: false,
		exclamations: ['Well done!', 'Good job!', 'Nice!', 'Boom!', 'Nailed it!', 'Yatta!', 'Woot!', 'Sweet!']
	};
	
	shuffleArray = array => {
		for (let i = array.length - 1; i > 0; --i) {
			let j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	};
	
	handleGuess = (character) => {
		if(!this.state.gameover) {
			this.shuffleArray(this.state.characters);
			if(this.state.previouslyClicked.indexOf(character.id) >= 0) {
				this.setState({ message: 'Oh no! You\'ve already picked ' + character.name + '!', gameover: true });
			} else {
				this.state.score = this.state.score + 1;
				if(this.state.score > this.state.highscore) {
					this.state.highscore = this.state.score;
				}
				this.setState({ previouslyClicked: this.state.previouslyClicked.concat(character.id) });
				if(this.state.score >= characters.length) {
					this.setState({ message: 'You win!', gameover: true });
				} else {
					const exclamation = this.state.exclamations[Math.floor(Math.random() * this.state.exclamations.length)];
					this.setState({ message: exclamation + ' ' + character.name + ' has not been picked yet!' });
				}
			}
		}
	};
	
	resetGame = () => {
		this.shuffleArray(this.state.characters)
		this.setState({
			score: 0,
			message: 'Pick a DBZ character to get started!',
			previouslyClicked: [],
			gameover:false
		});
	};

	render() {
		return (
			<div>
				<ScoreBoard
					score={this.state.score}
					highscore={this.state.highscore}
					message={this.state.message}
					gameover={this.state.gameover}
					resetGame={this.resetGame}
				/>
				<GameWrapper>
					{
						this.state.characters.map((character, i) => {
							return <CharacterCard
								key={character.id}
								character={{ id: character.id, image: character.image, name: character.name }}
								handleGuess={this.handleGuess}
							/>
						})
					}
				</GameWrapper>
			</div>
		);
	}
}

export default App;
