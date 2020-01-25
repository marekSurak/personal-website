import React from "react"
import styles from "./sectionMenu.module.css"
import cn from "classnames";

export default function SectionMenu({firstLine, secondLine, className}) {
    return (
        <div className={cn(styles.menu, styles[className])}>
            <span className={styles.firstLine}>{firstLine}</span>
            <span className={styles.secondLine}>{secondLine}</span>
        </div>
    )
}