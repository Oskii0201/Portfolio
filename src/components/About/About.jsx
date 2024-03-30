import styles from "./About.module.css"
import {WorkInProgress} from "../WorkInProgress/WorkInProgress.jsx";
export function About(){
    return(
        <div className={styles.inProgress}>
            <WorkInProgress/>
        </div>
    )
}