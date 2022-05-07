import React from "react";

const Actors = ({actor}) => {

    return (
        <>
                <div className="actors__item">
                    <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt="" className="actors__item-img"/>
                    <span className="actors__name">{actor.name}</span>
                    <span className="actors__role">{actor.character}</span>
                </div>
        </>
    )
}

export default Actors;