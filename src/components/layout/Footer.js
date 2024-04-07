import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook className={styles.icon_facebook} />
        </li>
        <li>
          <FaInstagram className={styles.icon_instagram} />
        </li>
        <li>
          <FaLinkedin className={styles.icon_linkedin} />
        </li>
      </ul>
      <p>Meu rodapé</p>
    </footer>
  );
}

export default Footer;
