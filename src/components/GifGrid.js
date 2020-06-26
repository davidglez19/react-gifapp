import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
    
    const { data, loading } =  useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>
        
        <div className="card-content">
                { loading && <p>Cargando...</p>}
                {
                    data.map( img => {
                      return  <GifGridItem 
                            key = {img.id} 
                            // img = { img }
                            { ... img}
                         />
                    })
                }
        </div>
        </>
    )
}
