import React from 'react'
import Sections from './Sections'
import AlbumCover from './SharedComp/AlbumCover'
import TopBar from './TopBarComp/TopBar'
import { withRouter } from 'react-router'
import { useState, useEffect } from 'react'

function AlbumPage(props) {

    return (
        <main className="container-fluid p-0 m-0">
            <TopBar></TopBar>
            <AlbumCover currentAlbumID={props.match.params.albumID}></AlbumCover>
            <Sections sectionTitle="Chill"></Sections>
            <Sections sectionTitle="Summer"></Sections>
            <Sections sectionTitle="Party"></Sections>
            <Sections sectionTitle="Weekend"></Sections>
        </main>
    )
}

export default withRouter(AlbumPage)
