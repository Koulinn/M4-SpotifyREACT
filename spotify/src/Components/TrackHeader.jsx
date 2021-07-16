import React from 'react'
import {withRouter} from 'react-router-dom'
import { useState, useEffect } from 'react'

function TrackHeader(props) {
    const [trackList, setTrackList] = useState([])

useEffect(()=>getDataFromAPI() ,[])
    const getDataFromAPI = async () => {
        try {
            let response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/` + props.currentAlbumID, {
                method:'GET',
                headers: {
                    "x-rapidapi-key": "7936e2646fmsheda4961f0b64102p1feadcjsn42edaa043d62",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                }
            })
            if(response.ok){
                let dataRequested = await response.json()
                console.log(dataRequested.tracks.data)  
                setTrackList(dataRequested)         
            }
        } catch (e) {
            return e
        }
    }


    return (
        <section id="trackTable" class="row d-flex flex-column mx-0  mt-3 py-0 mb-5">
            {/* {console.log(props.currentTrackList, ' <<<<<<<<currentTrackList')} */}
                <div class="container-fluid p-0 m-0">
                    <div id="tableHeader" class="row justify-content-between p-0 px-4 m-0">
                        <div class="trackNumber d-flex justify-content-center align-items-center"><span>#
                        </span></div>
                        <div class="col-md-5 col-8 trackName d-flex align-items-center"><span>TITLE</span></div>
                        <div class="col trackAlbum d-none d-md-flex justify-content-center align-items-center">
                            <span>ALBUM</span>
                        </div>
                        <div class="col trackDateAdded d-none d-lg-flex justify-content-center align-items-center">
                            <span>Rank</span>
                        </div>
                        <div class="col trackDuration d-flex justify-content-center align-items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                    {/* {add tracks here} */}
               
                </div>
            </section>
    )
}

export default withRouter(TrackHeader)
