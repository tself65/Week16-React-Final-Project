import React from 'react'
import { Button } from 'react-bootstrap' 

function Delete({friend}) {

    const url=`https://64797baca455e257fa633c34.mockapi.io/api/friends`; 
    let id = friend.id; 

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${url}/${id}`, {
            method: "DELETE"
        }) .then(fetch(`${url}`))
     

    }

  return (
    <div>
        <Button type="Submit" onClick={handleSubmit}>Remove</Button>
    </div>
  )
}

export default Delete