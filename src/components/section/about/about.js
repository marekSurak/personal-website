import React from "react"
import styles from "./about.module.css"
// import resumeFile from "./resume.pdf"
import Section from "../section"

export default function About () {
    return (
        <Section 
            className='about' 
            title='Marek Surak' 
            subTitle='My name is' 
            imageUrl='./img/profile-photo.webp' 
            fallbackImageUrl='./img/profile_photo.png' 
            id='about'
        >
            <span className={styles.text}>
                I am <b>3+</b> years experienced front end web developer. I am living in <b>Brno, Czech republic</b>,
                but I am also available to work <b>remotely.</b> Last 3 years I have worked for one of the biggest technology companies here
                in Czech republic. You can find more information below.
            </span>

            <span className={styles.text}>
                I would love to work on projects that matter. Projects that bring some value and make <b>world a better place.</b>
                I believe together, we can do something that makes peoples lives easier.
            </span>
            
            <span className={styles.text}>If you agree, feel free to <b>contact me!</b></span>
            
            <span className={styles.text}>
                <a className={styles.resume} href='/resume.pdf' rel="noopener noreferrer" target='_blank'>resume</a>
            </span>
        </Section>
    )
}