# Villa Luxe Bali - Site Web Vitrine

Un site web élégant et minimaliste pour présenter une villa de luxe à Bali, avec une visite virtuelle 3D Matterport intégrée comme élément central.

## Caractéristiques

- Design inspiré du style Apple, épuré et sophistiqué
- Parfaitement responsive (mobile, tablette, desktop)
- Visite virtuelle 3D Matterport intégrée (iframe)
- Mode sombre/clair automatique
- Animations fluides et micro-interactions
- Optimisé pour les performances et l'accessibilité
- SEO-friendly avec Schema.org et Open Graph

## Technologies utilisées

- React.js avec Vite
- Tailwind CSS via CDN
- Framer Motion pour les animations
- AOS (Animate On Scroll) pour les effets de défilement
- Google Fonts (Inter et Lora)
- Heroicons pour les icônes

## Structure du projet

```
/
├── index.html           # Point d'entrée HTML
├── src/
│   ├── assets/          # Images et ressources statiques
│   ├── components/      # Composants React réutilisables
│   │   ├── Header.jsx   # En-tête avec navigation
│   │   ├── Hero.jsx     # Section principale avec Matterport
│   │   ├── About.jsx    # Section À propos
│   │   ├── Amenities.jsx # Section Commodités
│   │   ├── Pricing.jsx  # Section Tarifs et réservation
│   │   ├── FAQ.jsx      # Section Questions fréquentes
│   │   ├── Gallery.jsx  # Galerie d'images
│   │   ├── Testimonials.jsx # Témoignages
│   │   ├── Contact.jsx  # Formulaire de contact
│   │   ├── Footer.jsx   # Pied de page
│   │   └── MatterportModal.jsx # Modale pour la visite 3D
│   ├── styles/          # Styles CSS
│   │   └── index.css    # Styles principaux et utilitaires
│   ├── App.jsx          # Composant racine
│   └── main.jsx         # Point d'entrée JavaScript
└── README.md            # Documentation du projet
```

## Installation et utilisation

1. Clonez ce dépôt
2. Ouvrez le projet dans votre éditeur de code
3. Pour un développement local, vous pouvez utiliser une extension comme Live Server (VSCode) pour servir les fichiers

Alternativement, si vous souhaitez l'intégrer à un projet Vite complet :

```bash
# Installer les dépendances
npm install
# ou
yarn

# Démarrer le serveur de développement
npm run dev
# ou
yarn dev
```

## Personnalisation

- La palette de couleurs peut être modifiée dans la configuration Tailwind (dans `index.html`)
- Les textes peuvent être modifiés directement dans les composants React
- L'URL de la visite Matterport est configurable dans les composants `Hero.jsx` et `MatterportModal.jsx`

## Licence

Ce projet est disponible sous licence MIT.

---

Projet créé avec ❤️ pour présenter des villas de luxe de manière élégante et immersive. 