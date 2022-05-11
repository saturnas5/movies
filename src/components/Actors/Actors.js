import React from "react";
import {Link} from "react-router-dom";
import {trim} from "../../utils/utils";

const Actors = ({actor}) => {

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