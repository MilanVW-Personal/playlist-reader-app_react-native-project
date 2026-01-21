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
        Dit eerste scherm is het startscherm van de applicatie. 
        Op het scherm, wordt er via de Spotify-API (zie online services), de playlist 'Ultratop 50 Singles - Vlaanderen' opgehaald,
        waarna deze op het scherm worden getoond in een apart blok.
      </p>
      <ul>
        <li><strong>Interactie:</strong> Door te scrollen naar beneden, kun je de rest van de songs bekijken in de playlist.</li>
        <li><strong>Navigatie:</strong> Door op een item te drukken kun je naar de detailpagina gaan waar de details van de gekozen song worden getoond. </li>
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
        Dit tweede scherm, is zoals al eerder vermeld, de detailpagina van een song vanop het eerste scherm.
        Hier zul je onder andere de song / album-cover van het lied kunnen zien, samen met de artiesten, de lengte van de song, of het liedje expliciet is of niet (scheldwoorden gebruikt of niet), huidige positie van de song...
        Zoals hierboven vermeld, is de layout puur voor de werking te testen en zal zeker nog veranderen bij een eventuele release. 
        Op deze pagina staat ook een knop waarmee je het lied in kwestie kunt toevoegen aan je eigen playlist, die je kunt aanmaken als je bent ingelogd. Als je niet bent ingelogd, dan krijg je deze knop niet te zien.
      </p>
      <ul>
        <li><strong>Interactie:</strong> Door op de knop '...' te drukken krijg je een lijst met je eigen gemaakt playlists. </li>
        <li><strong>Navigatie:</strong> Door op het pijltje linksboven te drukken, zal je worden teruggestuurd naar de startpagina. Na een song te hebben toegevoegd aan een playlist, zal je ook naar de startpagina worden teruggestuurd.</li>
      </ul>
    </td>
  </tr>
</table>

## Scherm 3
<table>
  <tr>
    <td width="300">
      <img src="screenshots-pe/scherm3-1.png" width="300" alt="scherm2-detail">
    </td>
    <td style="vertical-align: top;">
      <h3>Uitleg screenshot: </h3>
      <p>
        Het derde scherm zal enkel beschikbaar zijn als je bent ingelogd met een account. Als dit het geval is,
        dan zal je dit scherm te zien krijgen. Omdat er nu nog geen playlists zijn aangemaakt staat er 'No playlists'.
        Uiteraard, als je op de knop eronder zou drukken, dan zal je naar het scherm 4 gestuurd worden. 
      </p>
      <ul>
        <li><strong>Interactie:</strong> Door op de knop 'Create new playlist' te drukken zal je een nieuwe playlist kunnen toevoegen a.d.h.v. een form.</li>
        <li><strong>Navigatie:</strong> Door onderaan op een van de iconen te drukken, zal je naar de bijhorende pagina gebracht worden.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="300">
      <img src="screenshots-pe/scherm3-2.png" width="300" alt="scherm2-detail">
    </td>
    <td style="vertical-align: top;">
      <h3>Uitleg screenshot: </h3>
      <p>
        Zodra er een playlist wordt aangemaakt, zal je dit scherm te zien krijgen.
        Je zal een kruisje te zien krijgen bij de playlist, als je hierop zou drukken dan zal de playlist ook verwijderd worden uit de lijst.
        Bij het aanmaken van een playlist zal je een alert krijgen, die bevestigt dat het aanmaken gelukt is.
      </p>
      <ul>
        <li><strong>Interactie:</strong> Door op de knop 'Create new playlist' te drukken zal je een nieuwe playlist kunnen toevoegen a.d.h.v. een form.</li>
        <li><strong>Navigatie:</strong> Door onderaan op een van de iconen te drukken, zal je naar de bijhorende pagina gebracht worden.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="300">
      <img src="screenshots-pe/scherm3-3.png" width="300" alt="scherm2-detail">
    </td>
    <td style="vertical-align: top;">
      <h3>Uitleg screenshot: </h3>
      <p>
        Als je niet zou zijn ingelogd dan krijg je dit scherm te zien waarop tekst staat die zegt dat je moet ingelogd zijn.
      </p>
      <ul>
        <li><strong>Navigatie:</strong> Door onderaan op een van de iconen te drukken, zal je naar de bijhorende pagina gebracht worden.</li>
      </ul>
    </td>
</table>

## Scherm 4
<table>
  <tr>
    <td width="300">
      <img src="screenshots-pe/scherm4.png" width="300" alt="scherm2-detail">
    </td>
    <td style="vertical-align: top;">
      <h3>Uitleg screenshot: </h3>
      <p>
        Dit 4de scherm is de create pagina van de playlists, waar je het formulier kunt invullen.
        Dit formulier bestaat dus uit een titel en een beschrijving van de playlist, die ook in de interface van IPlaylist, worden meegegeven,
        zodat er objecten met deze properties kunnen gemaakt worden. Hier is, zoals al eerder gezegd, de styling niet op en top, maar voor een mogelijke release toe ben ik wel van plan om dit wat aangenamer te maken.
        Je ziet ook een knop onderaan de pagina genaamd 'Submit', dit zal simpelweg de functie 'createPlaylist' uitvoeren (zie playlist.ts), en zal ook gebruik maken van de 'useRouting' hook 
        om te navigeren naar de vorige pagina '..'.
      </p>
      <ul>
        <li><strong>Interactie:</strong> Door op de knop 'Submit' te drukken, maak je een nieuwe playlist aan en wordt je teruggestuurd naar de overzichtspagina van scherm 3</li>
        <li><strong>Navigatie:</strong> Door onderaan op een van de iconen te drukken, zal je naar de bijhorende pagina gebracht worden. Door op het pijltje rechtsboven te klikken, wordt je terug naar scherm 3 gebracht.</li>
      </ul>
    </td>
</table>

## Scherm 5
![img.png](screenshots-pe/scherm5-1.png)
![img.png](screenshots-pe/scherm5-2.png)

**Uitleg screenshot:**
Dit vijfde scherm is het account-scherm. Als je nog geen account zou hebben, dan zal je de eerste foto te 
zien krijgen. Je zal daar 2 knoppen krijgen die je ofwel brengen naar een inlog-pagina of een pagina waar je kunt registeren.
Voorlopig werken deze pagina's nog niet helemaal, maar ik denk dat ik deze wel kan laten werken door eventueel Firebase authenticatie te gebruiken. 

Als je wel ben ingelogd dan zal je de tweede foto te zien krijgen. Hier zal je een overzicht krijgen van je gegevens zoals je 'username', paswoord, en email-adres. 
Hoe dat de pagina er nu uitziet is tijdelijk en zal hoogstwaarschijnlijk wel aanpassen qua styling. Dat geldt ook voor de 2 knoppen op foto 1.

## Scherm 6
![img.png](screenshots-pe/scherm6.png)

**Uitleg screenshot:**
Dit scherm krijg je als op de 'Login' knop drukt. 
Als je al geregistreerd bent, dan hoef je hier gewoonweg je username en wachtwoord in te voeren en dan op de 'Login' knop te drukken.
Bij een druk op de knop zal je dus terug gebracht worden naar je account-overzicht (zie vorig scherm)' met de juiste gegevens. Zoals alle schermen,
is de styling tijdelijk, en zal dus zeker veranderen.

Voorlopig werkt de functionaliteit ook nog niet 100%, dus hier zal ook nog moeten aan getweaked worden, als ik dit wil laten werken,
eventueel door gebruik van Firebase bijvoorbeeld, zoals hierboven al vermeld.

## Scherm 7
![img.png](screenshots-pe/scherm7.png)

**Uitleg screenshot:**
Naast de 'Login' knop, kom je dit scherm terecht als je op de 'Register' knop drukt.
Hier kan je een email, username, passwoord invoeren die je wilt gebruiken. 
Bij een druk op de 'Create account' knop, zal je ook worden teruggebracht naar je account-overzicht, opnieuw met de juiste info ingevuld.

Voorlopig werkt de functionaliteit hier ook nog niet 100%, dus hier zal ook nog moeten aan getweaked worden, als ik dit wil laten werken,
eventueel door gebruik van Firebase bijvoorbeeld, zoals al eerder vermeld.

## Native modules
Voorlopig zijn er nog geen native modules in de applicatie verwerkt, 
maar ik wil een native module voor de camera toevoegen, zodat je zelf foto's kunt nemen,
die dan als afbeelding kunnen worden gebruikt voor de eigen gemaakte playlist of misschien als profielfoto.

Daarnaast wil ik ook nog wel proberen de native-module van de galerij toe te voegen, 
zodat je al reeds gemaakte afbeeldingen kunt kiezen voor de playlist / profielfoto

## Online services

**1. Spotify API**
Met deze app maak ik gebruik van de Spotify API, die wordt gebruikt om de 'Top Songs' pagina op te vullen.
Er wordt met deze API, een api-key opgehaald en er wordt vervolgens een playlist opgehaald via een bepaalde id. 
In die functie, waar ik de playlist ophaal, vul ik de array op (gemaakt op basis van het 'ITrack' model), met de juiste waardes.
Uiteindelijk krijg ik dus een array terug met alle items die je op de eerste pagina ziet, met enkel de properties van het model en niet alle andere properties die de API 
teruggeeft.

Ik wil zeker nog wel een 2de online service gebruiken, maar ik ben nog niet zeker welke dit juist is (Firebase, MKKV...)

## Gestures & animaties
Voorlopig heb ik nog niet echt een concreet idee hoe ik gestures en animaties wil toevoegen, maar 
ik denk dat ik deze tegen het einde wil invoegen, nadat al de rest al is gemaakt. Een ideetje is misschien
om per item op de playlist pagina, een swipe-gesture toe te voegen, om zo een item te verwijderen, meer opties te tonen (edit, delete)...