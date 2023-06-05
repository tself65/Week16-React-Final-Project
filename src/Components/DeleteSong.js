import React from 'react'
import { Button } from 'react-bootstrap';

function DeleteSong({song}) {
    const url=`http://localhost:3600/playlist1`; 
    let id = song.id; 

    const handleSubmit = () => {
        fetch(`${url}/${id}`, {
            method: "DELETE"
        }) 
        fetch(url);
     

    }

  return (
    <div>
        <Button type="Submit" onClick={handleSubmit}>Remove Song</Button>
    </div>
  )

}

export default DeleteSong