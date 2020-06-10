function ArticlesALaUne() {
    return (
        <div id="articles-a-la-une">

            <div className="titre-section">
                <h2>A la une</h2>
                <div className="divider"></div>
            </div>

            <div className="contenu-section">

                <div className="colonne-gauche">

                    <div id="container-articles">
                        <Article src='/image/article1.jpg' categorie='Écrans & TV' titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?' tempsDeLecture={4} />
                        <Article src='/image/article2.jpg' categorie='Écrans & TV' titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?' tempsDeLecture={4} />
                        <Article src='/image/article3.jpg' categorie='Écrans & TV' titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?' tempsDeLecture={4} />
                        <Article src='/image/article4.jpg' categorie='Écrans & TV' titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?' tempsDeLecture={4} />
                        <Pub src="/images/pub2.jpg" />
                        <Article src='/image/article5.jpg' categorie='Écrans & TV' titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?' tempsDeLecture={4} />
                        <Article src='/image/article6.jpg' categorie='Écrans & TV' titre='Ciné, Séries, docu: faut-il travailler avec Netflix ?' tempsDeLecture={4} />
                    </div>

                    <div id="dossiers">
                        <Article src='/image/dossier/article1.jpg' titre="L'affaire Polanski" resumeArticle="Alors que j'accuse sort en salle (...)" />
                        <Article src='/image/dossier/article2.jpg' titre="Violences conjugales" resumeArticle="(...)" />
                    </div>

                    <Newsletter
                        src='/image/newsletter/pub.jpg'
                        titre="Nos newsletters"
                        texteEplixcatif="Retrouvez le meilleur de telerama (...)"
                    >
                        <BoutonMinscrire />
                    </Newsletter>

                </div>

                <div className="colonne-droite">

                    <div id="les-plus-lus">
                        <TopCatégoriesLesPlusLus classement={1} titreCategorie="Musiques" titreArticle="La colère monte dans le Jazz après les victoires (...)" />
                        <TopCatégoriesLesPlusLus classement={2} titreCategorie="Radio & Podcasts" titreArticle="Dire je suis lesbienne (...)" />
                        <TopCatégoriesLesPlusLus classement={3} titreCategorie="Musiques" titreArticle=" platine TTT (...)" />
                        <TopCatégoriesLesPlusLus classement={4} titreCategorie="Cinéma" titreArticle="Les accusations d'Adèle Haenel (...)" />
                    </div>

                    <Pub src="image/pub3.jpeg" />

                    <Pub src="image/pub4.jpeg" />

                </div>
            </div>
        </div>
    )
}
