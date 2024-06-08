
///test-Sass

import EmailForm from '@/components/emailForm/newsForm';
import variables from '@/styles/variables.module.scss'



export default function HomePage() {
  return (
    <div>
      <section>
        <h1 style={{color: variables.primaryColor}}>Hello, professor</h1>

        <p>Desculpa o estado do projeto, diria que faltou refinamento // tempo para conseguir desenvolver nível sprint
          espero que leve isso em consideração. 

          Ao entrar na rota de login utiliza as credenciais
          * vitorlucas@hotmail.com (Usuário)
          * vivitor123 (Senha)

          E será redirecionado para a rota exclusiva de usuários. 
        </p>

        <a href="https://github.com/luccabasto/GloabalSolution2024/tree/main">Github link</a>
        <EmailForm/>
      </section>
    </div>
  
  );
}
