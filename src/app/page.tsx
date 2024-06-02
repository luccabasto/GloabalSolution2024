
///test-Sass
import variables from '@/styles/variaveis.module.scss'


export default function HomePage() {
  return (
    <div>
      <section>
        <h1 style={{color: variables.primaryColor}}>Hello, Lucca Basto</h1>
        <p>Essa é a sua home---Page</p>
      </section>
    </div>
  
  );
}
