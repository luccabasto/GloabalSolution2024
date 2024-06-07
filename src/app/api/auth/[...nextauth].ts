
import NextAuth  from "next-auth";
import Providers from "next-auth/react";

import { NextApiHandler } from "next";

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
    providers:[
        Providers.Credentials({
            name: 'Credentials',
            credentials:{
                username:{ label: 'Username', type: 'text'},
                password:{label: 'Password', type: 'password'}
            },
            authorize: async(credentials: any) =>{
                const res = await fetch(`http://localhost:3001/api/auth/login`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: {'Content-Type': 'application/json'}
                });
                const user = await res.json();
                if (res.ok && user){
                    return user;
                }
                return null;
            }
        })
    ],
    session:{
        jwt:true,
    },
    callbacks:{
        async jwt(token: { id: any; }, user: { id: any; }){
            if (user){
                token.id = user.id;
            }
            return token;
        },
        async session(session: { user: { id: any; }; }, token: { id: any; }){
            session.user.id = token.id;
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
};