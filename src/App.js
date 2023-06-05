import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Container } from 'react-bootstrap'; 
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Friends from './Components/Friends';
import PlaylistData from './Components/PlaylistData';
import SongLibrary from './Components/SongLibrary';
import Home from './Components/Home';
import { useState, useEffect } from 'react';
import AddFriend from './Components/AddFriend';




//Music Playlist Social Media App
//Way for users to add and delete songs to the database
//way for users to add and delete songs to a playlist





export default function App() {

  let url = `https://64797baca455e257fa633c34.mockapi.io/api/friends`
  let url2 = `http://localhost:3600/songs`
  let url3 = `http://localhost:3600/favoriteSongs`
  let url4 = `http://localhost:3600/playlist1`
    let [friends, setFriends] = useState([]);

    useEffect(() => {
        fetchFriends();
        
        async function fetchFriends() {
            let friends = await fetch(`${url}`);
            friends = await friends.json();
            setFriends(friends);
        } 

    


    },[]); 


    let [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchSongs();
        
        async function fetchSongs() {
            let songs = await fetch(`${url2}`);
            songs = await songs.json();
            setSongs(songs);
        }

    },[]);

    let [favSongs, setFavSongs] = useState([]);

    useEffect(() => {
        fetchFavSongs();
        
        async function fetchFavSongs() {
            let favSongs = await fetch(`${url3}`);
            favSongs = await favSongs.json();
            setFavSongs(favSongs);
        }

    },[]);

    let [playlist1, setPlaylist1] = useState([]);

    useEffect(() => {
        fetchPlaylist1();
        
        async function fetchPlaylist1() {
            let playlist1 = await fetch(`${url4}`);
            playlist1 = await playlist1.json();
            setPlaylist1(playlist1);
        }

    },[]);



  return (
      <Container>
      <Router>
        <div>
          <ButtonGroup>
            <Button variant="outline-light" size="lg">
            <Link to="/">Home</Link>
            </Button>
            <Button variant="outline-light" size="lg">
            <Link to="/songLibrary" >Library</Link>
            </Button>
            <Button variant="outline-light" size="lg">
            <Link to="/friends">Friends</Link>
            </Button>
            <Button variant="outline-light" size="lg">
            <Link to="/playlists">Playlists</Link>
            </Button>
          </ButtonGroup>
        
          
          
         <Switch>
          <Route path="/songLibrary">
            <SongLibrary songList = {songs}/>
          </Route>
          <Route path="/friends">
            <Friends friendsList = {friends}/>
          </Route>
          <Route path="/addFriend">
            <AddFriend/>
          </Route>
          <Route path="/playlists">
           <PlaylistData playlist1 = {playlist1}/>
          </Route>
          <Route path="/">
            <Home favSongs = {favSongs}/>
          </Route>
         </Switch>
        </div>
         
      </Router>
      </Container>
  );
}
