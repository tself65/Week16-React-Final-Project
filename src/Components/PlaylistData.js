import React from 'react'
import { Card } from 'react-bootstrap';

function PlaylistData({playlist1}) {
    const showPlaylist = playlist1.map((song) => {

        console.log(song); 
        return (
          <div>
          <Card key={song.id} style={{ width: '18rem' }}>
          <Card.Header className="songHeader">{song.artist}</Card.Header>
          <Card.Body className="songCard">
              <Card.Text>{song.songName}</Card.Text>
              <Card.Img src={`${song.img}`}/>
          </Card.Body>
      </Card><br/>
      </div>
        )
    });
  return (
    <div className="playlistData">
        <h2>Playlists:</h2>
        <h4>Playlist 1:</h4>
        {showPlaylist}
        <h4>Playlist 2:</h4>
        <h4>Playlist 3:</h4>
    </div>
  )
}

export default PlaylistData