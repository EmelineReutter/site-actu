import React from 'react'
import { Button } from 'antd'

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
            <Titre />
            <Ligne />
            <Titre />


        </div>

    )
}

