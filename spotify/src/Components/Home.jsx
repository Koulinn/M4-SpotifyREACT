import React from 'react'
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './MainPage'
import TopBar from './TopBar'
import PlayerBottom from './playerComps/PlayerBottom'
import AlbumPage from './AlbumPage'
import ArtistPage from './ArtistPage'
import SideBar from './SideBar'

export default function Home() {
    return (
        <Container id="allContentWrapper" className="p-0" fluid>
            <Router>
                <SideBar></SideBar>
        
                <Route path="/" exact render={(routerProps)=> <MainPage {...routerProps}></MainPage>}></Route>
                <Route path="/albumPage" exact render={(routerProps)=> <AlbumPage {...routerProps}></AlbumPage>}></Route>
                <Route path="/artistPage" exact render={(routerProps)=> <ArtistPage {...routerProps}></ArtistPage>}></Route>

                <PlayerBottom></PlayerBottom>
            </Router>
            
        </Container >
    );
}
