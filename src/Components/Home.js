import React from 'react'
import { Carousel } from 'react-bootstrap'

function Home({favSongs}) {

console.log(favSongs); 
    
 const createCarouselItem = favSongs.map((song, i) => {
    return (
        <Carousel.Item key={i}>
            <img className ="d-block w-25 mx-auto" src= {song}/>
        </Carousel.Item>
    )
 })

 

  return (
    <div className="home">
        <h2>Home</h2>
        <h4>Your Favorite Artists: </h4><br/><br/>
        <Carousel>  
            {createCarouselItem}  

    </Carousel>
    
        
    </div>
  )
}

export default Home