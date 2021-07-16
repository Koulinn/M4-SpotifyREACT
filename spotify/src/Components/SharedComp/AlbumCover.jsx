import React from 'react'
import { withRouter } from 'react-router'
import { useState, useEffect } from 'react'



function AlbumCover(props) {
    const [album, setAlbum] = useState(null)
    const [currentAlbumId, setCurrentAlbumId] = useState('')

    useEffect(()=>
        getDataFromAPI(props.match.params.albumID)
    ,[])



    useEffect(()=>console.log(album),[currentAlbumId])
    
    const getDataFromAPI = async (query) => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/` + query)
            let dataRequested = await response.json()
            setAlbum(dataRequested)
        } catch (e) {
            return e
        }
    }





    return (

        <section id="albumCover" className="row d-flex flex-column mt-3 py-0 px-4 m-0">
            
            {album !== null &&  (
               
            <div className=" col-12 jumbotron jumbotron-fluid bg-transparent p-0">
                <div className="container d-flex p-0 m-0">
                    <div className="d-inline-block album-img">
                        <img src={album.cover_xl} alt=""/>
                                </div>
                        <div className="d-flex flex-column justify-content-end ml-4">
                           <div className="pb-3">
                                <span className="seeMore">{album.genres.data[0].name} </span>
                                <h1 className="m-0">{album.title}</h1>
                           </div>
                            <div className="albumStats">
                                <p className="mb-2">{album.artist.name}</p>
                                <div className="d-flex">
                                    <p className="mb-0">
                                        <span><a>Spotify</a></span>
                                        <span> .</span>
                                        <span> {album.fans} fans</span>
                                        <span> .</span>
                                        <span> {album.nb_tracks} songs</span>
                                        
                                        <span id="albumTotalDur"> {(album.duration/60).toFixed()} min</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default withRouter(AlbumCover)
