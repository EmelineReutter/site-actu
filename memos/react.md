# Mémo sur React

Ce fichier contient des mémos sur l'utilisation et la création de composants React.

## 1 - Utiliser un composant React existant

TODO : Emeline -> expliquer comment utiliser un composant React existant, avec un exemple de code.


Etapes pour le faire :
1. 



### Exemple 1 : utiliser un composant React de Ant.design

[Ant design](https://ant.design/components/button/) est une librairie de composants de React.

```jsx
function ComposantDexemple () {
  return <div className='exemple-ant'>ECRIRE L'EXEMPLE ICI</div>
}
```
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

Etapes pour le faire :
1. Se rendre sur le site https://ant.design et dans la partie "Components"(composants)
2. Choisir la catégorie de ce qu'on veut importer (ex: boutons, icônes ...)
3. Si je choisis un bouton, choisir quel type de bouton je veux importer et cliquez sur "<>" show code. (Montre le code)
4. Je fais un copier coller du code que j'importe dans mon fichier jsx.
5. J'importe la "catégorie" auquel appartient mon composant dans mon fichier jsx.

### Exemple 2 : utiliser un composant React que j'ai créé moi-même

TODO Emeline : compléter le code ci-dessous, en réutilisant le code écrit par Antoine pour soit Texte, soit Grille soit Carré.
```jsx
//code de Texte
import React from 'react'

export default function Texte({ couleur, graisse, children }) {
    return (
        <span>Je suis un texte, je devrais m'afficher en {couleur}, mais flemme d'écrire le css, et je devrais avoir comme graisse {graisse}. Et je dois afficher le texte : {children}</span>
    )
}


```jsx
function ComposantDexemple () {
  return <div className='exemple-ant'>ECRIRE L'EXEMPLE ICI</div>
}
```
Etapes pour le faire :

1. Ecrire le code de son composant
2. 

## 1 - Créer un nouveau composant React (atome ou molécule, c'est pareil)

TODO : Emeline -> expliquer comment créer un nouveau composant React, avec un exemple de code.

### Exemple 1 : créer un composant Texte

Le composant texte en question a trois paramètres : couleur, graisse, children.

TODO Emeline : compléter le code ci-dessous, en réutilisant le code écrit par Antoine pour soit Texte, soit Grille soit Carré.

```jsx
  ECRIRE L'EXEMPLE ICI
```

Etapes pour le faire :

1. ...
2. ....

### Exemple 2 : créer un composant Bouton

Le composant Bouton en question a ... paramètres : (TODO Emeline)

TODO Emeline : compléter le code ci-dessous, en réutilisant le code écrit par Antoine pour soit Texte, soit Grille soit Carré.

```jsx
  ECRIRE L'EXEMPLE ICI
```

Etapes pour le faire :

1. ...
2. ....
