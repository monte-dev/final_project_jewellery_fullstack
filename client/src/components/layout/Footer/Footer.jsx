import { FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        <a
          href="https://github.com/monte-dev"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialsLink}
        >
          <FaGithub className={styles.socialsIcon} />
          GitHub
        </a>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Błażej Werbanowski. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
