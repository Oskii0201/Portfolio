import styles from "./NavbarWeb.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faHouse, faInbox} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons/faUser";
import {useEffect, useRef, useState} from "react";
import {NavLink} from "react-router-dom";

export function NavbarWeb(){
    const navRef = useRef(null);
    const [scrollBelowNav, setScrollBelowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                const navBottom = navRef.current.getBoundingClientRect().bottom;
                if (window.scrollY > navBottom) {
                    setScrollBelowNav(true);
                } else {
                    setScrollBelowNav(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navRef.current]);
    return (
        <nav ref={navRef} className={`${styles.navContainer} ${scrollBelowNav ? styles.darkenNav : ''}`}>
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logo}>
                    <h1>OD</h1>
                </div>

                {/* Navigation */}
                <div className={styles.linkContainer}>
                    <div className={styles.navLink}>
                        <NavLink to="/">
                            {({isActive})=>{
                                return (
                                    <div className={`${styles.wrapper} ${isActive ? styles.active : ""}`}>
                                        <FontAwesomeIcon icon={faHouse} /> Home
                                    </div>
                                )
                            }}
                        </NavLink>
                    </div>
                    <div className={styles.navLink}>
                        <NavLink to="/about">
                            {({isActive})=>{
                                return (
                                    <div className={`${styles.wrapper} ${isActive ? styles.active : ""}`}>
                                        <FontAwesomeIcon icon={faUser} /> About
                                    </div>
                                )
                            }}
                        </NavLink>
                    </div>
                    <div className={styles.navLink}>
                        <NavLink to="/projects">
                            {({isActive})=>{
                                return (
                                    <div className={`${styles.wrapper} ${isActive ? styles.active : ""}`}>
                                        <FontAwesomeIcon icon={faInbox} /> Projects
                                    </div>
                                )
                            }}
                        </NavLink>
                    </div>
                    <div className={styles.navLink}>
                        <NavLink to="/resume">
                            {({isActive})=>{
                                return (
                                    <div className={`${styles.wrapper} ${isActive ? styles.active : ""}`}>
                                        <FontAwesomeIcon icon={faFile} /> Resume
                                    </div>
                                )
                            }}
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}