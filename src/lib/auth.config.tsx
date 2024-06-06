import { signIn } from "next-auth/react";

export const authConfig = {
    pages: {
        signIn: '/login', 
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
              token.id = user.id;
              token.isAdmin = user.isAdmin;
            }
            return token;
          },
          async session({ session, token }) {
            if (token) {
              session.user.id = token.id;
              session.user.isAdmin = token.isAdmin;
            }
            return session;
          },
          authorized({ auth, request }) {
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      
            //Somente o ADMIN pode acessar o painel do admin
      
            if (isOnAdminPanel && !user?.isAdmin) {
              return false;
            }
      
            //Apenas usuários autenficados podem acessar a blog page
      
            if (isOnBlogPage && !user) {
              return false;
            }
      
            // Apenas usuários NÃO autenficados podem acessar a página de login. 
      
            if (isOnLoginPage && user) {
              return Response.redirect(new URL("/", request.nextUrl));
            }
      
            return true
          },
    }
}