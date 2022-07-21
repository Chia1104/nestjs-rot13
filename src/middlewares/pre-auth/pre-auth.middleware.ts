import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import * as firebaseAdmin from 'firebase-admin';
import { Request, Response } from 'express';

@Injectable()
export class PreAuthMiddleware implements NestMiddleware {
  private defaultApp: firebaseAdmin.app.App;

  constructor() {
    const firebase_params = {
      type: 'service_account',
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKeyId: process.env.FIREBASE_KEY_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      clientId: process.env.FIREBASE_CLIENT_ID,
      authUri: process.env.FIREBASE_AUTH_URI,
      tokenUri: process.env.FIREBASE_TOKEN_URI,
      authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
      clientC509CertUrl: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    };
    this.defaultApp = firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(firebase_params),
    });
  }

  use(req: Request, res: Response, next: () => void) {
    const token = req.headers.authorization;
    if (!token) throw new UnauthorizedException();
    this.defaultApp
      .auth()
      .verifyIdToken(token.replace('Bearer ', ''))
      .then((decodedToken) => {
        req['user'] = {
          email: decodedToken.email,
        };
        next();
      })
      .catch(() => {
        PreAuthMiddleware.accessDenied(req.url, res);
      });
  }

  private static accessDenied(url: string, res: Response) {
    res.status(403).json({
      statusCode: 403,
      timestamp: new Date().toISOString(),
      path: url,
      message: 'Access Denied',
    });
  }
}
