import React, {useState, useEffect} from "react";
import YouTube from "react-youtube";

const Popup = ({trailers ,className, onClose}) => {
    const [paused, setPaused] = useState(false)
    let trailer = trailers[0].key;


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
                    videoId={trailers.length > 0 ? trailer : ''}
                    opts={{height: '100%', width: '100%', paused: paused}}
                />
            </div>
        </div>
    )
}

export default Popup;