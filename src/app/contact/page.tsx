///test-Sass
import variables from '@/styles/variaveis.module.scss'


const ContactPage = () => {
  return (
    <div>
      <section>
        <h1>Hello, Beezus</h1>
        <p>Parabéns por chegar até aqui na navegação. </p>
        <p style={{color:variables.primaryColor}}>Essa é a sua página para contato</p>
      </section>
    </div>
  )
}

export default ContactPage
