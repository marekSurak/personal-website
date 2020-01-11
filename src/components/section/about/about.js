import React from "react"
import styles from "./about.module.css"

export default () => (
    <div className={styles.wrapper} id="about">
        <div className={styles.imageWrap}>
            <img className={styles.image} src='./img/profile_photo.png' alt='profile' />
        </div>
        
        <div className={styles.textWrapper}>
            <div className={styles.subTitle}>My name is</div>
            <div className={styles.title} >Marek Surak</div>
            <span className={styles.text}>
                I am <b>3+</b> years experienced front end web developer. I am living in <b>Brno, Czech republic</b>,
                but I am also available to work <b>remotely.</b> Last 3 years I have worked for one of the biggest technology companies here
                in Czech republic. You can find more information below.
            </span>
            <span className={styles.text}>
                I would love to work on projects that matters. Projects that brings some value and make <b>world a better place.</b>
                I believe together, we can do something that makes peoples lives easier.
            </span>
            <span className={styles.text}>If you agree, feel free to <b>contact me!</b></span>
            <span className={styles.text}>See my <a className={styles.cv} href="#CV">CV</a></span>
        </div>

        {/* <div className={styles.menu}>
            <span className={styles.menuOne}>About</span>
            <span className={styles.menuTwo}>me</span>
        </div> */}
    </div>
)