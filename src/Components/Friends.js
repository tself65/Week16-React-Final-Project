import React from 'react'
import { Card, Image } from 'react-bootstrap';
import AddFriend from './AddFriend';
import Delete from './Delete';


//Componenet to see friends playlists
function Friends({friendsList}) {  
    
    const showFriends = friendsList.map((friend) => {

    return (
      <Card key={friend.id} style={{ width: '18rem' }}>
      <Card.Header className="friendHeader">{friend.name}</Card.Header>
     
      <Card.Body className="friendCard">
          <Card.Text>Favorite Genre: {friend.music}</Card.Text>
          <Card.Img src={`${friend.avatar}`}/><br/><br/>
          <Delete friend={friend} className="friendDelete"/>
      </Card.Body>
  </Card>
    )
  });


    
  return (
    <div className="friends">
         <h2>Friends List</h2>
         <AddFriend/>
         <div className="friendsList">
            {showFriends}
            </div>
       
    </div>
  )
}

export default Friends