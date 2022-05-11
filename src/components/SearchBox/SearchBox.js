import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const SearchBox = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);


    // After clicking on link we clear search input but leaving last search result array.
    // When search input is focused again its showing last search results.
    async function fetchSearch(e) {
        setSearch(e.target.value);
        if(e.target.value.length >= 2) {
            let query = await search;
            let respone = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7a3b49c7c8b83d82c01a03cbffff698d&language=en-US&page=1&include_adult=false&query=${query}`)
            let data = await respone.json()
            setResults(data.results)
        }
    }

    function trim(name) {
        const chars = {' ': '-', ':': '', '-': '-'};
        return name.trim().toLowerCase().replace(/[ :-]/g, m => chars[m]);
    }

    return (
        <>
            <div className="header__search-box">
                <input onChange={e => fetchSearch(e)} value={search} type="text" className="search-box__input"/>
                {results.length > 0 && <div className="search-box__output active">
                    <ul className="search-box__output-list">
                        {results.length > 0 && results.map(result => {
                            return <li className='search-box__output-list-item' key={result.id}><Link onClick={e => setSearch('')} className='search-box__link' to={{
                                pathname: `/movie/${trim(result.title)}/${result.id}`,
                                id: result.id,
                                state: {
                                    id: result.id
                                }
                            }}>{result.title}</Link></li>
                        })}
                    </ul>
                </div>}
            </div>
        </>
    );
}

export default SearchBox;