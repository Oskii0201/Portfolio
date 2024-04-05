import styles from "./ToolStack.module.css"
import {DiVisualstudio} from "react-icons/di";
import {CardList} from "../CardList/CardList.jsx";
import {SiPostman, SiWebstorm} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
export function ToolStack(){
    const toolStack = [
        <FaWindows />,
        <SiWebstorm />,
        <SiPostman />,
        <DiVisualstudio />
    ];
    return(
        <div className={styles.wrapper}>
            <h2>Tech <span className={styles.magenta}>Stack</span></h2>
            <div className={styles.listWrapper}>
                <CardList array={toolStack}/>
            </div>
        </div>
    )
}