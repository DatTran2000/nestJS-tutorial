import { Injectable } from '@nestjs/common';
import { Controller, Get, Req, Res, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import * as firebase from 'firebase-admin';
import * as serviceAccount from './auth/firebaseServiceAccount.json';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const auth = getAuth();

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const firebase_params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url
}


@Injectable()
export class AppService {

  getLogin(@Req() req: Request, @Res() res: Response): any {

    signInWithEmailAndPassword(auth, "trancongdat@gmail.com", "123456")
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    // firebase.auth().getUserByEmail(req.body.email)
    //   .then((data) => {
    //     firebase.auth()
    //       .createCustomToken(data.uid)
    //       .then((customToken) => {

    //         res.status(HttpStatus.OK).json({
    //           "access_token ": customToken
    //         });
    //       })
    //       .catch((error) => {
    //         console.log('Error creating custom token:', error);
    //       });
    //   })
    //   .catch((error) => {
    //   });
  }
  getHi(): string {
    return 'hi';
  }
}
