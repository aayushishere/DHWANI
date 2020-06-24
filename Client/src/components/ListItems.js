import React from 'react';

const ListItems = ({ artist, songname, duration, mood, genre }) => {
	return(
		<div className ='listitems'>
		<div className = 'entrylist'>
		<h2 className = 'listentry le'>{songname}</h2>
		<h2 className = 'listentry le2'>{artist}</h2>
		<h2 className = 'listentry le3'>{mood}</h2>
		<h2 className = 'listentry le4'>{genre}</h2>
		<h2 className = 'listentry le5'>{duration}</h2>
		</div>
		</div>
		);

} 

export default ListItems;