import React from 'react'
import { Card } from 'react-bootstrap'
import LikeDislike from './LikeDislike';
import Playlist from './Playlist';
import AddSong from './AddSong';




function SongLibrary({songList}) {

 

 

  const showSongs = songList.map((song) => {

    return (
      <div key={song.id}>
      <Card className="songCard" bg='dark' text='light' style={{ width: '18rem' }}>
      <Card.Body>
          <Card.Img className="Card" src={`${song.img}`}/>
          <Card.Title>{song.artist}</Card.Title>
          <Card.Text>{song.songName}</Card.Text>
          <LikeDislike song={song}/>
          <Playlist song={song}/>
      </Card.Body>
  </Card><br/>
  </div>
    )
  });
  return (
    <div className="songLibrary">
      <h2><u>Song Library</u></h2>
      <AddSong/>
        <div className="songList">
          {showSongs}
        </div>
    </div>
   
    
  )
}

export default SongLibrary