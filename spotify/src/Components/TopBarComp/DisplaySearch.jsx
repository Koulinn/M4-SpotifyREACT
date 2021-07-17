import React from 'react'
import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import CardComp from '../SharedComp/CardComp'

function DisplaySearch(props) {
    const [musics, setMusics] = useState([])

    useEffect(() =>
        getDataFromAPI()
        , [props.searchValue])

    const getDataFromAPI = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=` + props.searchValue)

            if (response.ok) {
                let dataRequested = await response.json()
                setMusics(dataRequested.data)
            }
        } catch (e) {
            return e
        }
    }

    return (
        <section className="row d-flex flex-column mt-3 py-0 px-4 m-0" id='searchResults'>
            <div className="col-12 p-0 d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                    <h3 className="m-0" style={{color: 'white'}}>
                        Search Results
                    </h3>
                   
                </div>

                <span className="seeMore">FILTER</span>
            </div>
            <Row className="row d-flex px-0 justify-content-between cardDeck">
                {musics.length != 0 && musics.map((music, i) => <CardComp key={i} setCurrentMusic={props.setCurrentMusic} music={music} responsiveness="d-flex card flex-nowrap card-square"></CardComp>)}
            </Row>
        </section>
    )
}

export default DisplaySearch
