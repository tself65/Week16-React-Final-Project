import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp }  from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react';

//Component to like and dislike songs

 


function LikeDislike({song}) {
  
  const url = `http://localhost:3600/favoriteSongs`
  let id = song.id
 
  const [favSong, setFavSong] = useState(song); 

  const handleLike = () => {
  setFavSong(song); 
  
  let postFavSong = {
            method: "POST", 
            headers: {"Content-Type":"application/json"}, 
            body: JSON.stringify(favSong), 
           }
           fetch(`${url}`, postFavSong)
    }

  const handleDislike = () => {
        fetch(`${url}/${id}`, {
          method: "DELETE"
      }) 
      fetch(url);

    }

  return (
    <div>
        <button onClick={handleLike}>
        <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        <button onClick={handleDislike}>
        <FontAwesomeIcon icon={faThumbsDown} />
        </button>
       
    </div>
  )
}

export default LikeDislike