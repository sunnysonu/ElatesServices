import * as jwt from 'jsonwebtoken';
import { JWTData } from '../types';
import { SignOptions } from 'jsonwebtoken';

export interface IJWTService {
    generateNewToken: (data: JWTData, privateKey: string, options: SignOptions) => string;
    isTokenValid: (data: JWTData, privateKey: string, token: string) => boolean;
}

class JWTService implements IJWTService {

    generateNewToken(data: JWTData, privateKey: string, options: jwt.SignOptions) {
        try {
            const token: string = jwt.sign(data, privateKey);
            return token;
        } catch (err) {
            console.error(`Error while generating the token`);
            throw new Error(`Error while generating the token`);
        }
    }

    isTokenValid(data: JWTData, privateKey: string, token: string) {
        try {
            jwt.verify(token, privateKey, (err, decoded: any) => {
                if(decoded.userId !== data.userId) {
                    throw Error(`Unauthorized`);
                }
            });
            return true;
        } catch (err) {
            console.error(`Invalid token ${err}`);
            return false;
        }
    }
}

export default JWTService;