import React from 'react'
import { Button } from 'react-bootstrap' 

function Delete({friend}) {

    const url=`https://64797baca455e257fa633c34.mockapi.io/api/friends`; 
    let id = friend.id; 

    const handleSubmit = () => {
        fetch(`${url}/${id}`, {
            method: "DELETE"
        }) 
        fetch(url); 
     
    }

  return (
    <div>
        <Button type="Submit" onClick={handleSubmit}>Remove Friend</Button>
    </div>
  )
}

export default Delete