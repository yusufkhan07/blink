import { FaSlack, FaShieldAlt } from 'react-icons/fa';
import styles from '../styles/Home.module.scss';
import { SLACK_OAUTH_URL } from '../config';

export function Home() {
  return (
    <section className={`flex flex-col items-center justify-center py-16 px-4 ${styles.hero}`}>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text text-center tracking-tight">
        Send Disappearing Messages in Slack
      </h1>
      <div className="flex items-center gap-2 mb-5">
        <FaShieldAlt className="text-primary text-lg" />
        <span className="text-sm text-secondary font-medium">End-to-end encrypted &amp; privacy-first</span>
      </div>
      <p className="text-lg md:text-xl text-text mb-10 text-center max-w-xl leading-relaxed">
        Securely send self-destructing messages in Slack. Perfect for sharing sensitive info that shouldn’t stick around.
      </p>
      <a
        href={SLACK_OAUTH_URL}
        className="mb-8 bg-primary text-white font-semibold rounded-full px-6 py-3 shadow hover:bg-secondary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center gap-2"
      >
        <FaSlack className="text-xl" />
        Add to Slack
      </a>
      <div className="mt-4 text-center text-text text-base">
        <div className="inline-block bg-background border border-primary rounded-lg px-4 py-3 shadow-sm">
          <span className="font-semibold text-text block mb-1">Want a demo before installing?</span>
          <span className="text-text">Request a demo:&nbsp;
            <a
              href="mailto:hello@bytedevs.com"
              className="text-primary underline font-medium"
            >
              hello@bytedevs.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}