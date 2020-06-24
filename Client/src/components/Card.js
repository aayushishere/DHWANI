import React from 'react';

const Card = ({ pname, songno }) => {
	return(
		<div className = 'card'>
		<img className = 'cov' alt = 'Playlist Cover' src = {'https://picsum.photos/200'}/>
		<h3 className = 'card1'>{pname}</h3>
		<h4 className='card2'>{songno}</h4>
		<h4 className='card2'> Songs</h4>

		</div>
	);
}

export default Card;