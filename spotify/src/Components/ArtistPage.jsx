import React from 'react'
import Sections from './Sections'
import TopBar from './TopBarComp/TopBar'
import { withRouter } from 'react-router'
import CommentSection from './CommentArea/CommentSection'


function ArtistPage() {
    return (
        <main className="container-fluid p-0 m-0">
            <TopBar></TopBar>
            <CommentSection></CommentSection>
            <h1>ArtistPage</h1>

            {/* <Sections sectionTitle="Artist"></Sections>
            <Sections sectionTitle="Summer"></Sections>
            <Sections sectionTitle="Party"></Sections>
            <Sections sectionTitle="Weekend"></Sections> */}
        </main>
    )
}

export default withRouter(ArtistPage)
