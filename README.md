# React Native Mobile App
## Korte uitleg
Deze repository bevat alle code en files voor mijn react-native project, dat ik destijds heb ontwikkeld voor het vak 'Mobile Development'. 
Met deze README wil ik een duidelijker beeld schetsen van hoe de app in elkaar zit en hoe deze precies werkt. 
Om een overzicht te krijgen van wat elk scherm en functionaliteit doet, kunt u het bestand [hier](functionaliteiten.md) of bij 'Functionaliteiten' raadplegen.

## Wat is dit project?
Dit project is een mobiele applicatie, gebouwd met React Native en Expo. 
In de applicatie, kunnen gebruikers door een lijst van songs scrollen die uit de Spotify-API worden opgehaald.
Via een detailpagina wordt er allerlei metadata van de gekozen song getoond zoals lengte, huidige positie... 
Gebruikers hebben dan de keuze om deze song toe te voegen aan hun eigen gemaakte playlists.

Deze playlists worden opgeslagen in een Firestore database, gelinkt aan de gebruiker. Bij het maken van dit project, heb ik 
deze app als "web-applicatie" gelinkt in Firebase. Hierdoor is enkel het bestand `firebase.config` in de map `api` voldoende om de connectie te maken.
Als ik later deze app zou willen uitbrengen, ben ik wel van plan om dit naar een "android configuratie" te veranderen.

De app beschikt over een Login/Register-systeem, waardoor de persoonlijke playlists van gebruikers strikt uniek zijn per account.
De gebruiker heeft een volledige CRUD controle over de playlists. Ze kunnen ze bekijken, wijzigingen aanbrengen, waaronder bepaalde songs verwijderen uit de playlist, en verwijderen.
Al deze wijzigigen worden uiteraard in de Firestore database opgeslagen en wordt de UI ook geüpdatet.

## Waarom heb ik dit project gemaakt?
Zoals ik al eerder zei, was dit een verplicht project om te ontwikkelen voor het vak 'Mobile Development'. 
Passend binnen de vereisten van het project, mochten we het onderwerp zelf kiezen. 
Ik heb toen besloten om met de Spotify-API te werken omdat ik hier al wat ervaring mee had in een persoonlijk project en deze kennis verder wilde toepassen. 
Uiteindelijk, nadat dit project was ingediend, heb ik dit ook mondeling succesvol verdedigd door vragen van mijn toenmalige docent te beantwoorden.

## Wanneer ben ik aan dit project begonnen?
Ik ben met dit project gestart eind november 2024 en heb er, zonder de recentere aanpassingen mee te tellen, aan kunnen werken tot aan de deadline, zondag 5 januari 2025.

## Gebruikte technologieën
- React Native (Expo SDK)
- TypeScript
- Firebase Auth / Firestore
- Spotify API
- Native Modules (ingebouwd en Expo)
- Gradle

## Functionaliteiten
Zoals eerder al aangegeven, worden alle schermen en de bijbehorende functionaliteiten in een apart bestand toegelicht. 
U kunt dit overzicht raadplegen via [deze link](functionaliteiten.md). 
Deze documentatie biedt een helder en overzichtelijk beeld over de structuur en werking van de applicatie.