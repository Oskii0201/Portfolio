import styles from "./SoftSkills.module.css"
import {CardList} from "../CardList/CardList.jsx";

export function SoftSkills(){
    const softSkills = [
        "Communication",
        "Teamwork",
        "Problem solving",
        "Creativity",
        "Time management",
    ]
    return(
        <div className={styles.softSkills}>
            <h2>Soft <span className={styles.magenta}>Skills</span></h2>
            <div className={styles.listWrapper}>
                <CardList array={softSkills}/>
            </div>
        </div>
    )
}