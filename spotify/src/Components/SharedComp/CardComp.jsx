import React from 'react'

function CardComp(props) {
    console.log(props)
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
                <a href="albumPage.html?album_Id=49675972">
                    <h5 className="card-title text-truncate card-title-mod">{props.music.album.title}</h5>
                </a>
                <a href="artistPage.html?album_Id=49675972">
                     <p className="card-text card-text-mod">{props.music.artist.name}</p>
                </a>
                </div>
            </div>
    )
}

export default CardComp
