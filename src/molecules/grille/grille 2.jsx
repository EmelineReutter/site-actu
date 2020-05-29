import React from 'react'

import Carre from '../../atoms/carre/carre'

import './grille.css'

function Grille () {
  return (
    <div className="grille">
      <div className="grille-row">
        <Carre />
        <Carre />
      </div>
      <div className="grille-row">
        <Carre />
        <Carre />
      </div>
    </div>
  )
}

export default Grille