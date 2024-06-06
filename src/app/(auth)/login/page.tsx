///test-Sass
import styles from '@/styles/login.module.scss';
import {LoginForm} from '@/components/form/loginForm/loginForm';
import { handleGithubLogin } from '@/lib/action';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login com o Github</button>
        </form>
        <LoginForm/>
      </div>
    </div>
  )
}

export default LoginPage
