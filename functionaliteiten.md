# Functionaliteiten
Ik ben me ervan bewust dat de app er op dit moment nog niet "af" uitziet. 
De huidige interface is vooral bedoeld om alle functies goed te kunnen testen en de data overzichtelijk te tonen. 
Als ik deze app later volledig af zou maken en echt zou uitbrengen, is het eerste wat ik doe de look-and-feel aanpakken om de app modern en aantrekkelijk te maken.

## Scherm 1
<table>
  <tr>
    <td width="300">
      <img src="screenshots-pe/scherm1.png" width="300" alt="startscherm">
    </td>
    <td style="vertical-align: top;">
      <p>
        Dit eerste scherm is het startscherm van de applicatie en vormt vrijwel de "basis" van de app. 
        Via een koppeling met de <strong>Spotify API</strong> wordt de actuele playlist 'Ultratop 50 Singles - Vlaanderen' opgehaald. De data wordt dynamisch gerenderd in een overzichtelijke lijst.
      </p>
      <ul>
        <li><strong>Interactie:</strong> Gebruikers kunnen door de lijst scrollen om de volledige top 50 te verkennen.</li>
        <li><strong>Navigatie:</strong> Bij het selecteren van een bepaalde song wordt de gebruiker doorgeleid naar de specifieke detailpagina. </li>
        <li><strong>API-werking:</strong> Deze app communiceert rechtsstreeks met de Spotify API om alle data op te halen. In het bestand <code>api/spotifyApi.ts</code> staan alle herbruikbare functies die ik doorheen de hele applicatie oproep.</li>
      </ul>
    </td>
  </tr>
</table>


## Scherm 2
<table>
  <tr>
    <td width="300">
      <img src="screenshots-pe/scherm2.png" width="300" alt="scherm2-detail">
    </td>
    <td style="vertical-align: top;">
      <h3>Uitleg screenshot: </h3>
      <p>
        De detailpagina biedt een diepgaandere blik op de geselecteerde song. Hier worden metadata zoals de album-cover, artiestinformatie, tracklengte en de 'explicit' status getoond. Dit scherm dient eveneens ook als verificatie ofdat de API-data correct wordt opgeroepen en toegewezen.
        Op deze pagina staat ook een knop waarmee je het lied in kwestie kunt toevoegen aan je eigen playlist, die je kunt aanmaken als je bent ingelogd. Als je niet bent ingelogd, dan krijg je deze knop niet te zien.
      </p>
      <ul>
        <li><strong>Voorwaardelijke-rendering: </strong>De knop om een song aan een playlist toe te voegen is enkel zichtbaar voor ingelogde gebruikers, wat zorgt voor een gepersonaliseerde interface.</li>
        <li><strong>Interactie:</strong> Via de toevoeg-knop kan de gebruiker de song toevoegen aan een eigen playlist in de <strong>Firestore database.</strong> Dit gebeurt via een modal (<code>app/components/playlist/modalPopUp.ts</code>) die een overzicht toont van alle beschikbare playlists. Indien de gebruiker nog geen playlists heeft aangemaakt, zal de <code>Picker</code> component leeg blijven.</li>
        <li><strong>Navigatie:</strong> De 'Back'-button en automatische redirects na een succesvolle actie zorgen voor een vlotte user flow terug naar de startpagina.</li>
      </ul>
    </td>
  </tr>
</table>

## Scherm 3
<table>
  <tr>
    <td width="300">
      <img src="screenshots-pe/scherm3-1.png" width="300" alt="scherm3-playlists-ingelogd">
    </td>
    <td style="vertical-align: top;">
      <h3>Uitleg screenshot: </h3>
      <p>
        Dit scherm toont het overzicht van persoonlijke playlists voor ingelogde gebruikers. Wanneer er nog geen data aanwezig is en dus nog geen playlists zijn aangemaakt, krijgt de gebruiker een 'No playlists' melding te zien met een directe optie om een eerste playlist aan te maken.
      </p>
      <ul>
        <li><strong>Interactie:</strong> De 'Create new playlist' knop leidt de gebruiker naar het invulformulier van scherm 4 om een nieuwe playlist toe te kunnen voegen.</li>
        <li><strong>Navigatie:</strong> Door onderaan op een van de iconen te drukken, zal je naar de bijhorende pagina gebracht worden.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="300">
      <img src="screenshots-pe/scherm3-2.png" width="300" alt="scherm3-playlists-overzicht">
    </td>
    <td style="vertical-align: top;">
      <h3>Uitleg screenshot: </h3>
      <p>
        Zodra er playlists zijn aangemaakt, worden deze hier dynamisch getoond. Gebruikers kunnen hun collectie van playlists beheren door playlists te verwijderen via het 'X'-icoon rechtsbovenaan een playlist, waarbij de lijst onmiddellijk wordt bijgewerkt in de UI.
      </p>
      <ul>
        <li><strong>Interactie:</strong> Bij het succesvol aanmaken van een playlist krijgt de gebruiker een bevestiging via een alert, wat zorgt voor duidelijke feedback.</li>
        <li><strong>CRUD-functies:</strong> Dit scherm demonstreert de 'Read' en 'Delete' functionaliteiten binnen de app.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="300">
      <img src="screenshots-pe/scherm3-3.png" width="300" alt="scherm3-playlists-niet_ingelogd">
    </td>
    <td style="vertical-align: top;">
      <h3>Uitleg screenshot: </h3>
      <p>
        Omdat ik als vereiste met authenticatie moest werken, is dit scherm afgeschermd voor niet-ingelogde gebruikers. Zij krijgen een duidelijke melding te zien dat authenticatie vereist is om playlists te kunnen bekijken of aanmaken. Ze moeten met andere woorden eerst inloggen met hun account voor ze iets kunnen doen in de applicatie.
      </p>
      <ul>
        <li><strong>Authenticatie:</strong> De app controleert de authenticatiestatus van de gebruiker voordat de data-ophaalfuncties van de playlists vanuit de <strong>Firestore database</strong> worden aangeroepen.</li>
      </ul>
    </td>
</table>

## Scherm 4
<table>
  <tr>
    <td width="300">
      <img src="screenshots-pe/scherm4.png" width="300" alt="scherm4-playlist-toevoegen">
    </td>
    <td style="vertical-align: top;">
      <h3>Uitleg screenshot: </h3>
      <p>
        Op dit scherm kunnen gebruikers nieuwe playlists aanmaken via een invulformulier. De ingevoerde titel en beschrijving worden gekoppeld aan de <code>IPlaylist</code> interface om ervoor te zorgen dat de data-objecten altijd de juiste eigenschappen hebben.
      </p> 
      <p> Zoals eerder aangegeven is de styling hier momenteel puur functioneel. Bij een verdere uitbouw van de app zou ik dit formulier visueel verfijnen. 
      </p>
      <ul>
        <li><strong>Interactie:</strong> De 'Submit'-knop activeert de <code>createPlaylist</code> functie om de data op te slaan.</li>
        <li><strong>Navigatie:</strong> Na het versturen wordt de <code>useRouting</code> hook gebruikt om de gebruiker automatisch terug te leiden naar het overzicht op scherm 3.</li>
        <li><strong>Beveiliging: </strong>Bij elke playlist die de gebruiker aanmaakt, wordt deze via een unieke <code>userId</code> gekoppeld in <strong>Firestore</strong>. Op deze manier blijft de data strikt gescheiden en zijn de playlists uniek per individuele gebruiker.</li>
      </ul>
    </td>
</table>

## Scherm 5
<table>
  <tr>
    <td width="300">
      <img src="screenshots-pe/scherm5-1.png" width="300" alt="scherm5-account-acties">
    </td>
    <td style="vertical-align: top;">
      <h3>Uitleg screenshot: </h3>
      <p>
        Dit is het scherm voor je account. Als je nog niet bent ingelogd, zie je dit overzicht met twee duidelijke knoppen om in te loggen of je te registreren.
      </p> 
      <p> 
        Deze en andere pagina's omtrent accountbeheer gebruiken <strong>Firebase authenticatie</strong>. Op deze manier kunnen gebruikers hun eigen profiel beheren. 
      </p>
      <ul>
        <li><strong>Interactie:</strong> De knoppen brengen je naar de inlog- of registratiepagina om de flow van de app te testen.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="300">
      <img src="screenshots-pe/scherm5-2.png" width="300" alt="scherm5-ingelogd">
    </td>
    <td style="vertical-align: top;">
      <h3>Uitleg screenshot: </h3>
      <p>
        Zodra je bent ingelogd, krijg je dit overzicht van je accountgegevens te zien, zoals je gebruikersnaam en e-mailadres.
      </p> 
      <ul>
        <li>
          <strong>Data-verwerking:</strong> De accountgegevens worden dynamisch opgehaald uit de <strong>Firestore database</strong> om te verifiëren of de overdracht tussen de app en de database correct verloopt.
        </li>
      </ul>
    </td>
  </tr>
</table>

## Scherm 6
<table>
  <tr>
    <td width="300">
      <img src="screenshots-pe/scherm6.png" width="300" alt="scherm6-login">
    </td>
    <td style="vertical-align: top;">
      <h3>Uitleg screenshot: </h3>
      <p>
        Dit scherm wordt getoond na een druk op de 'Login' knop. Geregistreerde gebruikers kunnen hier hun email-adres en wachtwoord invoeren om toegang te krijgen tot hun account.
      </p> 
      <ul>
        <li><strong>Interactie:</strong> Bij het drukken op de 'Login' knop wordt de gebruiker teruggeleid naar het account-overzicht van scherm 5.</li>
        <li><strong>Data-verwerking:</strong> De accountgegevens worden opgeslagen in de <strong>Firestore database</strong>, waar bij het inloggen, deze gegevens worden opgevraagd.</li>
      </ul>
    </td>
  </tr>
</table>

## Scherm 7
<table>
  <tr>
    <td width="300">
      <img src="screenshots-pe/scherm7.png" width="300" alt="scherm7-register">
    </td>
    <td style="vertical-align: top;">
      <h3>Uitleg screenshot: </h3>
      <p>
        Naast de 'Login' optie, kunnen nieuwe gebruikers via dit scherm een account aanmaken door een e-mailadres, gebruikersnaam en wachtwoord op te geven.
      </p> 
      <ul>
        <li><strong>Interactie:</strong> Bij een druk op de 'Create account' knop wordt de gebruiker teruggebracht naar het account-overzicht, waar de ingevulde informatie direct zichtbaar is.</li>
        <li><strong>Data-verwerking:</strong> De accountgegevens die je als gebruiker invult, worden opgeslagen in de <strong>Firestore database</strong>, zodat deze later bij het inloggen weer kunnen worden opgevraagd.</li>
      </ul>
    </td>
  </tr>
</table>

## Welke native modules gebruik ik in deze app?
Voorlopig zijn er nog geen native modules in de applicatie verwerkt, 
maar ik wil een native module voor de camera toevoegen, zodat je zelf foto's kunt nemen,
die dan als afbeelding kunnen worden gebruikt voor de eigen gemaakte playlist of misschien als profielfoto.

Daarnaast wil ik ook nog wel proberen de native-module van de galerij toe te voegen, 
zodat je al reeds gemaakte afbeeldingen kunt kiezen voor de playlist / profielfoto

## Welke online-services gebruik ik in de app?

**1. Spotify API**
Met deze app maak ik gebruik van de Spotify API, die wordt gebruikt om de 'Top Songs' pagina op te vullen.
Er wordt met deze API, een api-key opgehaald en er wordt vervolgens een playlist opgehaald via een bepaalde id. 
In die functie, waar ik de playlist ophaal, vul ik de array op (gemaakt op basis van het 'ITrack' model), met de juiste waardes.
Uiteindelijk krijg ik dus een array terug met alle items die je op de eerste pagina ziet, met enkel de properties van het model en niet alle andere properties die de API 
teruggeeft.

Ik wil zeker nog wel een 2de online service gebruiken, maar ik ben nog niet zeker welke dit juist is (Firebase, MKKV...)

## Welke gestures en/of animaties zijn er gebruikt?
Voorlopig heb ik nog niet echt een concreet idee hoe ik gestures en animaties wil toevoegen, maar 
ik denk dat ik deze tegen het einde wil invoegen, nadat al de rest al is gemaakt. Een ideetje is misschien
om per item op de playlist pagina, een swipe-gesture toe te voegen, om zo een item te verwijderen, meer opties te tonen (edit, delete)...