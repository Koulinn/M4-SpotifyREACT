import React from 'react'
import MusicStats from './MusicStats'
import Player from './Player'
import SideControl from './SideControl'

export default function PlayerBottom() {
    return (
        <footer id="footer" className="d-flex justify-content-between">
            <MusicStats></MusicStats>
            <Player></Player>
            <SideControl></SideControl>
            
        </footer>
    )
}
