import React from 'react'

import Header from '../molecules/header/header'
import Navbar from '../molecules/navBar/navbar'
import Pub from '../atoms/pub/pub'
import GrosTitres from '../molecules/gros-titres/gros-titres'
import ArticlesALaUne from '../molecules/articles-a-la-une/articles-a-la-une'
import ContenusSponsorises from '../molecules/contenus-sponsorises/contenus-sponsorises'
import VousRestezALaMaison from '../molecules/vous-restez-a-la-maison/vous-restez-a-la-maison'
import VousSortez from '../molecules/vous-sortez/vous-sortez'
import Footer from '../molecules/footer/footer'

function Accueil() {
  return (
    <section>

      <h1>Accueil</h1>
      <p>Emeline, c'est ici que tu dois tester les composants que tu créé.</p>
      <a href="/ant-design">Aller à la page ant design</a>

      <div id="emeline-work">
        <Header />
        <Navbar />
        <Pub nombre={1} />
        <GrosTitres />
        <ArticlesALaUne />
        <ContenusSponsorises />
        <VousRestezALaMaison />
        <VousSortez />
        <ContenusSponsorises />
        <Pub nombre={1} />
        <Pub nombre={3} />
        <Footer />
      </div>

    </section>)
}
export default Accueil