import React from 'react'
import { Card } from 'react-bootstrap';
import DeleteSong from './DeleteSong';

function PlaylistData({playlist1}) {
    const showPlaylist = playlist1.map((song) => {

        console.log(song); 
        return (
          <div key={song.id}>
          <Card className="songCard" bg='dark' text='light' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img className="Card" src={`${song.img}`}/>
            <Card.Title>{song.artist}</Card.Title>
            <Card.Text>{song.songName}</Card.Text>
            <DeleteSong song = {song}/>
          </Card.Body>
      </Card><br/>
      </div>
        )
    });
  return (
    <div className="playlistData">
        <h2><u>Playlists</u></h2>
        <h4>Playlist 1:</h4>
        <div className="songList">
        {showPlaylist}
        </div>
     
        <h4>Playlist 2:</h4>
        <h4>Playlist 3:</h4>
    </div>
  )
}

export default PlaylistData