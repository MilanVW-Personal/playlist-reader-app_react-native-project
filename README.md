# React Native Mobile App
## Korte uitleg
Deze repository bevat alle code en files voor mijn react-native project, dat ik destijds heb ontwikkeld voor het vak 'Mobile Development'. 
Met deze README wil ik een duidelijker beeld schetsen van hoe de app in elkaar zit en hoe deze precies werkt. 
Om een overzicht te krijgen wat elk scherm en functionaliteit doet, kunt u het bestand [hier](functionaliteiten.md) of bij 'Functionaliteiten' raadplegen.

## Wat is dit project?
Dit project is een mobiele applicatie, gebouwd met React Native en Expo. 
In de applicatie, kan je uit een hele playlist van songs, die uit de Spotify-API worden opgehaald, kiezen welke je toevoegt aan je eigen gemaakte 'playlists'. 
Deze eigen playlists worden via Firebase, opgeslagen in een Firestore database. Je kan ook verschillende accounts aanmaken als je dat zou wensen, want het project bevat ook een Login/Register-systeem, waar de accounts ook in de Firestore database worden opgeslagen.
Per account kun je meerdere eigen playlists hebben. 
Je kan deze playlists ook aanpassen en zelfs verwijderen als je dat zou willen. 
Als je op zo'n playlist drukt, dan krijg je ook alle songs te zien die je er aan hebt toegevoegd. 
Dit doe je door op een song te klikken op de homepagina, waarbij je via de detailpagina de playlist kan kiezen waaraan je de song wilt toevoegen.
Op deze detailpagina kun je allerlei gegevens van de specifieke song bekijken zoals de duur, expliciteit... De layout is hier heel basic, maar het draait hier vooral rond de functionaliteit. 
Initieel had ik dit project destijds gemaakt door deze te verbinden aan een "web-applicatie" op firebase, waardoor enkel de [`firebase config`](/api/firebaseConfig.ts) volstond. 
Als ik later deze applicatie zou willen uitbrengen, dan ben ik bereid om deze aan een "android-app" te linken in Firebase.

## Waarom heb ik dit project gemaakt?
Zoals ik al eerder zei, was dit een verplicht project om te ontwikkelen voor het vak 'Mobile Development'. 
Passend binnen de vereisten van het project, mochten we het onderwerp zelf kiezen. 
Ik heb toen besloten om met de Spotify-API te werken omdat ik hier al wat ervaring mee had in een persoonlijk project en deze kennis verder wilde toepassen. Uiteindelijk, nadat dit project was ingediend, heb ik dit ook mondeling moeten verdedigen door vragen van mijn toenmalige docent te beantwoorden.

## Wanneer ben ik aan dit project begonnen?
Ik ben met dit project gestart eind november 2024 en heb er, zonder de recente aanpassingen mee te tellen, aan kunnen werken tot aan de deadline, zondag 5 januari 2025.

## Gebruikte technologieën
- React Native (Expo SDK)
- Typescript
- Firebase Auth / Firestore
- Spotify API
- Native Modules (ingebouwd en Expo)
- Gradle

## Functionaliteiten
Zoals eerder al aangegeven, worden alle schermen en de bijbehorende functionaliteiten in een apart bestand toegelicht. U kunt dit overzicht raadplegen via [deze link](functionaliteiten.md). Deze documentatie biedt een helder en overzichtelijk beeld over de structuur en werking van de app.