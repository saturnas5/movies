import React from "react";
import {Link} from "react-router-dom";

const Actors = ({actor}) => {

    function trim(name) {
        const chars = {' ': '-', ':': '', '-': '-', "'": '-'};
        return name.trim().toLowerCase().replace(/[' :-]/g, m => chars[m]);
    }

    return (
        <>
            <Link to={{
                pathname: `/actor/${trim(actor.name)}/${actor.id}`,
                actorId: actor.id,
                state: {
                    actorId: actor.id
                }
            }}>
                <div className="actors__item">
                    <figure>
                        <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt="" className="actors__item-img"/>
                    </figure>
                    <span className="actors__name">{actor.name}</span>
                    <span className="actors__role">{actor.character}</span>
                </div>
            </Link>
        </>
    )
}

export default Actors;