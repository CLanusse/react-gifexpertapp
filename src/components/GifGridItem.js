import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    return (
        <li key={id} className="card animate__animated animate__fadeInLeft">
            <h4>{title}</h4>
            <img src={url} alt=""/>
        </li>
    )
}
