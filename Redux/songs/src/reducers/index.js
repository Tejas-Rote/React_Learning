import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {title : 'No scrubs ', duration: '4:05'},
        {title : 'Macerena ', duration: '2:35'},
        {title : 'All Star ', duration: '1:50'},
        {title : 'Back Street ', duration: '4:35'},
    ];
};



const selectedSongReducer = (selectedSong = null,action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    };
    return selectedSong;
};



export default combineReducers({
    songs: songsReducer,
    selectedSong:selectedSongReducer
});