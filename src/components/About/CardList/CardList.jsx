import styles from "./CardList.module.css";

export function CardList({array}){
    return(
        <div className={styles.container}>
            {array.map((element, index) => (
                <div className={styles.element} key={index}><span>{element}</span></div>
            ))}
        </div>
    )
}