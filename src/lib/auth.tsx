import { Session } from "inspector";

interface User {
    id: string;
    username: string;
    email: string;
    // outros campos do usuário, se houver
  }
  
  interface ApiUser {
    id: string;
    username: string;
    email: string;
    // outros campos do usuário, se houver
  }
  
  // Função para autenticar o usuário
  export async function login(credentials: Record<string, string> | undefined): Promise<User | null> {
    try {
      // Chama a API local para autenticar o usuário
      const response = await fetch('sua/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
  
      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }
  
      const userFromApi: ApiUser = await response.json();
  
      // Mapeia os dados do usuário da API para o tipo User esperado pelo NextAuth
      const user: User = {
        id: userFromApi.id,
        username: userFromApi.username,
        email: userFromApi.email,
        // outros campos do usuário, se houver
      };
  
      return user;
    } catch (err) {
      console.error(err);
      throw new Error("Erro ao fazer login");
    }
  }
  
  // Função para buscar a sessão do usuário
  export async function getSession(session: { userId: any; }): Promise<any> {
    try {
      // Se a sessão não existir, retorne null
      if (!session || !session.userId) return null;
  
      // Busca os dados do usuário com base no ID da sessão
      const response = await fetch(`sua/api/usuarios/${session.userId}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar sessão do usuário');
      }
  
      const userData = await response.json();
  
      // Retorna os dados da sessão do usuário
      return {
        ...session,
        user: {
          id: userData.id,
          username: userData.username,
          email: userData.email,
          // outros campos do usuário, se houver
        }
      };
    } catch (err) {
      console.error(err);
      throw new Error("Erro ao buscar sessão do usuário");
    }
  }
  