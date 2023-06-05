import React from 'react'
import { Carousel } from 'react-bootstrap'

function Home({favSongs}) {

console.log(favSongs); 
    
 const createCarouselItem = favSongs.map((song, i) => {
    return (
        <Carousel.Item key={i}>
            <img className ="d-block w-50 mx-auto" src= {song.img}/>
        </Carousel.Item>
    )
 })

 

  return (
    <div className="home">
        <h2><u>Current Listening</u> </h2><br/><br/>
        <Carousel>  
            {createCarouselItem}  
    </Carousel>
    
        
    </div>
  )
}

export default Home