# SportSee

Projet 12 - Développez un tableau de bord d'analytics avec React 

## Projet (**sans Docker**) côté Back

### Prérequis

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

### Lancement du projet

- faire une copie du projet
- Clonez le projet sur votre editeur de code.
- La commande 'yarn' vous permet d'installer les dépendances.
- 'yarn dev' vous permet de lancer l'API.

## Urls

### Possible urls

Vous aurez la possibilité d'utiliser ces 4 urls : 

- `http://localhost:3000/user/${userId}` - récupère les informations d'un utilisateur. Ce premier url comprend l'identifiant de l'utilisateur, les informations de l'utilisateur (prénom, nom et âge), le score du jour en cours (todayScore) et les données clés (calories, macronutriments, etc.).
- `http://localhost:3000/user/${userId}/activity` - récupère l'activité d'un utilisateur jour après jour avec des kilogrammes et des calories.
- `http://localhost:3000/user/${userId}/average-sessions` - récupère les sessions moyennes d'un utilisateur par jour. La semaine commence le lundi.
- `http://localhost:3000/user/${userId}/performance` - récupère les performances d'un utilisateur (énergie, endurance, etc.).


**Attention, pour le moment seuls deux utilisateurs ont été moqués. Ils ont respectivement les ID utilisateur 12 et 18.**

## Projet côté front

- faire une copie du projet
- Clonez le projet sur votre editeur de code.
- La commande 'npm install' vous permet d'installer les dépendances.
- 'npm start' vous permet de lancer le projet.
