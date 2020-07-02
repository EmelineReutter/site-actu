import React from 'react'

import './gros-titres.css'

import Article from '../article/article'

export default function GrosTitres() {
    return (
        <div className="gros-titres">
            <div className="container-gros-titres">
                <div className="container-article-principal">
                    <Article className="article-principal img" srcImage="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/Rocketman-Review.jpg" />
                </div>
                <div className="container-autres-articles">
                    <Article
                        srcImage="https://images.unsplash.com/photo-1587613864521-9ef8dfe617cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
                        categorie="Cannes 2019"
                        titre="Parasite, c'est vraiment la Palme d'or idéale"
                        tempsDeLecture={6} />
                    <Article
                        srcImage="https://www.maxitendance.com/wp-content/uploads/2017/12/street-photographie-tokyo-japon-rk-3.jpg"
                        categorie="Cannes 2019"
                        titre='Mati Diop, la "nouvelle vague" de Dakar '
                        tempsDeLecture={6} />
                    <Article
                        srcImage="https://www.numero.com/sites/default/files/images/article_new/slides/genesiscmaxime_passadore_1numero-magazine-maxime-passadore-photo-art-digital-odissey-transhumanism-genesis-tokyo-japan.jpg"
                        categorie='Cannes 2019'
                        titre="Richard Madden, de 'Game of Thrones'à 'Rocketman' : itinéraire d'un enfant gâté"
                        tempsDeLecture={6} />
                </div>
            </div>
        </div>
    )
}
