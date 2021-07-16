import React from 'react'
import Sections from './Sections'

import TopBar from './TopBarComp/TopBar'

export default function MainPage() {
    return (
        <main className="container-fluid p-0 m-0">
            <TopBar></TopBar>
            <Sections sectionTitle="Chill"></Sections>
            <Sections sectionTitle="Summer"></Sections>
            <Sections sectionTitle="Party"></Sections>
        </main>
    )
}
