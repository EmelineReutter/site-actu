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
      <div className='col-4'>
        <Bouton iconeDeGauche={<StarOutlined />}>
          Spectacles
      </Bouton>
        <Bouton iconeDeGauche={<TagsOutlined />}>
          Expositions
      </Bouton>
        <Bouton iconeDeGauche={<SoundOutlined />}>
          Concerts
      </Bouton>
        <Bouton iconeDeGauche={<TeamOutlined />}>
          Enfants
      </Bouton>
        <Bouton iconeDeGauche={<FilterOutlined />}>
          Clubbing
      </Bouton>
        <Bouton iconeDeGauche={<ShopOutlined />}>
          Restaurants
      </Bouton>
        <Bouton iconeDeGauche={<CoffeeOutlined />}>
          Bars
      </Bouton>
        <Bouton iconeDeGauche={<ShoppingCartOutlined />}>
          Boutiques
      </Bouton>
        <Bouton iconeDeGauche={<ShoppingOutlined />}>
          Voyages
      </Bouton>
      </div>
      <Grille />
      <Texte>
        Hye je suis un paragraphe !
      </Texte>
    </div>
  </section>)
}
export default Accueil