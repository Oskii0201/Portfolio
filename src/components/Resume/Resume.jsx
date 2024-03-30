import styles from "./Resume.module.css"
import {WorkInProgress} from "../WorkInProgress/WorkInProgress.jsx";
export function Resume(){
    return(
        <div className={styles.inProgress}>
            <WorkInProgress/>
        </div>
    )
}