import styles from "./WorkInProgress.module.css"
import {ProgressBar} from "../ProgressBar/ProgressBar.jsx";
export function WorkInProgress(){
    return(
        <div className={styles.inProgress}>
            <h2>Sorry, this site is still being worked on.</h2>
            <ProgressBar/>
        </div>
    )
}