import React from 'react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate';
import AlbumList from './AlbumList'
import "./Pagination.css"
import Album from './type';

type Props = {
    albums: Album[];
}

function Pagination(Props: Props) {
    const { albums } = Props;

    const itemsPerPage = 6;

    const [itemsOffset, setItemsOffset] = useState(0);
    const endOffset = itemsOffset + itemsPerPage;
    const currentAlbums = albums.slice(itemsOffset, endOffset)
    const pageCount = Math.ceil(albums.length / itemsPerPage)

    const handlePageClick = (e: { selected: number }) => {
        const newOffset = (e.selected * itemsPerPage) % albums.length;
        console.log(
            `User requested page number ${e.selected}, which is offset ${newOffset}`
        );
        setItemsOffset(newOffset);
    }


    return (
        <div className='albumWrapper'>
            <AlbumList albums={albums} currentAlbums={currentAlbums} />

            <div className='paginationWrapper'>
                <ReactPaginate pageCount={pageCount} onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                // renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}

export default Pagination