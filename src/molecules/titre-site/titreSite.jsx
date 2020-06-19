import React from 'react'

import './titreSite.css'

export default function TitreSite({ children }) {
    return (
        <div className="container-titre-site">
            <h2 className="titre-site"> {children} </h2>
        </div>
    )
}