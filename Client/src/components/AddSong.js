import React from 'react';
import Upload from "./Upload";
import '../stylesheet/upload.css';

const AddSong = () => {

    return(
        <div className = 'songbox'>
            <h1 className = 'addst'>New Song</h1>
            <div className = 'coverblock'>
            <h3 className = 'songcov'>Song Cover</h3>
            <div><Upload /></div>
            </div>
            <div className = 'inct'>
            <input className = 'addsi' type = 'text' name = 'songname' required/>
            <label for = 'songname' className = 'addslab'>
            <span className = 'addsl'>Song</span>
            </label>
            </div>
            <div className = 'inct'>
            <input className = 'addsi' type = 'text' name = 'genre' required/>
            <label for = 'genre' className = 'addslab'>
            <span className = 'addsl'>Genre</span>
            </label>
            </div>
            <div className = 'inct'>
            <input className = 'addsi' type = 'text' name = 'mood' required/>
            <label for = 'mood' className = 'addslab'>
            <span className = 'addsl'>Mood</span>
            </label>
            </div>
            <div className = 'inct'>
            <input className = 'addsi' type = 'number' step = '.01' min = '0' name = 'duration' required/>        
            <label for = 'duration' className = 'addslab'>
            <span className = 'addsl'>Playtime</span>
            </label>
            </div>
            <div className = 'inct2'>
            <textarea className = 'addsi' name = 'lyrics' required/>
            <label for = 'lyrics' className = 'addslab'>
            <span className = 'addsl'>Lyrics</span>
            </label>
            </div>
            <button className = 'clickme4'>Submit</button>
        </div>
    );
}

export default AddSong;