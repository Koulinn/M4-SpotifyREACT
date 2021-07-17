import React from 'react'
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './MainPage'
import PlayerBottom from './playerComps/PlayerBottom'
import AlbumPage from './AlbumPage'
import ArtistPage from './ArtistPage'
import SideBar from './SideBar/SideBar'
import {useState, useEffect} from 'react'

function Home(props) {
    const [pathName, setpathName] = useState(window.location.pathname)
    const [currentMusic, setCurrentMusic] = useState(false)
    return (
        <Container id="allContentWrapper" className={pathName === '/' ? "p-0 d-flex homeBG" : "p-0 d-flex BGAlbumPage" } fluid>
                    
            <Router>
                <SideBar></SideBar>
        
                <Route path="/" exact render={(routerProps)=> <MainPage {...routerProps} setCurrentMusic={setCurrentMusic} setpathName={setpathName}></MainPage>}></Route>
                <Route path="/albumPage/:albumID" exact render={(routerProps)=> <AlbumPage setCurrentMusic={setCurrentMusic} {...routerProps} setpathName={setpathName}></AlbumPage>}></Route>
                <Route path="/artistPage/:artistID" exact render={(routerProps)=> <ArtistPage setCurrentMusic={setCurrentMusic} {...routerProps}></ArtistPage>}></Route>

                <PlayerBottom currentMusic={currentMusic}></PlayerBottom>
            </Router>
            
        </Container >
    );
}

export default Home