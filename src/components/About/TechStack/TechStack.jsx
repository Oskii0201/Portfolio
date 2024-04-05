import styles from "./TechStack.module.css"
import {SiDotnet} from "react-icons/si";
import {DiGit, DiJavascript1, DiReact} from "react-icons/di";
import {CardList} from "../CardList/CardList.jsx";
import {TbBrandCSharp, TbSql} from "react-icons/tb";
import {FaPhp} from "react-icons/fa6";
export function TechStack(){
    const techStack = [
        <DiJavascript1 />,
        <DiReact />,
        <TbBrandCSharp />,
        <SiDotnet />,
        <FaPhp />,
        <TbSql />,
        <DiGit />,
    ];
    return(
        <div className={styles.wrapper}>
            <h2>Professional <span className={styles.magenta}>Skillset</span></h2>
            <div className={styles.listWrapper}>
                <CardList array={techStack}/>
            </div>
        </div>
    )
}