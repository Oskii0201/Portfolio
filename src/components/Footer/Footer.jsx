import styles from "./Footer.module.css"
import {LinkList} from "../LinkList/LinkList.jsx";
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
                <LinkList/>
            </div>
        </footer>
    )
}