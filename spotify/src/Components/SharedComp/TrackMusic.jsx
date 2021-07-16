import React from 'react'

function TrackMusic(props) {
    console.log(props.track)
    return (
        <div class="row justify-content-between p-0 py-3 px-4 m-0 trackStats">
            <div class="trackNumber d-flex justify-content-center align-items-center">
                <span class=" d-flex align-items-center justify-content-center modTranslate">{props.index + 1}</span>
            </div>
            <div class="col-md-5 col-8 trackName d-flex align-items-center">
                <img src={props.album.cover_small} alt=""/>
                <div class="d-flex flex-column pl-3 tableMusicTitle ">
                    <p class="text-truncate m-0 p-0">{props.track.title}</p>
                    <span class="mod-font-size-small mod-text-colorFadedWhite m-0 p-0">{props.track.artist.name}</span>
                </div>
            </div>
            <div class="col trackAlbum d-none d-md-flex justify-content-center align-items-center mod-font-size-small mod-text-colorFadedWhite">
                {props.album.title}</div>
            <div class="col trackDateAdded d-none d-lg-flex justify-content-center align-items-center mod-font-size-small mod-text-colorFadedWhite">
                {props.album.release_date}</div>
            <div class="col p-0 trackDuration d-flex justify-content-center align-items-center  mod-font-size-small mod-text-colorFadedWhite">
                <span>{((props.track.duration) / 60).toFixed() + ':' +(props.track.duration % 60) }</span>
            </div>
        </div>
    )
}

export default TrackMusic
