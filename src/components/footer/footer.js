import React from "react"
import styles from "./footer.module.css"

export default () => {
    const date = new Date();
    const currentYear = date.getFullYear()

    return (
        <>
            <span className={styles.wip}><u>this page is work in progress</u></span>
            <span className={styles.footer}>{`Copyright © ${currentYear} Marek Surak`}</span>
        </>
    )
}