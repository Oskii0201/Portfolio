import styles from "./Footer.module.css"
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export function Footer(){
    return(
        <footer className={styles.footer}>

            {/* Designed */}
            <div className={styles.section}>
                <p>Designed and developed by Oskar Dybaś</p>
            </div>

            {/* Copyright */}
            <div className={styles.section}>
                <p>Copyright &copy; {new Date().getFullYear()} OD</p>
            </div>

            {/* Social links */}
            <div className={styles.section}>
                <ul className={styles.linkList}>
                    <li>
                        <a href="https://github.com/Oskii0201" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/oskar-dyba%C5%9B-b1aa5b239/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/oskar.dybas.1/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}