import React from 'react'

import Grille from '../molecules/grille/grille'
import Bouton from '../molecules/bouton/bouton'
import BlocImage from '../molecules/blocImage/blocImage'
import '../atoms/image/affiches-png'

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
      <h1>Test atoms Texte, Image + Test Molécule BlocImage</h1>
      ---------------------------------------------------------------------
      <h1> Vous sortez ? </h1>
      <h2> Les sorties cinémas de la semaine </h2>
      <div className='container_affiche'>
        <BlocImage>

        </BlocImage>

        <BlocImage>

        </BlocImage>
        <BlocImage>

        </BlocImage>
        <BlocImage>

        </BlocImage>
        <img src="src/atoms/image/affiches-png/j_ai-perdu-mon-corps.png" alt="Affiche du film j'ai perdue mon corps"></img>
      </div>
      <Grille />
    </div>
  </section >)
}
export default Accueil