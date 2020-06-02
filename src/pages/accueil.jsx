import React from 'react'

import Grille from '../molecules/grille/grille'
import Bouton from '../molecules/bouton/bouton'
import Texte from '../atoms/texte/texte'

import { StarOutlined, TagsOutlined, SoundOutlined, TeamOutlined, FilterOutlined, ShopOutlined, CoffeeOutlined, ShoppingCartOutlined, ShoppingOutlined } from '@ant-design/icons';


function Accueil() {
  return (<section>
    <h1>Acceuil</h1>
    <p>Emeline, c'est ici que tu dois tester les composants que tu créé.</p>
    <a href="/ant-design">Aller à la page ant design</a>
    <div id="emeline-work">
      Remplace ce contenu par tes composants
      <Bouton IconedeGauche={<StarOutlined />}>
        Spectacles
      </Bouton>
      <Bouton IconedeGauche={<TagsOutlined />}>
        Expositions
      </Bouton>
      <Bouton IconedeGauche={<SoundOutlined />}>
        Concerts
      </Bouton>
      <Bouton IconedeGauche={<TeamOutlined />}>
        Enfants
      </Bouton>
      <Bouton IconedeGauche={<FilterOutlined />}>
        Clubbing
      </Bouton>
      <Bouton IconedeGauche={<ShopOutlined />}>
        Restaurants
      </Bouton>
      <Bouton IconedeGauche={<CoffeeOutlined />}>
        Bars
      </Bouton>
      <Bouton IconedeGauche={<ShoppingCartOutlined />}>
        Boutiques
      </Bouton>
      <Bouton IconedeGauche={<ShoppingOutlined />}>
        Voyages
      </Bouton>
      <Grille />
      <Texte>
        Hye je suis un paragraphe !
      </Texte>
    </div>
  </section>)
}
export default Accueil