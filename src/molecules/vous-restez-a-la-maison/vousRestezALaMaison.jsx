import React from 'react'

import './VousRestezALaMaison.css'

import Titre from '../../atoms/titre/titre'
import Ligne from '../../atoms/ligne/ligne'
import Article from '../../atoms/article/article'

import Image from '../../atoms/image/image'
import Bouton from '../bouton/bouton'
import Pub from '../../atoms/pub/pub'
import ContenusSponsorises from '../../atoms/contenu-sponsorise/contenuSponsorise'

export default function VousRestezALaMaison() {
    return (
        <div className="vous-restez-a-la-maison">
            <div className="titre-vous-restez-a-la-maison">

                <div className="a-regarder-ce-soir">
                    <Titre />
                    <Ligne />
                    <Titre />
                    <Article
                        typeDeContenu="Documentaire"
                        titreContenu="Rohingya, la mécanique du crime"
                        phraseDaccroche="Reportage exceptionnel à voir en replay" >
                        <Image
                            plateformeStreaming="Apple TV"
                            durée={1.30} />
                    </Article>

                    <Article
                        typeDeContenu="Vidéo"
                        titreContenu="Femmes de western au cinéma"
                        phraseDaccroche="Chapeau, Cowgirl !">
                        <Image
                            plateformeStreaming="Youtube"
                            durée={1.30} />
                    </Article>

                    <Article
                        typeDeContenu="Série"
                        titreContenu="Undone - S1"
                        PhraseDaccroche="Par le créateur de Bojack Horseman">
                        <Image
                            plateformeStreaming="Prime video"
                            durée={1.30} />
                    </Article>

                    <Article
                        src="images/article4.jpg"
                        nombreDarticleRestant={3}
                        titre="programmes "
                        titreContenu="France-Modalvie"
                        typeDeContenu="Foot"
                        PhraseDaccroche="Sur la route de l'Euro (...)" >
                        <Button titre="Voir toute la sélection" />
                    </Article>
                </div>

            </div>
            <div className="container-selections-recommandations">
                <div className="colonne-gauche">

                    <div className="les-selections-telerama">
                        <div className="les-selections-de-la-redaction">
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
                            <Titre />
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
                            <Titre />
                            <Article
                                titreArticle="Douleur et gloire"
                                PhraseDaccroche="L'Espagnol (...)">
                                <Image
                                    plateformeStreaming="Canal +"
                                    durée={1.30} />
                            </Article>
                            <Article
                                titreArticle="Old Joy"
                                PhraseDaccroche="Besoin d'air ? (...)">
                                <Image
                                    plateformeStreaming="Netflix"
                                    durée={1.30} />
                            </Article>
                            <Article
                                src="images/article1.jpeg"
                                titreArticle="Petits frères"
                                PhraseDaccroche="Des garçons, une fille (...)">
                                <Bouton
                                    nombreDarticleRestant={30}
                                    typeDeContenu="Films"
                                    titre="Voir tout le catalogue" />
                            </Article>
                            <Bouton titre="S'abonner" />
                            <Titre />
                        </div>
                    </div>

                    <div className="colonne-droite">
                        <div className="nos-recommandations">
                            <Bouton
                                plateformeStreaming="Netflix" />
                            <Bouton
                                plateformeStreaming="Canal +" />
                            <Bouton
                                plateformeStreaming="Prime video" />
                            <Bouton
                                plateformeStreaming="OCS" />
                            <Bouton
                                plateformeStreaming="Apple TV +" />
                            <Bouton
                                plateformeStreaming="Disney +" />
                            <Bouton
                                plateformeStreaming="Youtube" />
                            <Texte />
                            <Bouton titre="Voir le programme TV" />
                            <Pub src="images/pub1.jpeg" />
                        </div>
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