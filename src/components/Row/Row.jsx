import styles from "./Row.module.css"
export function Row({children, wrapReverse = false}){
    return(
        <div className={`${styles.row} ${wrapReverse ? styles.reverse : ''}`}>
            {children}
        </div>
    )
}