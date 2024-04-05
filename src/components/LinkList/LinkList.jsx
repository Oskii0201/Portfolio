import styles from "./LinkList.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
export function LinkList(){
    return(
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
    )
}