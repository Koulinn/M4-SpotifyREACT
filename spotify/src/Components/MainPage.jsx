import React, {useEffect} from 'react'
import Sections from './Sections'
import TopBar from './TopBarComp/TopBar'

export default function MainPage(props) {

    useEffect(()=> props.setpathName(props.location.pathname))
    return (
        <main className="container-fluid p-0 m-0">
            {console.log(props)}
            <TopBar></TopBar>
            <Sections sectionTitle="Chill"></Sections>
            <Sections sectionTitle="Summer"></Sections>
            <Sections sectionTitle="Party"></Sections>
            <Sections sectionTitle="Weekend"></Sections>
        </main>
    )
}
