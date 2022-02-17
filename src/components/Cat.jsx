import React from 'react'
import './Components.css'

export const Cat = ({name, id, price, imageUrl}) => {
    console.log('imageUrl: ', imageUrl)
    return (
        <div className='CatContainer'>
            <img src={imageUrl} width={250} height={250} alt={name}/>
            <h2>{name}</h2>
            <h2>£{price}</h2>
        </div>
    )

}