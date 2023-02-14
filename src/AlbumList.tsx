import React from 'react'
import "./AlbumList.css"
import Album from './type';

type Props = {
    albums: Album[];
    currentAlbums:Album[];
}

function AlbumList(Props:Props) {
    const {albums ,currentAlbums} = Props;
  return (
    <div className='albumGridWrapper'>{currentAlbums.map((album)=>(
        <div key={album.id}>
            <img src={album.url} alt="" />
        </div>
    ))}</div>
  )
}

export default AlbumList