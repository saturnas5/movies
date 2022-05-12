import React from "react";

const Filter = ({ onPopularitySelect }) => {


    
    return (
        <>
            <div className="container">
                <div className="filter">
                    <select className='filter__sort-slect' name="sort" id="" onChange={e => onPopularitySelect(e)}>
                        <option className='filter__sort-select-option' value="popularityDescending">Popularity Descending</option>
                        <option className='filter__sort-select-option' value="popularityAscending">Popularity Ascending</option>
                        <option className='filter__sort-select-option' value="releaseDateDescending">Release Date Descending</option>
                        <option className='filter__sort-select-option' value="releaseDateAscending">Release Date Ascending</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Filter;