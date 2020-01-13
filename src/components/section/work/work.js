import React from "react"
import styles from "./work.module.css"

export default () => (
    <div className={styles.wrapper} id="work">
        {/* <div className={styles.imageWrap}></div> */}
        <div className={styles.textWrapper}>
            <div>
            <div className={styles.subTitle}>Where I / What I</div>
            <div className={styles.title} >Work / Do</div>
            
            <div className={styles.textSection}>
                Since <b>7/2017</b> I have worked for
                <a className={styles.workTitle} href="https://o.seznam.cz/en" target="_blank">
                &nbsp;<b>Seznam.cz</b>&nbsp;
                </a>
                #1 company on Czech internet
            </div>
            
            <span className={styles.textSection}>I am working on great projects with amazing an team, here are some of the <b>projects:</b></span>

            </div>

            <div className={styles.projectsBox}>
                
                <div className={styles.project}>
                    <a className={styles.projectTitle} href="https://www.sbazar.cz">Sbazar</a>
                    &
                    <a className={styles.projectTitle} href="https://www.sauto.cz/prejit-na-mobil/">Sauto</a>    
                    <img className={styles.projectImage} src="./img/sbazar.jpg" alt="" />
                </div>

                <div className={styles.projectDescription}>
                <span className={styles.projectDescriptionTitle}><b>Job description:</b></span>
                    <ul>
                        <li>Configuration of CI/CD Pipelines</li>
                        <li>Developing components and pages according graphic designs</li>
                        <li>Reviewing The Quality Of Code & Design</li>
                        <li>Profiling, Troubleshooting & Bugs Fixing</li>
                        <li>Performing Unit & Load Testing</li>
                        <li>Developing New Product Features</li>
                        <li>Experimenting With Latest Technologies</li>
                    </ul>
                </div>
                
                {/* <div className={styles.project}>
                    <a className={styles.projectTitle} href="https://www.sauto.cz/prejit-na-mobil/">Sauto</a>    
                    <img className={styles.projectImage} src="./img/sbazar.jpg" alt="" />
                </div> */}

                <div className={styles.projectTech}>
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Cypress</li>
                        <li>Ima.js</li>
                        <li>Webpack</li>
                        <li>Docker</li>
                        <li>EcmaScript</li>
                        <li>eslint</li>
                        <li>stylelint</li>
                        <li>less</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* <div className={styles.menu}>
            <div>
                <span className={styles.menuGrey}>Expe</span>
            </div>
            
            <div>
                <span className={styles.menuRed}>rience</span>
            </div>
        </div> */}
        
    </div>
)