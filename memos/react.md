# Mémo sur React

Ce fichier contient des mémos sur l'utilisation et la création de composants React.

## 1 - Utiliser un composant React existant

### Exemple 1 : utiliser un composant React de Ant.design

[Ant design](https://ant.design/components/button/) est une librairie de composants de React.

exemple : 
```jsx
import { Button } from 'antd'; 

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
  </div>,
  mountNode,
);
```
Étapes pour le faire :
1. Se rendre sur le site https://ant.design et dans la partie "Components"(composants).
2. Choisir la catégorie de ce qu'on veut importer (ex: boutons, icônes ...).
3. Si je choisis un bouton, choisir quel type de bouton je veux importer et cliquez sur "<>" show code. (Montre le code).
4. Je fais un copier coller du code du composant que je veux importer et je l'importe dans mon fichier jsx.

### Exemple 2 : utiliser un composant React que j'ai créé moi-même

TODO Emeline : compléter le code ci-dessous, en réutilisant le code écrit par Antoine pour soit Texte, soit Grille soit Carré.

```jsx
import React from 'react'
import Carre from '../../atoms/carre/carre'

function ComposantDexemple () {
   return <div className='exemple-ant'>
   
     <Carre taille="16px" />
     <Carre taille="8px" />
   
   </div>
}
```
Étapes pour le faire :

1.  J'importe mon composant que je veux utiliser.
2. "Appeler" son composant dans son code (toujours avec une majuscule et dans une balise).

## 1 - Créer un nouveau composant React (atome ou molécule, c'est pareil)

TODO : Emeline -> expliquer comment créer un nouveau composant React, avec un exemple de code.

### Exemple 1 : créer un composant Texte non-paramétrable

```jsx
import React from 'react'
import './carre.css'

function Carre() {
  return <div className="carre"></div>
}

export default Carre
```
Étapes pour le faire :

1. Toujours importer react.
2. Importer son fichier CSS (si il existe).
3. Déclarer sa fonction (avec un nom en cohérence avec ce qu'elle fait ou ce qu'elle représente).
4. Ne pas mettre de paramètres entre les parenthèses.

### Exemple 2 : créer un composant Texte paramétrable

Le composant texte en question a trois paramètres : couleur, graisse, children.

TODO Emeline : compléter le code ci-dessous, en réutilisant le code écrit par Antoine pour soit Texte, soit Grille soit Carré.

```jsx
  import React from 'react'

export default function Texte({ couleur, graisse, children }) {
    return (
        <span>Je suis un texte, je devrais m'afficher en {couleur}, mais flemme d'écrire le css, et je devrais avoir comme graisse {graisse}. Et je dois afficher le texte : {children}</span>
    )
}
```
Étapes pour le faire :

1. Première étape toujours importer react avec la commande : import React from 'react'.
2. Donner un nom cohérent à la nouvelle fonction (un nom en rapport avec ce qu'elle fait ou ce qu'elle représente)
3. Donner des paramètres à cette fonction, exemple pour texte on à ajouté couleur, graisse et children.
4. Toujours mettre en paramètre {children} qui permet de prendre en compte ce qui sera écrit dans la fonction.

### Exemple 3 : créer un composant Bouton

Le composant Bouton en question a ... paramètres : (TODO Emeline)

TODO Emeline : compléter le code ci-dessous, en réutilisant le code écrit par Antoine pour soit Texte, soit Grille soit Carré.

```jsx
import React from 'react'
import './bouton.css'

function Bouton({ children, todo_Emeline }) {
    return <button class="button">
        <div class="button-text button-item">{children, todo_Emeline}</div>
        <div class="button-icon button-last-item"><div class="arrow-right icon"></div></div>
    </button>
}
export default Bouton 
```
Étapes pour le faire :

1. J'importe React.
2. J'importe mon fichier CSS (si il y en a un).
3. Je déclare ma fonction en lui donnant un nom cohérent avec ce qu'elle fait (ici il s'agit de "Bouton").
4. Je met des paramètres (ici il s'agira de {children} et {todo_Emeline}).
5. Je "return" ce que ma fonction doit retourner (ici il s'agit de plusieurs <div>).
6. Dans ma fonction j'écris mes éléments HTML (<button>, <div> ...)
7. J'exporte ma fonction par défaut. ("export default NomdeLaFonction").
  
