import * as jwt from 'jsonwebtoken'


export const secretKey = 'mySecretKey';


export const generateJwt = (email: string): string => {
    const iat = new Date();
    const exp = new Date(iat.getTime() + (1000 * 60 * 1000))
    return jwt.sign({
        email: email
    },
    secretKey)
}