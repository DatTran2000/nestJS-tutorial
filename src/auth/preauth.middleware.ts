import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as firebase from 'firebase-admin';
import * as serviceAccount from './firebaseServiceAccount.json';


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
export class PreauthMiddleware implements NestMiddleware {

    private defaultApp: any;

    constructor() {
        this.defaultApp = firebase.initializeApp({
            credential: firebase.credential.cert(firebase_params),
            databaseURL: "https://testing-project-352202.firebaseio.com",
        });
    }

    use(req: Request, res: Response, next: Function) {

        // firebase.auth()
        // .createCustomToken("Vg6ox5ZEPVcGGLRPC1UyipcKp4D2")
        // .then((customToken) => {
        //     console.log("custom token: " + customToken);
        // })
        // .catch((error) => {
        //     console.log('Error creating custom token:', error);
        // });

        // firebase.auth().verifyIdToken("Vg6ox5ZEPVcGGLRPC1UyipcKp4D2")
        // .then((decodedToken) => {
        //   const uid = decodedToken;
        //   console.log("UID" + uid);
        // })
        // .catch((error) => {
        //   // Handle error
        //   console.log(error);
        // });

    //     firebase.auth().getUserByEmail(req.body.email)
    //         .then((data) => {
    //             firebase.auth()
    //                 .createCustomToken(data.uid)
    //                 .then((customToken) => {
    //                 })
    //                 .catch((error) => {
    //                     console.log('Error creating custom token:', error);
    //                 });
    //             next();
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             this.accessDenied(req.url, res)
    //         });
    // }

    // private accessDenied(url: string, res: Response) {
    //     res.status(403).json({
    //         statusCode: 403,
    //         timestamp: new Date().toISOString(),
    //         path: url,
    //         message: 'Access Denied'
    //     });
    }
}