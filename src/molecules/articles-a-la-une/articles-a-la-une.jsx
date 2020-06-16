import React from 'react'

import './articles-a-la-une.css'

import Article from '../article/article'
import Pub from '../../atoms/pub/pub'
import Newsletter from '../../atoms/newsletter/newsletter'
import TopCategoriesLesPlusLus from '../categories-les-plus-lus/categories-les-plus-lus'
import Bouton from '../bouton/bouton'

export default function ArticlesALaUne() {
    return (
        <div className="articles-a-la-une">

            <div className="titre-section">
                <h2>A la une</h2>
                <div className="divider"></div>
            </div>

            <div className="contenu-section">

                <div className="colonne-gauche">

                    <div className="container-articles">
                        <Article
                            src='/image/article1.jpg'
                            categorie='Écrans & TV'
                            titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?'
                            tempsDeLecture={4} />
                        <Article
                            src='/image/article2.jpg'
                            categorie='Écrans & TV'
                            titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?'
                            tempsDeLecture={4} />
                        <Article
                            src='/image/article3.jpg'
                            categorie='Écrans & TV'
                            titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?'
                            tempsDeLecture={4} />
                        <Article
                            src='/image/article4.jpg'
                            categorie='Écrans & TV'
                            titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?'
                            tempsDeLecture={4} />
                        <Pub />
                        <Article
                            src='/image/article5.jpg'
                            categorie='Écrans & TV'
                            titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?'
                            tempsDeLecture={4} />
                        <Article
                            src='/image/article6.jpg'
                            categorie='Écrans & TV'
                            titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?'
                            tempsDeLecture={4} />
                    </div>

                    <div className="dossiers">
                        <Article
                            src='/image/dossier/article1.jpg'
                            titre="L'affaire Polanski"
                            resumeArticle="Alors que j'accuse sort en salle (...)" />
                        <Article
                            src='/image/dossier/article2.jpg'
                            titre="Violences conjugales"
                            resumeArticle="(...)" />
                    </div>

                    <Newsletter
                        src='/image/newsletter/pub.jpg'
                        titre="Nos newsletters"
                        texteExplicatif="Retrouvez le meilleur de telerama (...)"
                    >
                        <Bouton backgroundColor="red" color="white">
                            M'inscrire
                        </Bouton>
                    </Newsletter>

                </div>

                <div className="colonne-droite">

                    <div className="les-plus-lus">
                        <TopCategoriesLesPlusLus
                            classement={1}
                            titreCategorie="Musiques"
                            titreArticle="La colère monte dans le Jazz après les victoires (...)" />
                        <TopCategoriesLesPlusLus
                            classement={2}
                            titreCategorie="Radio & Podcasts"
                            titreArticle="Dire je suis lesbienne (...)" />
                        <TopCategoriesLesPlusLus
                            classement={3}
                            titreCategorie="Musiques"
                            titreArticle=" platine TTT (...)" />
                        <TopCategoriesLesPlusLus
                            classement={4}
                            titreCategorie="Cinéma"
                            titreArticle="Les accusations d'Adèle Haenel (...)" />
                    </div>

                    <Pub src="image/pub3.jpeg" />

                    <Pub src="image/pub4.jpeg" />

                </div>
            </div>
        </div>
    )
}
