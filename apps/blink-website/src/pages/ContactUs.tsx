export function ContactUs() {
  return (
    <section className="container mx-auto py-16 px-4 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
      <p>
        Please read through our frequently asked questions below. If your question isn&apos;t answered, contact us at{' '}
        <a href="mailto:hello@bytedevs.com" className="text-primary underline">hello@bytedevs.com</a>.
      </p>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-primary">Frequently Asked Questions</h3>
        <div className="mb-6">
          <p className="font-medium text-text">Q: What is Blink?</p>
          <p className="text-secondary mb-4">
            A: Blink is a Slack app that allows users to send private, self-destructing messages within Slack channels—perfect for sharing sensitive or time-limited information.
          </p>
        </div>
        <div className="mb-6">
          <p className="font-medium text-text">Q: How long do Blink messages last?</p>
          <p className="text-secondary mb-4">
            A: By default, Blink messages disappear after 24 hours. Custom expiration settings will be available soon.
          </p>
        </div>
        <div className="mb-6">
          <p className="font-medium text-text">Q: Is Blink free?</p>
          <p className="text-secondary mb-4">
            A: Yes, Blink is currently free to use during our beta period. Paid plans with advanced features may be introduced in the future.
          </p>
        </div>
        <div className="mb-6">
          <p className="font-medium text-text">Q: Why can&apos;t I use Blink in personal conversations?</p>
          <p className="text-secondary mb-4">
            A: Currently, Blink only works in public and private Slack channels. It does not support direct messages.
          </p>
        </div>
        <div className="mb-6">
          <p className="font-medium text-text">Q: Why can&apos;t I use Blink in a private channel?</p>
          <p className="text-secondary mb-4">
            A: You need to invite the Blink app to a private channel before using it. This is a Slack requirement for apps to access private conversations.
          </p>
        </div>
        <div className="mb-6">
          <p className="font-medium text-text">Q: Which platforms does Blink support?</p>
          <p className="text-secondary mb-4">
            A: Blink is currently available for Slack. Support for other platforms is under consideration.
          </p>
        </div>
        <div>
          <p className="font-medium text-text">Q: Is Blink secure?</p>
          <p className="text-secondary">
            A: Yes. Blink uses end-to-end encryption and never stores message content. Messages are designed to disappear without a trace.
          </p>
        </div>
      </div>
    </section>
  );
}