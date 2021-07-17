import React from 'react'
import TopBar from './TopBar'
import {useState} from 'react'
import DisplaySearch from './DisplaySearch'

function Search(props) {
    const [searchValue, setSearchValue] = useState('')
    return (
        <main className="container-fluid p-0 m-0">
            <TopBar setSearchValue={setSearchValue} ></TopBar>
            <DisplaySearch setCurrentMusic={props.setCurrentMusic} searchValue={searchValue}></DisplaySearch>
        </main>
    )
}

export default Search
