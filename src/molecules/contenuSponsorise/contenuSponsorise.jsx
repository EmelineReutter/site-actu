import React from 'react'

import './contenuSponsorise.css'

import Article from '../../atoms/article/article'

export default function ContenusSponsorises() {
    return (
        <div className="contenus-sponsorises">
            <Article
                titreArticle="Axa"
                PhraseDaccroche="Petit rouleur ? (...)" />
            <Article
                titreArticle="Oh!MyMag"
                PhraseDaccroche="Iris Mittenaere officialise sa relation (...)" />
            <Article
                titreArticle="Villa Schweppes"
                PhraseDaccroche="La plus déjantée (...)" />
        </div>
    )
}