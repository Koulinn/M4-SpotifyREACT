import React from 'react'
import Sections from './Sections'
import AlbumCover from './SharedComp/AlbumCover'
import TopBar from './TopBarComp/TopBar'
import { withRouter } from 'react-router'
import { useState, useEffect } from 'react'
import AlbumMiddleSection from './AlbumMiddleSection'
import TrackHeader from './TrackHeader'

function AlbumPage(props) {
    const [currentTrackList, setCurrenTrackList] = useState('')

    return (
        <main className="container-fluid p-0 m-0">
            <TopBar></TopBar>
            <AlbumCover getTrackList={setCurrenTrackList} currentAlbumID={props.match.params.albumID}></AlbumCover>
            <AlbumMiddleSection></AlbumMiddleSection>
            <TrackHeader currentAlbumID={props.match.params.albumID}></TrackHeader>
            <Sections sectionTitle="Chill"></Sections>
            <Sections sectionTitle="Summer"></Sections>
            <Sections sectionTitle="Party"></Sections>
            <Sections sectionTitle="Weekend"></Sections>
        </main>
    )
}

export default withRouter(AlbumPage)
