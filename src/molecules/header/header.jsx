function Header() {
    return (
        <div id="header">
            <MenuHamburger />
            <TitreSite />
            <BoutonLogin />
            <BoutonAbonnement />
            <Bouton iconeDeGauche={<IconeConnexion />}>
                Se connecter
            </Bouton>
            <Bouton graisse="bold" backgroundColor="yellow">
                Je m'abonne
            </Bouton>
        </div>
    )
}