import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

function CardComp(props) {
    
    return (
        <div className={props.responsiveness}>
               <div className="position-relative">
                    <div className="position-absolute d-flex justify-content-center align-items-center cardPlayBtnBg" value="49675972" onclick="getTrackFromAPI(event)">
                        <div className="cardPlayBtn">
                        </div>
                    </div>
                    <a href={props.music.id}>
                        <img src={props.music.album.cover_medium} className="card-img-top" alt="..."/>
                    </a>
               </div>
                <div className="card-body card-bodymod px-0">
                <Link to={"/albumPage/" + props.music.album.id} >
                    <h5 className="card-title text-truncate card-title-mod">{props.music.album.title}</h5>
                </Link>
                <Link to={"/artistPage/" + props.music.artist.id}>
                     <p className="card-text card-text-mod">{props.music.artist.name}</p>
                </Link>
                </div>
            </div>
    )
}

export default withRouter(CardComp)
