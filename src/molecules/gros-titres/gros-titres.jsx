import React from 'react'

import './gros-titres.css'

import Article from '../article/article'

export default function GrosTitres() {
    return (
        <div className="gros-titres">
            <Article />
            <Article
                src="/image/affiche1.jpg"
                categorie='Cannes'
                titre='Parasite'
                tempsDeLecture={6} />
            <Article
                src="/image/affiche2.jpg"
                categorie='Cannes'
                titre='Parasite'
                tempsDeLecture={6} />
            <Article
                src="/image/affiche3.jpg"
                categorie='Cannes'
                titre='Parasite'
                tempsDeLecture={6} />
        </div>
    )
}
