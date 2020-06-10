
function VousRestezALaMaison() {
    return (
        <div id="vous-restez-a-la-maison">
            <div id="a-regarder-ce-soir">
                <Titre />
                <Ligne />
                <Titre />

                <Article typeDeContenu="Documentaire" titreContenu="Rohingya, la mécanique du crime" phraseDaccroche="Reportage exceptionnel à voir en replay" >
                    <Image plateformeStreaming="Apple TV" durée={1.30} />
                </Article>

                <Article typeDeContenu="Vidéo" titreContenu="Femmes de western au cinéma" phraseDaccroche="Chapeau, Cowgirl !">
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