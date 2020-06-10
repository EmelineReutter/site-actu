import { Mentions } from "antd";

function Footer() {
    return (
        <div id="footer">
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
                    <Cinema />
                    <EcransEtTv catégories={5} />
                </div>
                <Bouton titre="Voir le programme tv" />
                <div id='nos-newsletters'>
                    <Texte />
                    <Bouton titre="M'inscrire" />
                </div>
                <div className="sortir">
                    <Sortir catégories={5} />
                </div>
            </div>
            <div className="colonne-droite">
                <div className="rubriques-droite">
                    <Cannes />
                    <Enfants />
                    <Musiques />
                    <RadioEtPodcasts />
                    <Livres />
                    <DebatsEtReportages />
                    <ServiceAbonnes catégories={2} />
                    <AutresServices catégories={2} />
                </div>
                <div className="nos-applis-mobiles">
                    <SousCategorie titre="Appli TV" />
                    <SousCategorie titre="Télécharger sur google play" text-decoration="solid" text-decoration-color="black" />
                    <SousCategorie titre="Télécharger sur l'App Store" text-decoration="solid" text-decoration-color="black" />
                    <SousCategorie titre="Appli liseuse" />
                    <SousCategorie titre="Télécharger sur google play" text-decoration="solid" text-decoration-color="black" />
                    <SousCategorie titre="Télécharger sur l'App Store" text-decoration="solid" text-decoration-color="black" />
                </div>
            </div>
            <div className="sites-du-groupe">
                <Site titre="Le monde" src="icones/icone1.jpeg" />
                <Site titre="Courrier internationale" src="icones/icone2.jpeg" />
                <Site titre="Télérama" src="icones/icone3.jpeg" />
                <Sit titre="Le huffington Post" src="icones/icone4.jpeg" />
                <Site titre="Le monde diplomatique" src="icones/icone5.jpeg" />
                <Site titre="La vie" src="icones/icone6.jpeg" />
            </div>
            <div id="navbar-footer">
                <MentionsLegales titre="Télérama 2019" />
                <MentionsLegales titre="Qui sommes nous ?" />
                <MentionsLegales titre="Contactez-nous" />
                <MentionsLegales titre="Mentions légales" />
                <MentionsLegales titre="Paramétrez les cookies" />
                <MentionsLegales titre="Chartre de confidentialité" />
                <MentionsLegales titre="Confidentialité" />
                <MentionsLegales titre="Plan" />
                <MentionsLegales titre="FAQ" />
            </div>
        </div>
    )
}

