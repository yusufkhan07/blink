import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { Footer } from '../components/Footer';

const firebaseConfig = {
  apiKey: "AIzaSyCTvJErwf7LlxhDU-SyZuc4XdnVG8uTXyw",
  authDomain: "bytedevs-57983.firebaseapp.com",
  projectId: "bytedevs-57983",
  appId: "1:318533323510:web:eef1347e36a75b79373ad7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function App() {
  useEffect(() => {
    console.log('App initialized');
    logEvent(analytics, 'app_opened');
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <ProjectCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;

