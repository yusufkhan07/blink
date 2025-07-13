import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Contact } from './contact/contact';
import styles from './app.module.scss';

const firebaseConfig = {
  apiKey: "AIzaSyCTvJErwf7LlxhDU-SyZuc4XdnVG8uTXyw",
  authDomain: "bytedevs-57983.firebaseapp.com",
  projectId: "bytedevs-57983",
  appId: "1:318533323510:web:eef1347e36a75b79373ad7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

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

