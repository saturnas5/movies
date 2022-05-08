import React from "react";

const Pagination = ({page, setPage}) => {


    return (
        <>
            <div className="pagination">
                <button className='pagination__button' onClick={() => {
                    if(page > 1) setPage(page => page - 1);
                }}>Back</button>
                <input className='pagination__input' type="number" value={page} onChange={e => setPage(e.target.value)}/>
                <button className='pagination__button' onClick={() => setPage(page => page + 1)}>Next</button>
            </div>
        </>
    )
}

export default Pagination;