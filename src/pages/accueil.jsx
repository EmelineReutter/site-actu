import React from 'react'

import Grille from '../molecules/grille/grille'
import Bouton from '../molecules/bouton/bouton'
//import BlocImage from '../molecules/blocImage/blocImage'
import { StarOutlined, TagsOutlined, SoundOutlined, TeamOutlined, FilterOutlined, ShopOutlined, CoffeeOutlined, ShoppingCartOutlined, ShoppingOutlined } from '@ant-design/icons';

function BlocImage({ img, titre }) {
  return (
    <div>
      <img src={img} />
      <h2>{titre}</h2>
    </div>
  )
}

function BlocImageLibre({ img, titre }) {
  return (
    <div>
      {img}
      {titre}
    </div>
  )
}

function ImageCarree({ src }) {
  return <img style={{ width: '20px', height: '20px' }} src={src} />
}

function ImageRectanglaire({ src }) {
  return <img style={{ width: '2000px', height: '200000px' }} src={src} />
}

function Accueil() {
  return (<section>
    <h1>Acceuil</h1>
    <p>Emeline, c'est ici que tu dois tester les composants que tu créé.</p>

    <BlocImageLibre img={<ImageCarree src='./affiches-png/affiche1.png' />} titre={<h3>Un film</h3>} />

    <BlocImageLibre img={<h1>Du texte au lieu de l'image</h1>} titre={<h1>Un autre film</h1>} />

    <BlocImage img={'./affiches-png/affiche1.png'} titre='Un film' />

    <BlocImage img={'./affiches-png/affiche1.png'} titre='Un film' />

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
      </div>
      <Grille />
    </div>
  </section >)
}
export default Accueil