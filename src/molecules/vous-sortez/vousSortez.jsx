import React from 'react'

import "./vousSortez.css"

import Titre from '../../atoms/titre/titre'
import Ligne from '../../atoms/ligne/ligne'
import Article from '../../atoms/article/article'

import Bouton from '../bouton/bouton'
import ContenusSponsorises from '../../atoms/contenu-sponsorise/contenuSponsorise'

export default function VousSortez() {
    return (
        <div className="vous-sortez">
            <div className="titre-vous-sortez">
                <Titre />
                <Ligne />
                <Titre />
                <div className="les-sorties-cinema-de-la-semaine">

                    <Article
                        genreDuFilm="film documentaire"
                        titreFilm="Le Char et l'Olivier, une autre histoire de la Palestine"
                        auteurFilm="Roland Nurier" />
                    <Article
                        genreDuFilm="film d'animation"
                        titreFilm="J'ai perdu mon corps"
                        auteurFilm="Jérémy Clapin" />
                    <Article
                        genreDuFilm="Drame sentimental"
                        titreFilm="J'accuse"
                        auteurFilm="Roman Polanski" />
                    <Article
                        genreDuFilm="Film documentaire"
                        titreFilm="L'Âme du vin"
                        auteurFilm="Marie Ange Gorbanevsky" />
                    <Article
                        genreDuFilm="Drame"
                        titreFilm="Le Mans 66"
                        auteurFilm="James Mangold">
                        <Bouton
                            nombreDarticleRestant={7}
                            typeDeContenu="films"
                            titre="Voir tous les films" />
                    </Article>

                </div>
            </div>
            <div className="container-selections-recommandations">
                <div className="colonne-gauche-selections-evenements">

                    <div className="les-selections-de-la-redaction">
                        <Article
                            src="images/article1.jpeg"
                            categorie="Sortir - Expo"
                            titreArticle="Photo les 11 expos (...)"
                            tempsDeLecture={6} />
                        <Article
                            src="images/article2.jpeg"
                            categorie="Sortir - Expo"
                            titreArticle="Les 19 expositions (...)"
                            tempsDeLecture={6} />
                        <Article />
                        <Article
                            src="images/article3.jpeg"
                            categorie="Sortir - Resto"
                            titreArticle="A paris (...)"
                            tempsDeLecture={6} />
                        <Pub src="images/pub1.jpeg" />
                    </div>
                    <div className="les-selections-enfants-de-la-redaction">
                        <Article
                            src="images/article1.jpeg"
                            categorie="Sortir - Expo"
                            titreArticle="Vos enfants connaissent-ils la Joconde ? (...)"
                            tempsDeLecture={6} />
                        <Article
                            src="images/article2.jpeg"
                            categorie="Sortir - Expo"
                            titreArticle="Le studio Harry Potter (...)"
                            tempsDeLecture={6} />
                    </div>
                    <div className="les-evenemnts-telerama-du-moment">
                        <Article
                            categorie=" Sortir - Expo"
                            titreArticle="Pass Art Contemporain Télérama"
                            dateEvenement="Dès le 16 octobre, Dans + de 50 musées en France" />
                        <Article
                            categorie=" Sortir - Expo"
                            titreArticle="Pass Art Contemporain Télérama"
                            dateEvenement="Dès le 16 octobre, Dans + de 50 musées en France" />
                    </div>
                    <div className="abonnement-telerama">
                        <Titre />
                        <Article
                            titreArticle="Samedi Séries: -25%"
                            PhraseDaccroche="Débats,rencontres, masterlasses!">
                            <Image
                                src="images/article1.jpeg"
                                duree={1.30} />
                        </Article>
                        <Article
                            titreArticle="La Nuit du Cirque: -30%"
                            PhraseDaccroche="Le cirque de création (...)">
                            <Image
                                src="images/article2.jpeg"
                                duree={1.30} />
                        </Article>
                        <Article
                            src="images/article3.jpeg"
                            titreArticle=" Sortie 3 -15%"
                            PhraseDaccroche="Lorem (...)" >
                            <Bouton
                                nombreDarticleRestant={10}
                                titre="Voir toutes les sorties"
                                typeDeContenu="réductions" />
                        </Article>
                        <Titre />
                        <Bouton titre="Je m'abonne" />
                        <Titre />
                    </div>
                </div>
                <div className="colonne-droite-boutons-recommandations">
                    <div className="boutons-recommandations">
                        <Bouton
                            iconeDeGauche={<StarOutlined />}
                            titre="Spectacles" />
                        <Bouton
                            iconeDeGauche={<TagsOutlined />}
                            titre="Expositions" />
                        <Bouton
                            iconeDeGauche={<SoundOutlined />}
                            titre="Concerts" />
                        <Bouton
                            iconeDeGauche={<TeamOutlined />}
                            titre="Enfants" />
                        <Bouton
                            iconeDeGauche={<FilterOutlined />}
                            titre="Clubbing" />
                        <Bouton
                            iconeDeGauche={<ShopOutlined />}
                            titre="Restaurants" />
                        <Bouton
                            iconeDeGauche={<CoffeeOutlined />}
                            titre="Bars" />
                        <Bouton
                            iconeDeGauche={<ShoppingCartOutlined />}
                            titre="Boutiques" />
                        <Bouton
                            iconeDeGauche={<ShoppingOutlined />}
                            titre="Voyages" />
                    </div>
                </div>
            </div>
            <div className="contenus-sponsorises">
                <Titre />
                <ContenusSponsorises />
            </div>
        </div>
    )
}