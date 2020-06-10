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