
///test-Sass

import EmailForm from '@/components/emailForm/newsForm';
import variables from '@/styles/variables.module.scss'



export default function HomePage() {
  return (
    <div>
      <section>
        <h1 style={{color: variables.primaryColor}}>Hello, Lucca Basto</h1>
        <p>Essa é a sua home---Page</p>
        <EmailForm/>
      </section>
    </div>
  
  );
}
