import React from "react"
import styles from "./menu.module.css"

export default () => (
    <ul className={styles.list}>
        <li className={styles.item}>
            <a href="#about">About me</a>
        </li>
        <li className={styles.item}>
            <a href="#work">Work</a>
        </li>
        <li className={styles.item}>
            <a href="#contact">Contact me</a>
        </li>
    </ul>
)