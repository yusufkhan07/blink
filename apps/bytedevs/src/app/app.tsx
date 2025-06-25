import styles from './app.module.scss';
import { Contact } from './contact/contact';

export function App() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>ByteDevs.com</h1>
        <h2 className={styles.subtitle}>Coming Soon</h2>
        <p className={styles.description}>
          We’re building something awesome.<br />Stay tuned!
        </p>
        <Contact />
      </div>
    </div>
  );
}

export default App;

