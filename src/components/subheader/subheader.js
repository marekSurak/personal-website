import React from "react"
import styles from "./subheader.module.css"

export default () => (
    <div>
        <span className={styles.subheader}>
            I am 
            <span className={styles.name}> Marcus
            </span>
        </span>
        <span className={styles.subheader}>
            frontend web developer.
        </span>
    </div>
)