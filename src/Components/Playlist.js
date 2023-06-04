import React from 'react'
import { Dropdown } from 'react-bootstrap'


//Way for users to create a playlist
//Component that houses user and friends playlists
function Playlist({song}) {

let playlist1 = []; 

const handleAdd = () => {
    playlist1.push(song); 

    let postPlaylist = {
        method: "POST", 
        headers: {"Content-Type":"application/json"}, 
        body: JSON.stringify(playlist1), 
       }
       fetch(`http://localhost:3500/playlist1`, postPlaylist)
}
 

  return (
    <div>
         <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Add to Playlist
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleAdd}>Playlist 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Playlist 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Playlist 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default Playlist