import React from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import LikeDislike from './LikeDislike';
import Playlist from './Playlist';
import AddSong from './AddSong';




function SongLibrary({songList}) {

 

 

  const showSongs = songList.map((song) => {

    return (
      <div>
      <Card key={song.id} style={{ width: '18rem' }}>
      <Card.Header className="songHeader">{song.artist}</Card.Header>
     
      <Card.Body className="songCard">
          <Card.Text>{song.songName}</Card.Text>
          <Card.Img src={`${song.img}`}/>
          <LikeDislike song={song}/>
          <Playlist song={song}/>
      </Card.Body>
  </Card><br/>
  </div>
    )
  });
  return (
    <div className="songLibrary">
      <h2>Song Library</h2>
      <AddSong/>
        <div className="songList">
          {showSongs}
        </div>
    </div>
   
    
  )
}

export default SongLibrary