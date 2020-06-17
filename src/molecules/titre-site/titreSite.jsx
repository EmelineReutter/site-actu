import React from 'react'

export default function TitreSite({ children }) {
    return (
        <div className="titre-site">
            <h1> {children} </h1>
        </div>
    )
}