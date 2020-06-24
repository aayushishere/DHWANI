import React from 'react';

const ModList = ({ artist, songname, duration, mood, genre }) => {
	return(
		<div className = 'modlistent'>
                <h3 className = 'modetext pd1'>{songname}</h3>
                <h3 className = 'modetext pd2'>{artist}</h3>
                <h3 className = 'modetext pd3'>{genre}</h3>
                <h3 className = 'modetext pd4'>{mood}</h3>
                <h3 className = 'modetext pd5'>{duration}</h3>
                <button className = 'clickme5 but1'>Approve</button>
                <button className = 'clickme5 but2'>Decline</button>
            </div>
		);

} 

export default ModList;