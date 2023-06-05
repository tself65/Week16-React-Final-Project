import React from 'react'
import { Card, Image } from 'react-bootstrap';
import AddFriend from './AddFriend';
import Delete from './Delete';


//Componenet to see friends playlists
function Friends({friendsList}) {  
    
    const showFriends = friendsList.map((friend) => {

    return (
      <div>
    <Card className="friendCard" bg='dark' text='light' key={friend.id} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Img src={`${friend.avatar}`} style={{ borderRadius: '50%' }}/><br/><br/>
          <Card.Title>{friend.name}</Card.Title>
          <Card.Text>Favorite Genre: {friend.music}</Card.Text>
          <Delete friend={friend} className="friendDelete"/>
        </Card.Body>
    </Card><br/>
      </div>
    
    )
  });


    
  return (
    <div className="friends">
         <h2><u>Friends List</u></h2>
         <AddFriend/>
         <div className="friendsList">
            {showFriends}
            </div>
       
    </div>
  )
}

export default Friends