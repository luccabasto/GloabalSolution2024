import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
//import's local
import {authConfig} from './auth.config';
import { connectToDb } from "./utils";
import { User } from "./models";

const login = async (credentials) => {
    try {
        connectToDb();
        const user = await User.findOne({username: credentials.username});

        if (!user) throw new Error("Credenciais para o acesso errada");

        const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
        );

        if(!isPasswordCorrect) throw new Error("Credenciais para o acesso errada");

        return user;
    } catch (err){
        console.log(err);
        throw new Error("Falha ao fazer o login");
    }
};

export const {
    handlers: {GET, POST}, 
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (err){
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async signIn({user, account, profile}){
            if (account?.provider === 'github'){
                connectToDb();
                try {
                    const user = await User.findOne({email: profile?.email});

                    if (!user){
                        const novoUser = new User({
                            username: profile.login,
                            email: profile.email,
                            image: profile.avatar_url,
                        });

                        await newUser.save();
                    }
                } catch (err){
                    console.log(err);
                    return false;
                }
            }
            return true;
        },
        ...authConfig.callbacks,
    },
});