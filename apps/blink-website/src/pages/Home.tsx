import { FaSlack, FaShieldAlt } from 'react-icons/fa';
import styles from '../styles/Home.module.scss';
import { SLACK_OAUTH_URL } from '../config';

export function Home() {
  return (
    <section
      className={`flex flex-col items-center justify-center py-16 px-4 ${styles.hero}`}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text text-center tracking-tight">
        Send Disappearing Messages in Slack
      </h1>
      <div className="flex items-center gap-2 mb-5">
        <FaShieldAlt className="text-primary text-lg" />
        <span className="text-sm text-secondary font-medium">
          End-to-end encrypted &amp; privacy-first
        </span>
      </div>
      <p className="text-lg md:text-xl text-text mb-10 text-center max-w-xl leading-relaxed">
        Securely send self-destructing messages in Slack. Perfect for sharing
        sensitive info that shouldn’t stick around.
      </p>
      <div className="mt-8 text-center text-text text-base flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 w-full max-w-3xl">
          <a
            href={SLACK_OAUTH_URL}
            className="bg-primary text-white font-semibold rounded-full px-6 py-3 shadow hover:bg-secondary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center gap-2 w-full md:w-auto justify-center"
            style={{ minWidth: 180 }}
          >
            <FaSlack className="text-xl" />
            Add to Slack
          </a>
          <span className="font-semibold text-secondary mx-2 my-2 md:my-0">
            OR
          </span>
          <div className="inline-block bg-background border border-primary rounded-lg px-4 py-2 shadow-sm w-full md:w-auto text-center">
            <span className="font-semibold text-text block mb-1">
              Request a demo
            </span>
            <a
              href="mailto:hello@bytedevs.com"
              className="text-primary underline font-medium"
            >
              hello@bytedevs.com
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-3xl inline-block bg-background border border-accent rounded-lg px-4 py-3 shadow-sm">
            <span className="font-semibold text-accent block mb-1">
              How to use Blink
            </span>
            <span className="text-text">
              Just type{' '}
              <code className="bg-gray-800 text-white px-2 py-1 rounded text-sm font-mono shadow-inner">
                /blink your message
              </code>{' '}
              in any Slack channel to send a disappearing message!
            </span>
            <div className="mt-4 flex justify-center">
              <img
                src="/app-screenshot-1.png"
                alt="Blink Slack command screenshot"
                className="w-full object-contain border border-accent rounded shadow"
              />
            </div>
          </div>
          <div className="w-full max-w-3xl inline-block bg-background border border-accent rounded-lg px-4 py-3 shadow-sm mt-0">
            <span className="font-semibold text-accent block mb-1">
              What happens after your message expires?
            </span>
            <span className="text-text">
              Once the timer runs out, your message is deleted and replaced with
              an expiration notice. No one can view the original content again.
            </span>
            <div className="mt-4 flex justify-center">
              <img
                src="/app-screenshot-2.png"
                alt="Blink expired message screenshot"
                className="w-full object-contain border border-accent rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
