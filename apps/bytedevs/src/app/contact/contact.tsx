import styles from './contact.module.scss';

export function Contact() {
  return (
    <div className={styles.contact}>
      <span>Contact: </span>
      <a href="mailto:yusufkhanjee@gmail.com">yusufkhanjee@gmail.com</a>
    </div>
  );
}