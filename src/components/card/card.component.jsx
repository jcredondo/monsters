import React from 'react';
import './card.styles.css'

const Card = ({ monster }) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${monster.id}?set=set1&size=180x180`} alt="" />
            <h2>{monster.name}</h2>
        </div>
    )
}

export default Card
