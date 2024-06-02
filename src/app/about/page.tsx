///
//// test-Sass
import variables from '@/styles/variaveis.module.scss'


const AboutPage = () => {
  return (
    <div>
        <section>
            <h1 style={{color:variables.secondaryColor}}>Hello, Lucca Basto</h1>
            <p>Essa é sua aboutPage</p>
        </section>
    </div>
  )
}

export default AboutPage
