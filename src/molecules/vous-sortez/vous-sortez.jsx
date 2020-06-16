import React from 'react'

import "./vous-sortez.css"

import Titre from '../../atoms/titre/titre'
import Ligne from '../../atoms/ligne/ligne'
import Article from '../article/article'
import Pub from '../../atoms/pub/pub'
import Image from '../../atoms/image/image'

import Bouton from '../bouton/bouton'
import ContenusSponsorises from '../contenus-sponsorises/contenus-sponsorises'

import { StarOutlined, TagsOutlined, SoundOutlined, TeamOutlined, FilterOutlined, ShopOutlined, ShoppingCartOutlined, CoffeeOutlined, ShoppingOutlined } from '@ant-design/icons';

export default function VousSortez() {
    return (
        <div className="vous-sortez">
            <div className="titre-vous-sortez">
                <Titre graisse="bold" color="black">
                    Vous sortez ?
                </Titre>
                <Ligne />
                <Titre graisse="bol" color="black">
                    Les sorties cinémas de la semaine
                </Titre>
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
                            titre="Voir tous les films" >
                            Voir tous les films
                        </Bouton>
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
                        <Titre color="black" graisse="bold">
                            Les séléctions enfants de la rédaction
                        </Titre>
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
                    <div className="les-evenements-telerama-du-moment">
                        <Titre color="black" graisse="bold">
                            Les événements Télérama du moment
                        </Titre>
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
                        <Titre graisse="bold" color="black">
                            Abonnez-vous à Télérama et bénéficiez de tarifs réduits sur une sélection de sorties.
                        </Titre>
                        <Article
                            titreArticle="Samedi Séries: -25%"
                            PhraseDaccroche="Débats,rencontres, masterlasses!">
                            <Image
                                src="images/article1.jpeg" />
                        </Article>
                        <Article
                            titreArticle="La Nuit du Cirque: -30%"
                            PhraseDaccroche="Le cirque de création (...)">
                            <Image
                                src="images/article2.jpeg" />
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
                        <Bouton titre="Je m'abonne" backgroundColor="black" color="yellow" >
                            Je m'abonne
                        </Bouton>
                    </div>
                </div>
                <div className="colonne-droite-boutons-recommandations">
                    <div className="boutons-recommandations">
                        <Titre graisse="bold" color="black"> Nos recommandations </Titre>
                        <Bouton
                            iconeDeGauche={<StarOutlined />}
                            titre="Spectacles" >
                            Spectacles
                        </Bouton>
                        <Bouton
                            iconeDeGauche={<TagsOutlined />}
                            titre="Expositions" >
                            Expositions
                        </Bouton>
                        <Bouton
                            iconeDeGauche={<SoundOutlined />}
                            titre="Concerts" >
                            Concerts
                        </Bouton>
                        <Bouton
                            iconeDeGauche={<TeamOutlined />}
                            titre="Enfants" >
                            Enfants
                        </Bouton>
                        <Bouton
                            iconeDeGauche={<FilterOutlined />}
                            titre="Clubbing" >
                            Clubbing
                        </Bouton>
                        <Bouton
                            iconeDeGauche={<ShopOutlined />}
                            titre="Restaurants" >
                            Restaurants
                        </Bouton>
                        <Bouton
                            iconeDeGauche={<CoffeeOutlined />}
                            titre="Bars" >
                            Bars
                        </Bouton>
                        <Bouton
                            iconeDeGauche={<ShoppingCartOutlined />}
                            titre="Boutiques" >
                            Boutiques
                        </Bouton>
                        <Bouton
                            iconeDeGauche={<ShoppingOutlined />}
                            titre="Voyages" >
                            Voyages
                        </Bouton>
                    </div>
                </div>
            </div>
            <div className="contenus-sponsorises">
                <ContenusSponsorises />
            </div>
        </div>
    )
}