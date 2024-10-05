import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideDatabase, getDatabase } from '@angular/fire/database';  // Para Realtime Database
// import { provideMessaging, getMessaging } from '@angular/fire/messaging';  // Para Cloud Messaging
import { environment } from '../environments/environment';  // Configurações do Firebase
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),  // Adiciona Realtime Database
    // provideMessaging(() => getMessaging())  // Adiciona Cloud Messaging
  ]
};
