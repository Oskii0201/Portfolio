import styles from "./Projects.module.css"
import {WorkInProgress} from "../WorkInProgress/WorkInProgress.jsx";
export function Projects(){
    return(
        <div className={styles.inProgress}>
            <WorkInProgress/>
        </div>
    )
}