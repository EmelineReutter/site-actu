import React from 'react'

export default function TitreSite({ children }) {
    return (
        <div className="titre-site">
            <h2> {children} </h2>
        </div>
    )
}