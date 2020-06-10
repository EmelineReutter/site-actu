import React from 'react'
import { Button } from 'antd'
import Bouton from '../molecules/bouton/bouton'

function PageAcceuil() {
    return (
        <>
            <Header />
            <NavBar />
            <PubPrincipale />
            <GrosTitres />
            <ArticlesALaUne />
            <ContenusSponsorises />
            <VousRestezALaMaison />
            <VousSortez />
            <ContenusSponsorises />
            <Pub nombre={1} />
            <Pub nombre={3} />
            <Footer />
        </>
    )
}
function Header() {
    return (
        <div id="header">
            <MenuHamburger />
            <TitreSite />
            <IconeBouton />
            <BoutonLogin />
            <BoutonAbonnement />
        </div>
    )
}

function NavBar() {
    return (
        <div id="navbar">
            <IconeRecherche />
            <Section titre='Programme TV' />
            <Section titre='Cannes 2019' />
            <Section titre='Cinémas' />
            <Section titre='Écrans & TV' />
            <Section titre='Sortir' />
            <Section titre='Musiques' />
            <Section titre='Radio & podcasts' />
            <Section titre='livres' />
        </div>
    )
}

function PubPrincipale() {
    return (
        <div id="pub-principale">
            <Pub src="/images/pub1.jpg" />
        </div>
    )
}

function GrosTitres() {
    return (
        <div id="gros-titres">
            <ArticlePrincipal />
            <Article src="/image/affiche1.jpg" categorie='Cannes' titre='Parasite' tempsDeLecture={6} />
            <Article src="/image/affiche2.jpg" categorie='Cannes' titre='Parasite' tempsDeLecture={6} />
            <Article src="/image/affiche3.jpg" categorie='Cannes' titre='Parasite' tempsDeLecture={6} />
        </div>
    )
}

function ArticlesALaUne() {
    return (
        <div id="articles-a-la-une">
            <div id="container-articles">
                <ArticlesALaUne src='/image/article1.jpg' categorie='Écrans & TV' titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?' tempsDeLecture={4} />
                <ArticlesALaUne src='/image/article2.jpg' categorie='Écrans & TV' titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?' tempsDeLecture={4} />
                <ArticlesALaUne src='/image/article3.jpg' categorie='Écrans & TV' titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?' tempsDeLecture={4} />
                <ArticlesALaUne src='/image/article4.jpg' categorie='Écrans & TV' titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?' tempsDeLecture={4} />
                <Pub src="/images/pub2.jpg" />
                <ArticlesALaUne src='/image/article5.jpg' categorie='Écrans & TV' titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?' tempsDeLecture={4} />
                <ArticlesALaUne src='/image/article6.jpg' categorie='Écrans & TV' titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?' tempsDeLecture={4} />
            </div>
            <div id="dossiers">
                <Article src='/image/dossier/article1.jpg' titre="L'affaire Polanski" resumeArticle="Alors que j'accuse sort en salle (...)" />
                <Article src='/image/dossier/article2.jpg' titre="Violences conjugales" resumeArticle="(...)" />
            </div>
            <Newsletter src='/image/newsletter/pub.jpg' titre="Nos newsletters" texteEplixcatif="Retrouvez le meilleur de telerama (...)">
                <BoutonMinscrire />
            </Newsletter>
            <div id="les-plus-lus">
                <TopCatégoriesLesPlusLus classement={1} titreCategorie="Musiques" titreArticle="La colère monte dans le Jazz après les victoires (...)" />
                <TopCatégoriesLesPlusLus classement={2} titreCategorie="Radio & Podcasts" titreArticle="Dire je suis lesbienne (...)" />
                <TopCatégoriesLesPlusLus classement={3} titreCategorie="Musiques" titreArticle=" platine TTT (...)" />
                <TopCatégoriesLesPlusLus classement={4} titreCategorie="Cinéma" titreArticle="Les accusations d'Adèle Haenel (...)" />
                <Pub src="image/pub3.jpeg" />
                <Pub src="image/pub4.jpeg" />
            </div>
        </div>
    )
}

function ContenusSponsorises() {
    return (
        <div id="contenus-sponsorises">
            <Article titreArticle="Axa" PhraseDaccroche="Petit rouleur ? (...)" />
            <Article titreArticle="Oh!MyMag" PhraseDaccroche="Iris Mittenaere officialise sa relation (...)" />
            <Article titreArticle="Villa Schweppes" PhraseDaccroche="La plus déjantée (...)" />
        </div>
    )
}

function VousRestezALaMaison() {
    return (
        <div id="vous-restez-a-la-maison">
            <div id="a-regarder-ce-soir">
                <Titre />
                <Ligne />
                <Titre />

                <Article typeDeContenu="Documentaire" titreContenu="Rohingya, la mécanique du crime" PhraseDaccroche="Reportage exceptionnel à voir en replay" >
                    <Image plateformeStreaming="Apple TV" durée={1.30} />
                </Article>

                <Article typeDeContenu="Vidéo" titreContenu="Femmes de western au cinéma" PhraseDaccroche="Chapeau, Cowgirl !">
                    <Image plateformeStreaming="Youtube" durée={1.30} />
                </Article>

                <Article typeDeContenu="Série" titreContenu="Undone - S1" PhraseDaccroche="Par le créateur de Bojack Horseman">
                    <Image plateformeStreaming="Prime video" durée={1.30} />
                </Article>

                <Article src="images/article4.jpg" nombreDarticleRestant={3} titre="programmes " titreContenu="France-Modalvie" typeDeContenu="Foot" PhraseDaccroche="Sur la route de l'Euro (...)" >
                    <Button titre="Voir toute la sélection" />
                </Article>
            </div>
            <div id="les-selections-telerama">
                <div id="les-selections-de-la-redaction">
                    <Article typeDeContenu="Écrans & TV .Séries" titreContenu="Notre top 50 (...)" tempsDeLecture={6} />
                    <Article typeDeContenu="Écrans & TV .Séries" titreContenu="Quelles sont les meilleures (...)" tempsDeLecture={6} />
                    <Article typeDeContenu="Écrans & TV .Séries" titreContenu="Quelles sont les meilleures (...)" tempsDeLecture={6} />
                </div>
                <div id="les-selections-enfants-de-la-redaction">
                    <Titre />
                    <Article typeDeContenu="Écrans & TV .Télévision" titreContenu="Selection TV enfants (...)" tempsDeLecture={6} />
                    <Article typeDeContenu="Écrans & TV" titreContenu="Halloween (...)" tempsDeLecture={6} />
                </div>
                <div id="abonnement-telerama">
                    <Titre />
                    <Article titreArticle="Douleur et gloire" PhraseDaccroche="L'Espagnol (...)">
                        <Image plateformeStreaming="Canal +" durée={1.30} />
                    </Article>
                    <Article titreArticle="Old Joy" PhraseDaccroche="Besoin d'air ? (...)">
                        <Image plateformeStreaming="Netflix" durée={1.30} />
                    </Article>
                    <Article src="images/article1.jpeg" titreArticle="Petits frères" PhraseDaccroche="Des garçons, une fille (...)">
                        <Bouton nombreDarticleRestant={30} typeDeContenu="Films" titre="Voir tout le catalogue" />
                    </Article>
                    <Bouton titre="S'abonner" />
                    <Titre />
                </div>
                <div id="nos-recommandations">
                    <Bouton plateformeStreaming="Netflix" />
                    <Bouton plateformeStreaming="Canal +" />
                    <Bouton plateformeStreaming="Prime video" />
                    <Bouton plateformeStreaming="OCS" />
                    <Bouton plateformeStreaming="Apple TV +" />
                    <Bouton plateformeStreaming="Disney +" />
                    <Bouton plateformeStreaming="Youtube" />
                    <Texte />
                    <Bouton titre="Voir le programme TV" />
                    <Pub src="images/pub1.jpeg" />
                </div>
            </div>
            <div id="contenus-sponsorises">
                <Titre />
                <Article src="images/pub1.jpeg" titreContenu="publicité Axa" PhraseDaccroche="Petit rouleur ? (...)" />
                <Article src="images/pub2.jpeg" titreContenu="publicité Oh!MyMag" PhraseDaccroche="Iris Mittenaere officialise (...)" />
                <Article src="images/pub3.jpeg" titreContenu="Villa Schewppes" PhraseDaccroche="La plus déjantée (...)" />
            </div>
        </div>

    )
}

function VousSortez() {
    return (
        <div id="vous-sortez">
            <Titre />
            <Ligne />
            <div id="les-sorties-cinema-de-la-semaine">
                <Article genreDuFilm="film documentaire" titreFilm="Le Char et l'Olivier, une autre histoire de la Palestine" auteurFilm="Roland Nurier" />
                <Article genreDuFilm="film d'animation" titreFilm="J'ai perdu mon corps" auteurFilm="Jérémy Clapin" />
                <Article genreDuFilm="Drame sentimental" titreFilm="J'accuse" auteurFilm="Roman Polanski" />
                <Article genreDuFilm="Film documentaire" titreFilm="L'Âme du vin" auteurFilm="Marie Ange Gorbanevsky" />
                <Article genreDuFilm="Drame" titreFilm="Le Mans 66" auteurFilm="James Mangold">
                    <Bouton nombreDarticleRestant={7} typeDeContenu="films" titre="Voir tous les films" />
                </Article>
            </div>
            <div id="les-selections-de-la-redaction">
                <Article src="images/article1.jpeg" categorie="Sortir - Expo" titreArticle="Photo les 11 expos (...)" tempsDeLecture={6} />
                <Article src="images/article2.jpeg" categorie="Sortir - Expo" titreArticle="Les 19 expositions (...)" tempsDeLecture={6} />
                <Article />
                <Article src="images/article3.jpeg" categorie="Sortir - Resto" titreArticle="A paris (...)" tempsDeLecture={6} />
                <Pub src="images/pub1.jpeg" />
            </div>
            <div id="les-selections-enfants-de-la-redaction">
                <Article src="images/article1.jpeg" categorie="Sortir - Expo" titreArticle="Vos enfants connaissent-ils la Joconde ? (...)" tempsDeLecture={6} />
                <Article src="images/article2.jpeg" categorie="Sortir - Expo" titreArticle="Le studio Harry Potter (...)" tempsDeLecture={6} />
            </div>
            <div id="les-evenemnts-telerama-du-moment">
                <Article categorie=" Sortir - Expo" titreArticle="Pass Art Contemporain Télérama" dateEvenement="Dès le 16 octobre, Dans + de 50 musées en France" />
                <Article categorie=" Sortir - Expo" titreArticle="Pass Art Contemporain Télérama" dateEvenement="Dès le 16 octobre, Dans + de 50 musées en France" />
            </div>
            <div id="abonnement-telerama">
                <Titre />
                <Article titreArticle="Samedi Séries: -25%" PhraseDaccroche="Débats,rencontres, masterlasses!">
                    <Image src="images/article1.jpeg" durée={1.30} />
                </Article>
                <Article titreArticle="La Nuit du Cirque: -30%" PhraseDaccroche="Le cirque de création (...)">
                    <Image src="images/article2.jpeg" durée={1.30} />
                </Article>
                <Article src="images/article3.jpeg" titreArticle=" Sortie 3 -15%" PhraseDaccroche="Lorem (...)" >
                    <Bouton nombreDarticleRestant={10} titre="Voir toutes les sorties" typeDeContenu="réductions" />
                </Article>
                <Titre />
                <Bouton titre="Je m'abonne" />
                <Titre />

            </div>
            <div id="boutons-recommandations">
                <Bouton iconeDeGauche="icone etoile" titre="Spectacles" />
                <Bouton iconeDeGauche="icone etoile" titre="Expositions" />
                <Bouton iconeDeGauche="icone etoile" titre="Concerts" />
                <Bouton iconeDeGauche="icone etoile" titre="Enfants" />
                <Bouton iconeDeGauche="icone etoile" titre="Clubbing" />
                <Bouton iconeDeGauche="icone etoile" titre="Restaurants" />
                <Bouton iconeDeGauche="icone etoile" titre="Bars" />
                <Bouton iconeDeGauche="icone etoile" titre="Boutiques" />
                <Bouton iconeDeGauche="icone etoile" titre="Voyages" />
            </div>
            <div id="contenus-sponsorises">
                <Titre />
                <Article src="images/pub1.jpeg" titreContenu="publicité Axa" PhraseDaccroche="Petit rouleur ? (...)" />
                <Article src="images/pub2.jpeg" titreContenu="publicité Oh!MyMag" PhraseDaccroche="Iris Mittenaere officialise (...)" />
                <Article src="images/pub3.jpeg" titreContenu="Villa Schewppes" PhraseDaccroche="La plus déjantée (...)" />
            </div>

        </div>
    )

}

function Pub() {
    return (
        <Pub src="image/pub1.jpeg" />
    )
}

function Pub() {
    return (
        <div id="pub">
            <Pub src="image/pub1.jpeg" />
            <Pub src="image/pub2.jpeg" />
            <Pub src="image/pub3.jpeg" />
        </div>
    )
}

function Footer() {
    return (
        <div id="footer">
            <Titre />
            <div id="navBar-reseaux-sociaux">
                <Logo />
                <Logo />
                <Logo />
                <Logo />
                <Logo />
            </div>
            <div id="programme">
                <Titre />
                <Titre nom="Ecrans & TV" catégories={5}>
                    <Bouton titre="Voir le programme tv" />
                </Titre>
                <Titre nom="Sortir" catégories={5} />
            </div>
            <div id='nos-newsletters'>
                <Texte />
                <Bouton titre="M'inscrire" />
            </div>
            <div id="categories">
                <Titre />
                <Titre />
                <Titre />
                <Titre />

                <Titre />
                <Titre />
                <Titre nom="Services abonnés" catégories={2} />
                <Titre nom="Autres services" catégories={2} />
            </div>
            <div id="applis-mobiles">
                <Titre />
                <Titre />
                <Titre />
                <Titre />
                <Titre />
                <Titre />
            </div>
            <div id="sites-du-groupe">
                <Titre logo="images/logo1.png" />
                <Titre logo="images/logo2.png" />
                <Titre logo="images/logo3.png" />
                <Titre logo="images/logo4.png" />
                <Titre logo="images/logo5.png" />
                <Titre logo="images/logo6.png" />
            </div>
            <div id="navbar-footer">
                <Titre />
                <Titre />
                <Titre />
                <Titre />
                <Titre />
                <Titre />
                <Titre />
                <Titre />
            </div>
        </div>


    )
}





