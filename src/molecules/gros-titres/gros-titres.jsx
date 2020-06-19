import React from 'react'

import './gros-titres.css'

import Article from '../article/article'

export default function GrosTitres() {
    return (
        <div className="gros-titres">
            <div className="container-gros-titres">
                <div className="container-article-principal">
                    <Article>
                        Je suis l'article principal
                    </Article>
                </div>
                <div className="container-autres-articles">
                    <Article
                        src="/images/affiche4.jpg"
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
            </div>
        </div>
    )
}
