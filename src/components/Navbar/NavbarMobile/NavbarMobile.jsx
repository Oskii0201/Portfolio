import styles from "./NavbarMobile.module.css"
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faHouse, faInbox} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons/faUser";
import {NavLink} from "react-router-dom";
export function NavbarMobile(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const closeMobileMenu = () =>{
        window.scrollTo(0, 0);
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    return(
        <nav className={`${styles.navContainer} ${
            isMobileMenuOpen ? styles.menuOpened : ''}`}>
            <div className={styles.header}>

                {/* Logo */}
                <div className={styles.logo}>
                    <h1>OD</h1>
                </div>

                {/* Menu button */}
                <div className={styles.menuButtonContainer}>
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                        }}
                        className={styles.menuButton}
                    >
                        <span
                            className={`${styles.menuButtonItem} ${
                                isMobileMenuOpen ? styles.menuButtonTopItemRotation : ''
                            }`}
                        ></span>
                        <span
                            className={`${styles.menuButtonItem} ${
                                isMobileMenuOpen ? styles.menuButtonMiddleItemRotation : ''
                            }`}
                        ></span>
                        <span
                            className={`${styles.menuButtonItem} ${
                                isMobileMenuOpen ? styles.menuButtonBottomItemRotation : ''
                            }`}
                        ></span>
                    </button>
                </div>
            </div>

            {/* Links */}
            <div
                className={`${styles.menuContainer} ${
                    isMobileMenuOpen ? styles.menuContainerIsShown : ''}`}
            >
                <div className={styles.navLink}>
                    <NavLink to="/" onClick={closeMobileMenu}><FontAwesomeIcon icon={faHouse} /> Home</NavLink>
                </div>
                <div className={styles.navLink}>
                    <NavLink to="/about" onClick={closeMobileMenu}><FontAwesomeIcon icon={faUser} /> About</NavLink>
                </div>
                <div className={styles.navLink}>
                    <NavLink to="/projects" onClick={closeMobileMenu}><FontAwesomeIcon icon={faInbox} /> Projects</NavLink>
                </div>
                <div className={styles.navLink}>
                    <NavLink to="/resume" onClick={closeMobileMenu}><FontAwesomeIcon icon={faFile} /> Resume</NavLink>
                </div>
            </div>
        </nav>
    )
}