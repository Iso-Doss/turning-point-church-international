// Charte graphique de l'église (page #/charte), en français et en anglais.
// Les couleurs du site sont lues en direct dans styles.css (variables CSS) ;
// les valeurs hexadécimales ci-dessous servent seulement à l'affichage.

export const SWATCHES = {
  site: [
    { v: 'acc', light: '#7A1418', dark: '#E7C68E' },
    { v: 'hbg', light: '#4A0C0F', dark: '#2A0709' },
    { v: 'hg', light: '#D9C08A', dark: '#D9C08A' },
    { v: 'gt', light: '#7E5F1C', dark: '#C9A866' },
    { v: 'gl', light: '#A8822E', dark: '#8C6C2C' },
    { v: 'bg', light: '#FFFDF8', dark: '#16100F' },
    { v: 'alt', light: '#F6EFE2', dark: '#211816' },
    { v: 'ink', light: '#2A2522', dark: '#F1E8DA' },
    { v: 'mut', light: '#6B625B', dark: '#B9AC9A' },
  ],
  print: [
    { v: 'print-nuit', hex: '#120808' },
    { v: 'print-bordeaux', hex: '#5E1216' },
    { v: 'print-bordeaux-vif', hex: '#8E1A1F' },
    { v: 'print-or-clair', hex: '#E7C68E' },
    { v: 'print-or', hex: '#D9A441' },
    { v: 'print-or-profond', hex: '#B88A3A' },
    { v: 'print-creme', hex: '#FBF1DF' },
    { v: 'print-encre', hex: '#4A2418' },
  ],
};

export const BRAND = {
  fr: {
    kicker: 'Identité visuelle',
    title: 'Charte graphique',
    intro: 'Les couleurs, les polices, le logo et les règles d’écriture de Turning Point Church International, pour le site, les flyers, les cartes et les réseaux sociaux.',
    toc: ['Règles', 'Logo', 'Couleurs', 'Typographie', 'Écriture', 'Éléments', 'Imprimés'],

    rulesTitle: 'Les règles à toujours respecter',
    rules: [
      ['Le nom reste en anglais', '« Turning Point Church International », même sur un support en français. Abréviation admise : TPCI.'],
      ['Deux langues', 'Chaque support existe en français et en anglais, en deux versions séparées.'],
      ['Le fuseau horaire', 'Toute heure porte son fuseau : Cotonou GMT+1, Lomé GMT. Exemple : 18 h 30 (GMT+1).'],
      ['Les numéros du Bénin', 'Toujours avec le préfixe 01, groupés par deux : +229 01 61 04 09 09.'],
      ['Le logo est intouchable', 'On ne le déforme pas, on ne le recolore pas, on ne le redessine pas.'],
    ],
    mottosTitle: 'Devises officielles',

    logoTitle: 'Le logo',
    logoIntro: 'Le sceau de l’église : globe bordeaux, croix dorée, cercle et ruban. Il s’accompagne du nom en capitales et de la ville.',
    logoDo: ['Sur fond ivoire, bordeaux ou sur une photo assombrie', 'Au moins 40 px de large à l’écran, 15 mm à l’impression', 'Centré au-dessus du nom sur un flyer (12 à 15 % de la largeur)'],
    logoDont: ['L’étirer ou l’écraser', 'Changer ses couleurs ou le mettre en une seule couleur', 'Le poser sur une photo chargée sans voile'],
    yes: 'À faire', no: 'À éviter',
    lightBg: 'Sur fond clair', darkBg: 'Sur bordeaux',

    colorsTitle: 'Couleurs',
    colorsIntro: 'Le bordeaux porte la marque, l’or souligne, l’ivoire laisse respirer. On n’utilise jamais l’or et le bordeaux à parts égales.',
    siteColors: 'Site web', siteColorsNote: 'Elles s’adaptent au thème clair et sombre du site (bouton en haut à droite).',
    printColors: 'Imprimés et réseaux sociaux', printColorsNote: 'Fixes : elles ne changent pas avec le thème.',
    light: 'Clair', dark: 'Sombre',
    swatch: {
      acc: 'Titres, liens, nom de l’église', hbg: 'Grandes bannières, pied de page', hg: 'Or sur bordeaux : surtitres, filets', gt: 'Petits textes dorés sur ivoire',
      gl: 'Filets or, contours, focus', bg: 'Fond de page', alt: 'Sections alternées', ink: 'Texte courant', mut: 'Texte secondaire',
      'print-nuit': 'Fond des flyers sombres', 'print-bordeaux': 'Bas des dégradés', 'print-bordeaux-vif': 'Sous-titres, écriture manuscrite', 'print-or-clair': 'Titres or sur fond sombre',
      'print-or': 'Contour du bandeau d’infos', 'print-or-profond': 'Cadre et losanges', 'print-creme': 'Fond des flyers clairs', 'print-encre': 'Texte des flyers clairs',
    },

    typeTitle: 'Typographie',
    fonts: [
      { cls: 'spec-display', name: 'Cinzel', role: 'Titres, nom de l’église, surtitres, boutons, menu. Toujours en capitales espacées.', sample: 'DE LA HONTE À LA GLOIRE' },
      { cls: 'spec-serif', name: 'EB Garamond', role: 'Texte courant, chapeaux et versets (en italique).', sample: '« Au lieu de votre opprobre, vous aurez une portion double. »' },
      { cls: 'spec-script', name: 'Great Vibes', role: 'Imprimés uniquement : un seul mot ou groupe manuscrit par visuel.', sample: 'Venez, rendons grâce !' },
    ],
    scaleTitle: 'Tailles sur le site',
    scale: [['Titre de page', '56 px · Cinzel'], ['Titre de section', '42 px · Cinzel'], ['Chapeau', '21 px · EB Garamond'], ['Texte courant', '19 px · EB Garamond'], ['Surtitre, bouton', '13 px · Cinzel, espacé']],

    writeTitle: 'Écriture',
    writeIntro: 'On s’adresse aux gens en « vous », avec chaleur et des phrases courtes. Pas d’emoji sur le site ni sur les imprimés ; dans un message WhatsApp, seulement 📅 🕡 📍 en début de ligne.',
    writeHead: ['', 'Français', 'Anglais'],
    writeRows: [
      ['Date', 'Mardi 3 novembre 2026', 'Tuesday, 3rd November 2026'],
      ['Heure', '18 h 30 (GMT+1)', '6:30 PM (GMT+1)'],
      ['Verset', '« … » – Ésaïe 61 : 7 (Louis Segond)', '“…” – Isaiah 61:7 (King James)'],
      ['Thème', 'DE LA HONTE À LA GLOIRE', 'FROM SHAME TO FAME'],
      ['Appel', 'Venez nombreux et invitez un ami !', 'Come expectant and bring a friend!'],
      ['Adresse', 'Auditorium TPCI, Quartier Irédé, Akpakpa – Cotonou', 'TPCI Auditorium, Irede Quarters, Akpakpa – Cotonou'],
    ],
    writeNote: 'En français : espace insécable avant : ; ! ? et à l’intérieur des guillemets « ».',

    compTitle: 'Éléments',
    buttons: 'Boutons', buttonsNote: 'Angles droits, capitales Cinzel. Un seul bouton plein par section ; le second est en contour.',
    btn: ['Nous rejoindre', 'Voir les horaires', 'Télécharger le flyer', 'Ajouter à l’agenda'],
    infos: 'Bandeau d’infos des flyers', infosNote: 'Toujours dans cet ordre : date, heure (avec le fuseau), lieu sur deux lignes.',
    infosData: [['Date', 'Dimanche', '6 décembre 2026'], ['Heure', '8 h 00', '(GMT+1)'], ['Lieu', 'Auditorium TPCI', 'Quartier Irédé, Akpakpa – Cotonou']],
    spacing: 'Formes et espaces', spacingNote: 'Angles droits partout. Exceptions : les pastilles et boutons ronds, et le bandeau d’infos des flyers aux angles arrondis. Ombres seulement au survol.',

    printTitle: 'Imprimés et réseaux sociaux',
    printIntro: 'Deux formats pour chaque flyer, avec le même dessin : A5 en PDF pour l’impression, 1080 × 1350 px en PNG pour WhatsApp, Facebook et Instagram.',
    order: 'Ordre de lecture d’un flyer',
    orderSteps: ['Logo, nom de l’église et ville', 'Surtitre (ex. : Culte de mardi)', 'Titre du thème', 'Mot manuscrit ou verset', 'Bandeau date · heure · lieu', 'Appel (ex. : Venez nombreux !)', 'Téléphones et Facebook'],
    examples: [
      { img: 'charte/flyer-sombre-fr.jpg', title: 'Version sombre', desc: 'Pour les thèmes de culte : fond nuit et bordeaux, rayons et titre dorés.' },
      { img: 'charte/flyer-clair-fr.jpg', title: 'Version claire', desc: 'Pour les événements et célébrations : fond crème, photo chaleureuse, écriture manuscrite.' },
    ],
    photos: 'Photos', photosNote: 'Chaudes et lumineuses (lumière dorée, bois, fruits, assemblée), jamais froides. Le texte se pose sur une zone unie ou un voile, jamais sur une zone chargée.',
  },

  en: {
    kicker: 'Visual identity',
    title: 'Brand guidelines',
    intro: 'The colours, typefaces, logo and writing rules of Turning Point Church International, for the website, flyers, cards and social media.',
    toc: ['Rules', 'Logo', 'Colours', 'Typography', 'Writing', 'Elements', 'Print'],

    rulesTitle: 'Rules to always follow',
    rules: [
      ['The name stays in English', '“Turning Point Church International”, even on French material. Accepted short form: TPCI.'],
      ['Two languages', 'Every piece exists in French and in English, as two separate versions.'],
      ['The time zone', 'Every time shows its zone: Cotonou GMT+1, Lomé GMT. Example: 6:30 PM (GMT+1).'],
      ['Benin phone numbers', 'Always with the 01 prefix, in pairs: +229 01 61 04 09 09.'],
      ['The logo is untouchable', 'Never stretch it, recolour it or redraw it.'],
    ],
    mottosTitle: 'Official mottos',

    logoTitle: 'The logo',
    logoIntro: 'The church seal: burgundy globe, gold cross, ring and ribbon. It comes with the name in capitals and the city.',
    logoDo: ['On ivory, burgundy or a darkened photo', 'At least 40 px wide on screen, 15 mm in print', 'Centred above the name on a flyer (12–15 % of the width)'],
    logoDont: ['Stretching or squashing it', 'Changing its colours or making it single-colour', 'Placing it on a busy photo without an overlay'],
    yes: 'Do', no: 'Avoid',
    lightBg: 'On light', darkBg: 'On burgundy',

    colorsTitle: 'Colours',
    colorsIntro: 'Burgundy carries the brand, gold highlights, ivory gives room. Gold and burgundy are never used in equal amounts.',
    siteColors: 'Website', siteColorsNote: 'They follow the site’s light and dark theme (button at the top right).',
    printColors: 'Print and social media', printColorsNote: 'Fixed: they do not change with the theme.',
    light: 'Light', dark: 'Dark',
    swatch: {
      acc: 'Headings, links, church name', hbg: 'Large banners, footer', hg: 'Gold on burgundy: kickers, rules', gt: 'Small gold text on ivory',
      gl: 'Gold rules, outlines, focus', bg: 'Page background', alt: 'Alternate sections', ink: 'Body text', mut: 'Secondary text',
      'print-nuit': 'Dark flyer background', 'print-bordeaux': 'Bottom of gradients', 'print-bordeaux-vif': 'Subtitles, script lettering', 'print-or-clair': 'Gold titles on dark',
      'print-or': 'Info band outline', 'print-or-profond': 'Frame and diamonds', 'print-creme': 'Light flyer background', 'print-encre': 'Light flyer text',
    },

    typeTitle: 'Typography',
    fonts: [
      { cls: 'spec-display', name: 'Cinzel', role: 'Headings, church name, kickers, buttons, menu. Always in spaced capitals.', sample: 'FROM SHAME TO FAME' },
      { cls: 'spec-serif', name: 'EB Garamond', role: 'Body text, intros and Bible verses (in italics).', sample: '“Instead of your shame you will receive a double portion.”' },
      { cls: 'spec-script', name: 'Great Vibes', role: 'Print only: one handwritten word or phrase per design.', sample: 'Come, let us give thanks!' },
    ],
    scaleTitle: 'Sizes on the website',
    scale: [['Page title', '56 px · Cinzel'], ['Section title', '42 px · Cinzel'], ['Intro', '21 px · EB Garamond'], ['Body text', '19 px · EB Garamond'], ['Kicker, button', '13 px · Cinzel, spaced']],

    writeTitle: 'Writing',
    writeIntro: 'We speak to people warmly, in short sentences. No emoji on the website or in print; in a WhatsApp message, only 📅 🕡 📍 at the start of a line.',
    writeHead: ['', 'French', 'English'],
    writeRows: [
      ['Date', 'Mardi 3 novembre 2026', 'Tuesday, 3rd November 2026'],
      ['Time', '18 h 30 (GMT+1)', '6:30 PM (GMT+1)'],
      ['Verse', '« … » – Ésaïe 61 : 7 (Louis Segond)', '“…” – Isaiah 61:7 (King James)'],
      ['Theme', 'DE LA HONTE À LA GLOIRE', 'FROM SHAME TO FAME'],
      ['Call', 'Venez nombreux et invitez un ami !', 'Come expectant and bring a friend!'],
      ['Address', 'Auditorium TPCI, Quartier Irédé, Akpakpa – Cotonou', 'TPCI Auditorium, Irede Quarters, Akpakpa – Cotonou'],
    ],
    writeNote: 'In French: a non-breaking space before : ; ! ? and inside « » quotes.',

    compTitle: 'Elements',
    buttons: 'Buttons', buttonsNote: 'Square corners, Cinzel capitals. One solid button per section; the second one is outlined.',
    btn: ['Join us', 'Service times', 'Download the flyer', 'Add to calendar'],
    infos: 'Flyer info band', infosNote: 'Always in this order: date, time (with the zone), venue on two lines.',
    infosData: [['Date', 'Sunday', '6th December 2026'], ['Time', '8:00 AM', '(GMT+1)'], ['Venue', 'TPCI Auditorium', 'Irede Quarters, Akpakpa – Cotonou']],
    spacing: 'Shapes and spacing', spacingNote: 'Square corners everywhere. Exceptions: round badges and buttons, and the flyer info band with rounded corners. Shadows on hover only.',

    printTitle: 'Print and social media',
    printIntro: 'Two formats for each flyer, same design: A5 PDF for printing, 1080 × 1350 px PNG for WhatsApp, Facebook and Instagram.',
    order: 'Reading order of a flyer',
    orderSteps: ['Logo, church name and city', 'Kicker (e.g. Tuesday Service)', 'Theme title', 'Script word or Bible verse', 'Date · time · venue band', 'Call (e.g. Bring a friend!)', 'Phone numbers and Facebook'],
    examples: [
      { img: 'charte/flyer-sombre-en.jpg', title: 'Dark version', desc: 'For service themes: night and burgundy background, gold rays and title.' },
      { img: 'charte/flyer-clair-en.jpg', title: 'Light version', desc: 'For events and celebrations: cream background, warm photo, script lettering.' },
    ],
    photos: 'Photos', photosNote: 'Warm and bright (golden light, wood, fruit, the congregation), never cold. Text sits on a plain area or an overlay, never on a busy area.',
  },
};
