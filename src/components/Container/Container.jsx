import styles from "./Container.module.css"
export function Container({children, paddingBottom = true}){
    return(
        <div className={`${styles.container} ${paddingBottom ? '' : styles.paddingBottomNone}`}>
            {children}
        </div>
    )
}