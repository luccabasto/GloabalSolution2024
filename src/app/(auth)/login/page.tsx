///test-Sass
import variables from '@/styles/variables.module.scss';


const LoginPage = () => {
  return (
    <div>
      <section>
        <h1>Hello, Beezus</h1>
        <p>Parabéns por chegar até aqui na navegação. </p>
        <p style={{color:variables.secondaryColor}}>Essa é a sua página de login</p>
        <input type="text" className='border-black p-2' />
      </section>
    </div>
  )
}

export default LoginPage
