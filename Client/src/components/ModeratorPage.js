import React from 'react';
import ModList from './ModList';

const ModeratorPage = () =>{
    return(
        <div className = 'modpagecont'>
        <div className = 'moderator'>
            <div className = 'modheader'>
                <h1 className = 'modheadtext'>Moderator Console</h1>
            </div>
            <div className = 'modlisttop'>
                <h3 className = 'modhtext pd1'>Song Title</h3>
                <h3 className = 'modhtext pd2'>Artist</h3>
                <h3 className = 'modhtext pd3'>Genre</h3>
                <h3 className = 'modhtext pd4'>Mood</h3>
                <h3 className = 'modhtext pd5'>Playtime</h3>
                <h3 className = 'modhtext pd6'>Approve</h3>
            </div>
            <div className = 'modlist'>
            <ModList
            songname = 'Way Down We Go'
            artist = 'Kaleo'
            genre = 'Indie'
            mood = 'Sad'
            duration = '2.45'
            />
            <ModList
            songname = 'Way Down We Go'
            artist = 'Kaleo'
            genre = 'Indie'
            mood = 'Sad'
            duration = '2.45'
            />
            <ModList
            songname = 'Way Down We Go'
            artist = 'Kaleo'
            genre = 'Indie'
            mood = 'Sad'
            duration = '2.45'
            />
            </div>
        </div>
        </div>
    );
}
 export default ModeratorPage;