import { FaSlack } from 'react-icons/fa';
import styles from '../styles/Home.module.scss';
import { SLACK_OAUTH_URL } from '../config';

export function Home() {
  return (
    <section className={`flex flex-col items-center justify-center py-16 px-4 ${styles.hero}`}>
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary text-center">
        Send Disappearing Messages in Slack
      </h1>
      <p className="text-lg md:text-xl text-secondary mb-8 text-center max-w-xl">
        Securely send self-destructing and one-time-view messages in Slack. Perfect for sharing sensitive info that shouldn’t stick around.
      </p>
      <a
        href={SLACK_OAUTH_URL}
        className="mb-8 bg-primary text-white font-semibold rounded-lg px-5 py-2 transition hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center gap-2"
      >
        <FaSlack className="text-xl" />
        Add to Slack
      </a>
      <div className="text-sm text-gray-400 mt-4">
        <span>Works with your existing Slack workspace.</span>
      </div>
    </section>
  );
}