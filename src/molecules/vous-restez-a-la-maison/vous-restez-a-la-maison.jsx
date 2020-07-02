import React from 'react'

import './vous-restez-a-la-maison.css'

import Titre from '../../atoms/titre/titre'
import Ligne from '../../atoms/ligne/ligne'
import Article from '../article/article'

import Image from '../../atoms/image/image'
import BoutonRecommandation from '../bouton-recommandation/boutonRecommandation'
import Pub from '../pub/pub'
import Texte from '../../atoms/texte/texte'
import ContenusSponsorises from '../contenus-sponsorises/contenus-sponsorises'
import Bouton from '../bouton/bouton'

export default function VousRestezALaMaison() {
    return (
        <div className="vous-restez-a-la-maison">
            <div className="titre-vous-restez-a-la-maison">
                <div id="a-regarder-ce-soir">
                    <Titre graisse="bold" color="black">
                        Vous restez à la maison ?
                    </Titre>
                    <Ligne />
                    <Titre graisse="bold" color="black">
                        À regarder ce soir
                    </Titre>
                    <Article
                        typeDeContenu="Documentaire"
                        titreContenu="Rohingya, la mécanique du crime"
                        phraseDaccroche="Reportage exceptionnel à voir en replay" >
                        <Image src="images/image4.jpeg" />
                    </Article>

                    <Article
                        typeDeContenu="Vidéo"
                        titreContenu="Femmes de western au cinéma"
                        phraseDaccroche="Chapeau, Cowgirl !">
                        <Image src="images/image1.jpeg" />
                    </Article>

                    <Article
                        typeDeContenu="Série"
                        titreContenu="Undone - S1"
                        phraseDaccroche="Par le créateur de Bojack Horseman">
                        <Image src="images/image2.jpeg" />
                    </Article>

                    <Article
                        src="images/article4.jpg"
                        nombreDarticleRestant={3}
                        titre="programmes "
                        titreContenu="France-Modalvie"
                        typeDeContenu="Foot"
                        phraseDaccroche="Sur la route de l'Euro (...)" >
                        <Bouton titre="Voir toute la sélection" backgroundColor="red" color="white" >
                            Voir toute la sélection
                        </Bouton>
                    </Article>
                </div>

            </div>
            <div className="container-selections-recommandations-vous-restez">
                <div className="colonne-gauche">

                    <div className="les-selections-telerama">
                        <div className="les-selections-de-la-redaction">
                            <Titre >
                                Les sélections de la rédaction
                            </Titre>
                            <Article
                                typeDeContenu="Écrans & TV .Séries"
                                titreContenu="Notre top 50 (...)"
                                tempsDeLecture={6} />
                            <Article
                                typeDeContenu="Écrans & TV .Séries"
                                titreContenu="Quelles sont les meilleures (...)"
                                tempsDeLecture={6} />
                            <Article
                                typeDeContenu="Écrans & TV .Séries"
                                titreContenu="Quelles sont les meilleures (...)"
                                tempsDeLecture={6} />
                        </div>
                        <div className="les-selections-enfants-de-la-redaction">
                            <Titre graisse="bold" color="black" > Les sélections enfants de la rédaction </Titre>
                            <Article
                                typeDeContenu="Écrans & TV .Télévision"
                                titreContenu="Selection TV enfants (...)"
                                tempsDeLecture={6} />
                            <Article
                                typeDeContenu="Écrans & TV"
                                titreContenu="Halloween (...)"
                                tempsDeLecture={6} />
                        </div>
                        <div className="abonnement-telerama">
                            <Article
                                titreArticle="Douleur et gloire"
                                phraseDaccroche="L'Espagnol (...)">
                                <Image src="images/image4.jpeg" />
                            </Article>
                            <Article
                                titreArticle="Old Joy"
                                phraseDaccroche="Besoin d'air ? (...)">
                                <Image src="images/image3.jpeg" />
                            </Article>
                            <Article
                                src="images/article1.jpeg"
                                titreArticle="Petits frères"
                                phraseDaccroche="Des garçons, une fille (...)">
                                <Bouton
                                    nombreDarticleRestant={30}
                                    typeDeContenu="Films"
                                    titre="Voir tout le catalogue" >
                                    Voir tout le catalogue
                                    </Bouton>
                            </Article>
                            <Titre graisse="bold" color="black">
                                Abonnez-vous à Télérama et profitez gratuitement d'une sélection de films
                            </Titre>
                            <Bouton titre="S'abonner" backgroundColor="black" color="yellow" >
                                S'abonner
                            </Bouton>
                        </div>
                    </div>
                </div>

                <div className="colonne-droite">
                    <div className="nos-recommandations">
                        <Titre graisse="bold" color="black">
                            Nos recommandations
                            </Titre>
                        <BoutonRecommandation
                            plateformeStreaming="Netflix" >
                            Sur
                            </BoutonRecommandation>
                        <BoutonRecommandation
                            plateformeStreaming="Canal +" >
                            Sur
                            </BoutonRecommandation>
                        <BoutonRecommandation
                            plateformeStreaming="Prime video">
                            Sur
                            </BoutonRecommandation>
                        <BoutonRecommandation
                            plateformeStreaming="OCS" >
                            Sur
                            </BoutonRecommandation>
                        <BoutonRecommandation
                            plateformeStreaming="Apple TV +" >
                            Sur
                            </BoutonRecommandation>
                        <BoutonRecommandation
                            plateformeStreaming="Disney +" >
                            Sur
                            </BoutonRecommandation>
                        <BoutonRecommandation
                            plateformeStreaming="Youtube" >
                            Sur
                            </BoutonRecommandation>
                        <Texte />
                        <Bouton titre="Voir le programme TV" backgroundColor="red" color="white">
                            Voir le programme TV
                            </Bouton>
                        <Pub src="images/pub1.jpeg" />
                    </div>
                </div>
            </div>
            <div className="contenus-sponsorises">
                <ContenusSponsorises />
            </div>
        </div>
    )
}