import { hash, compare } from 'bcrypt';

export const encodePassword = async(rawPassword: string) => {
     const password = await hash(rawPassword, 15)
    return password ;
}
