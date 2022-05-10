import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import YouTube, {YouTubeProps} from "react-youtube";

const Popup = ({trailers ,className, onClose}) => {
    const [paused, setPaused] = useState(false)
    let officialTrailer = trailers.filter(trailer => trailer.name.includes('Official'));

    function stopVideo(e) {
        if(paused === false) {
            setPaused(true)
            onClose()
        } else {
            setPaused(false)
            onClose()
        }
    }

    return (
        <div className={className} id='popup'>
            <div className="popup__content">
                <input type="submit" onClick={() => {
                    stopVideo();
                }} className="popup__close" value='&times;'/>
                <YouTube
                    style={{height: '100%'}}
                    videoId={trailers.length > 0 ? officialTrailer[0].key : ''}
                    opts={{height: '100%', width: '100%', paused: paused}}
                />
            </div>
        </div>
    )
}

export default Popup;