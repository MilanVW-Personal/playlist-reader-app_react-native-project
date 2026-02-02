# React Native Mobile App
## Short explanation
This repository contains all the code and files for my react-native project, which I developed for my Mobile Development course.
This README file aims to provide a clearer understanding of the app's structure and how it works.
For an overview of what each screen and feature does, you can consult the file via [`functionalities.md`](functionalities.md) or under the "Functionalities" section.

## What is this project?
This project is a mobile application, built with React Native and Expo.
In the application, users can scroll through a list of songs retrieved from the Spotify API.
A details page displays various metadata about the selected song, such as its length and current position.
Users can then add this song to their own playlists.

These playlists are stored in a Firestore database, linked to the user. When creating this project, I
linked this app as a "web application" in Firebase. This means that only the `firebaseConfig.ts` file in the "api" folder is sufficient to establish the connection.
If I ever decide to release this app, I plan to change this to an "android configuration."

The app features a Login/Register system, ensuring users' personal playlists are strictly unique to each account.
Users have full CRUD control over their playlists. They can view them, make changes, including removing specific songs from the playlist, and delete them.
All these changes are, of course, saved to the Firestore database, and the UI is also updated.

## Why did I make this project?
Zoals ik al eerder zei, was dit een verplicht project om te ontwikkelen voor het vak 'Mobile Development'. 
Passend binnen de vereisten van het project, mochten we het onderwerp zelf kiezen. 
Ik heb toen besloten om met de Spotify-API te werken omdat ik hier al wat ervaring mee had in een persoonlijk project en deze kennis verder wilde toepassen. 
Uiteindelijk, nadat dit project was ingediend, heb ik dit ook mondeling succesvol verdedigd door vragen van mijn toenmalige docent te beantwoorden.

As I mentioned earlier, this was a required project to develop for the "Mobile Development" course.
Fitting within the project requirements, we were allowed to choose our own topic.
I then decided to work with the Spotify API because I already had some experience with it in a personal project and wanted to apply this knowledge further.
Finally, after submitting this project, I successfully defended it orally by answering questions from my then-lecturer.

## When did I start this project?
I started this project at the end of November 2024 and was able to work on it until the deadline, Sunday, January 5, 2025, without counting the more recent changes.

## Used technologies
- React Native (Expo SDK)
- TypeScript
- Firebase Auth / Firestore
- Spotify API
- Native Modules (built-in and Expo)
- Gradle

## Functionalities
As previously mentioned, all screens and their associated functionalities are explained in a separate file.
You can access this overview via the file [`functionalities.md`](functionalities.md).
This documentation provides a clear and concise overview of the application's structure and operation.