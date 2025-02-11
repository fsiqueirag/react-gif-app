import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGIfs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__pulse">Loading</p>}

            <div className="card-grid">
                {images.map((img) => {
                    return <GifGridItem
                        key={img.id}
                        {...img}
                    />
                })}
            </div>
        </>
    )
}
