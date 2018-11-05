import React from 'react';
import './ScoreBoard.css';

class ScoreBoard extends React.Component {
	render() {
		return (
			<div className='scoreboard'>
				<div className='message-container'>
					<span>{this.props.message}</span>
					{this.props.gameover ? (<span className='play-again' onClick={this.props.resetGame}>Play Again</span>) : (<span></span>)}
				</div>
				<div className='scores'> Score: {this.props.score} | High Score: {this.props.highscore}</div>
			</div>
		);
	}
}

export default ScoreBoard;