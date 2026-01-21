# React Native Mobile App
## Korte uitleg
Deze repository bevat alle code en files voor mijn react-native project, dat ik destijds voor het vak 'Mobile Development' heb moeten maken. 
Met deze README wil ik een duidelijker beeld schetsen van hoe de app in elkaar zit en hoe deze precies werkt. 
Om een duidelijker beeld te krijgen wat elk scherm en functionaliteit doet, kunt u het bestand [hier](PE.md) of bij 'Functionaliteiten' raadplegen.

## Wat is dit project?
Dit project is een mobiele applicatie, gemaakt met react-native en met behulp van Expo. 
In de applicatie, kan je uit een hele playlist van songs, die uit de Spotify-API worden opgehaald, kiezen welke je toevoegt aan je eigen gemaakte 'playlists'. 
Deze eigen playlists worden via Firebase, opgeslagen in een Firestore database. Je kan ook verschillende accounts aanmaken als je dat zou wensen, want het project bevat ook een Login/Register-systeem, waar de accounts ook in de Firestore database worden opgeslagen.
Per account kun je meerdere eigen playlists hebben. 
Je kan deze playlists ook aanpassen en zelfs verwijderen als je dat zou willen. 
Als je op zo'n playlist drukt, dan krijg je ook alle songs te zien die je er aan hebt toegevoegd. 
Dit doe je door op een song te klikken op de homepagina, waarbij je via de detailpagina de playlist kan kiezen waaraan je de song wilt toevoegen.
Op deze detailpagina kun je allerlei gegevens van de specifieke song bekijken zoals de duur, expliciteit... De layout is hier heel basic, maar het draait hier vooral rond de functionaliteit. 
Initieel had ik dit project destijds gemaakt door deze te verbinden aan een "web-applicatie" op firebase, waardoor enkel de [firebase config](/api/firebaseConfig.ts) volstond. 
Als ik later deze applicatie zou willen uitbrengen, dan ben ik bereid om deze aan een "android-app" te linken in Firebase.

## Waarom heb ik dit project gemaakt?
Zoals ik al eerder zei, was dit een verplicht project om te maken voor het vak 'Mobile Development'. 
Het onderwerp van de app konden we zelf kiezen zo lang dat alle vereisten dat in de opgave stonden in de app verwerkt zaten.
Ik heb gekozen om met de Spotify-API te werken omdat ik hier al eens eerder mee had gewerkt in een eigen project. 
Uiteindelijk, nadat dit project was ingediend op de deadline, heb ik dit ook mondeling moeten verdedigen door vragen van mijn toenmalige docent te beantwoorden.

## Wanneer ben ik aan dit project begonnen?
Ik ben met dit project gestart eind november 2024 en heb er, zonder de recente aanpassingen mee te tellen, aan kunnen werken tot aan de deadline, zondag 5 januari 2025.

## Gebruikte technologieën
- React Native
- Firebase / Firestore
- Expo Go
- Spotify API
- Native Modules (ingebouwd en Expo)
- Gradle

## Functionaliteiten
Zoals ik al eerder aangaf, staan alle schermen en andere functionaliteiten van de app in een apart bestand uitgelegd.
Zoals hierboven kun je dit bestand via [deze link](PE.md) bereiken. 
Ik hoop dat deze schermen je een iets of wat duidelijk beeld geven hoe de app precies in elkaar zit. 