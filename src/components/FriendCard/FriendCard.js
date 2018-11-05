import React from "react";
import "./FriendCard.css";

class FriendCard extends React.Component {
	
	render() {
		return (
			<div className="card" data-id={this.props.id} >
				<div className="img-container">
					<img alt={this.props.name} src={this.props.image} />
				</div>
				<div className="content">
					<ul>
						<li>
							<strong>Name:</strong> {this.props.name}
						</li>
						<li>
							<strong>Occupation:</strong> {this.props.occupation}
						</li>
						<li>
							<strong>Location:</strong> {this.props.location}
						</li>
					</ul>
				</div>
				<span className="remove" onClick={ () => this.props.removeFriend(this.props.id) }>𝘅</span>
			</div>
		);
	}
}

//	The above class syntax is the equivelant to the below functional syntax

/*
const FriendCard = (props) => {
	
	const name = props.name;
	const image = props.image;
	const occupation = props.occupation;
	const location = props.location;
	const id = props.id;
	console.log(id);
	
	return (
		<div className="card" data-id={id} >
			<div className="img-container">
				<img alt={name} src={image} />
			</div>
			<div className="content">
				<ul>
					<li>
						<strong>Name:</strong> {name}
					</li>
					<li>
						<strong>Occupation:</strong> {occupation}
					</li>
					<li>
						<strong>Location:</strong> {location}
					</li>
				</ul>
			</div>
			<span className="remove" onClick={ () => props.removeFriend(id) }>𝘅</span>
		</div>
	);
};
*/

export default FriendCard;