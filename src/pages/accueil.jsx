import React from 'react'

import Grille from '../molecules/grille/grille'

function Accueil () {
  return (<section>
    <h1>Acceuil</h1>
    <p>Emeline, c'est ici que tu dois tester les composants que tu créé.</p>
    <a href="/ant-design">Aller à la page ant design</a>

    <div id="emeline-work">
      Remplace ce contenu par tes composants

      <Grille />
    </div>
  </section>)
}

export default Accueil