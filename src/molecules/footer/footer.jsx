import { Mentions } from "antd";
import React from 'react'
import './footer.css'

import Titre from '../../atoms/titre/titre'
import Bouton from '../bouton/bouton'
import Texte from '../../Atoms/texte/texte'

import LogoFacebook from ''
import LogoTwitter from ''
import LogoInstagram from ''
import LogoYoutube from ''
import Logo from ''

import Categorie from '../../atoms/categorie/categorie'
import SousCategorie from '../../atoms/sous-categorie/sousCategorie'

import Site from '../../atoms/site/site'
import MentionsLegales from '../../atoms/mentions-legales/mentionsLegales'



export default function Footer() {
    return (
        <div className="footer">
            <div className="titre-footer">
                <Titre />
                <div className="navBar-reseaux-sociaux">
                    <LogoFacebook />
                    <LogoTwitter />
                    <LogoInstagram />
                    <LogoYoutube />
                    <Logo />
                </div>
            </div>
            <div className="colonne-gauche">
                <div className="rubriques-gauche">
                    <Categorie titre="Cinéma" />
                    <Categorie titre="Écrans & TV">
                        <SousCategorie titre="Télévision" />
                        <SousCategorie titre="Séries" />
                        <SousCategorie titre="Internet" />
                        <SousCategorie titre="Jeux Vidéos" />
                        <SousCategorie titre="Vodkaster" />
                        <Bouton titre="Voir le programme tv" />
                    </Categorie>
                    <Categorie titre="Sortir">
                        <SousCategorie titre="Spectacles" />
                        <SousCategorie titre="Expositions" />
                        <SousCategorie titre="Concerts & Clubbing" />
                        <SousCategorie titre="Restos & Gastronomie" />
                        <SousCategorie titre="Voyages & Loisirs" />
                    </Categorie>
                </div>
                <div className='nos-newsletters'>
                    <Titre />
                    <Texte />
                    <Bouton titre="M'inscrire" />
                </div>
            </div>
            <div className="colonne-droite">
                <div className="rubriques-droite">
                    <Categories titre="Cannes 2019" />
                    <Categories titre="Enfants" />
                    <Categories titre="Musiques" />
                    <Categories titre="Radio & Podcasts" />
                    <Categories titre="Livre" />
                    <Categories titre="Débats & Reportages" />
                    <Categories titre="Services abonnés">
                        <SousCategorie titre="Sorties Réduction" />
                        <SousCategorie titre="Bouquet VOD" />
                    </Categories>

                    <Categories titre="Autres services">
                        <SousCategorie titre="La boutique Télérama" />
                        <SousCategorie titre="La billeterie" />
                    </Categories>

                </div>
                <div className="nos-applis-mobiles">
                    <Titre />
                    <SousCategorie
                        titre="Appli TV" />
                    <SousCategorie
                        titre="Télécharger sur google play"
                        text-decoration="solid"
                        text-decoration-color="black" />
                    <SousCategorie
                        titre="Télécharger sur l'App Store"
                        text-decoration="solid"
                        text-decoration-color="black" />
                    <SousCategorie
                        titre="Appli liseuse" />
                    <SousCategorie
                        titre="Télécharger sur google play"
                        text-decoration="solid"
                        text-decoration-color="black" />
                    <SousCategorie
                        titre="Télécharger sur l'App Store"
                        text-decoration="solid"
                        text-decoration-color="black" />
                </div>
            </div>
            <div className="sites-du-groupe">
                <Titre />
                <Site
                    titre="Le monde"
                    src="icones/icone1.jpeg" />
                <Site
                    titre="Courrier internationale"
                    src="icones/icone2.jpeg" />
                <Site
                    titre="Télérama"
                    src="icones/icone3.jpeg" />
                <Site
                    titre="Le huffington Post"
                    src="icones/icone4.jpeg" />
                <Site
                    titre="Le monde diplomatique"
                    src="icones/icone5.jpeg" />
                <Site
                    titre="La vie"
                    src="icones/icone6.jpeg" />
            </div>
            <div className="navbar-footer">
                <MentionsLegales
                    titre="Télérama 2019" />
                <MentionsLegales
                    titre="Qui sommes nous ?" />
                <MentionsLegales
                    titre="Contactez-nous" />
                <MentionsLegales
                    titre="Mentions légales" />
                <MentionsLegales
                    titre="Paramétrez les cookies" />
                <MentionsLegales
                    titre="Chartre de confidentialité" />
                <MentionsLegales
                    titre="Confidentialité" />
                <MentionsLegales
                    titre="Plan" />
                <MentionsLegales
                    titre="FAQ" />
            </div>
        </div>
    )
}

