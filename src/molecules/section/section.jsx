import React from 'react'

export default function Section({ titre, children }) {
    return (
        <div className="section">
            <p>
                {children} Section
            </p>
        </div>
    )
}