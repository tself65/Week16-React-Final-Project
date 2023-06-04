import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp }  from '@fortawesome/free-solid-svg-icons'; 

//Component to like and dislike songs

 


function LikeDislike({song}) {

 
    let favSongs = []; 

    const handleLike = () => {
       favSongs.push(song.img);
      
       let postSong = {
        method: "POST", 
        headers: {"Content-Type":"application/json"}, 
        body: JSON.stringify(favSongs), 
       }
       fetch(`http://localhost:3500/favoriteSongs`, postSong) 
    }

    const handleDislike = () => {
        console.log("I hate this song!"); 

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