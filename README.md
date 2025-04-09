# plan-trail

Projet réalisé en 3h dans le cadre d'un test technique. 

Projet initialise en Vue 3. Usage de vuetify pour le design. 

Le sujet consiste à crée une application de gestion de plan de trail. Le but étant de selectionné une vitesse et choisir un point sur une map afin d'obtenir un itiniraire et des informations concernants le trajet. 
La partie météo n'a pas pu être entammé dans le temps imparti. L'usage de leaflet et l'api open route service est bien fonctionnel et la montée en compétence sur l'usage de la carte et l'api à consommé la majeure partie du temps imparti. 

L'application est composé de plusieurs composants permettant de gérer la carte, le choix de la vitesse, le choix du point de départ et d'arrivée.
Un service quant à lui est dedié a l'appel API avec axios 
la gestion des données se fait via un store pinia.

En ce qui concerne le reste à faire: 
- la partie météo via l'usage des position à l'instant T sur l'ensemble des Steps (se rapprocher de la position la plus proche par rapport à la vitesse et la distance à intervalle de 30min)
- une utilisation de toast pour afficher les notifications de l'application en cas d'erreurs 
- Usage de secrets pour l'api key open route service et variabilisé l'url de l'api dans le service
- Des tests unitaires pour les services 
- mise en place d'i18n pour la traduction


La découverte et l'usage de leflet est ce qui m'a pris le plus de temps. 


Il est necessaire de venir placer dans le fichier .env VITE_OPENROUTE_API_KEY qui sera transmise dans le mail avec le lien du repo.
Il est aussi necessaire de faire un npm install pour installer les dépendances.

une version de node 18.16.0 ou plus est necessaire pour le bon fonctionnement de l'application.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
