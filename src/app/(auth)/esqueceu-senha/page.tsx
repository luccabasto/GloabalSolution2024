///test-Sass
import variables from '@/styles/variaveis.module.scss'

const EsqueciSenha = () => {
    return (
      <div>
        <section>
          <h1>Hello, Beezus</h1>
          <p>Parabéns por chegar até aqui na navegação. </p>
          <p style={{color:variables.secondaryColor}}>Essa é a sua página de ESQUECI MINHA SENHA</p>
          <input type="text" className='border-black p-2' />
        </section>
      </div>
    )
  }
  
  export default EsqueciSenha
  