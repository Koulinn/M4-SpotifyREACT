import React from 'react'
import Sections from './Sections'
import AlbumCover from './SharedComp/AlbumCover'
import TopBar from './TopBarComp/TopBar'

function AlbumPage() {
    console.log()

    return (
        <main className="container-fluid p-0 m-0">
            <TopBar></TopBar>
            <AlbumCover></AlbumCover>
            <Sections sectionTitle="Chill"></Sections>
            <Sections sectionTitle="Summer"></Sections>
            <Sections sectionTitle="Party"></Sections>
            <Sections sectionTitle="Weekend"></Sections>
        </main>
    )
}

export default AlbumPage
