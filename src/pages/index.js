import React from "react"
import Header from "../components/header/header"
import Subheader from "../components/subheader/subheader"
import Menu from "../components/menu/menu"
import Layout from "../components/layout/layout"
import styles from "./index.module.css"


import { Link } from "gatsby"
import About from "../components/section/about/about"
import Work from "../components/section/work/work"
import Contact from "../components/section/contact/contact"

export default () => (
    <div className={styles.parallax}>
        <div className={styles.parallaxGroup}>
            <div className={`${styles.parallaxLayer} ${styles.parallaxBase}`}>
                <div className={styles.content}>
                    <div className={styles.viewportBox}>
                        <Menu />

                        <div className={styles.headerWrap}>
                            <Header />
                            <Subheader />
                        </div>

                        <span className={styles.scrollText}>Scroll down</span>            
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.parallaxGroup}>
            <div className={`${styles.parallaxLayer} ${styles.parallaxBase}`}>
                <div className={styles.content}>
                    <About />
                </div>
            </div>

            <div className={`${styles.parallaxBack}`}>
            <div className={styles.content}>
                <div className={styles.menu}>
                    <span className={styles.menuOne}>About</span>
                    <span className={styles.menuTwo}>me</span>
                </div>
                </div>
            </div>
        </div>

        <div className={styles.parallaxGroup}>
            <div className={`${styles.parallaxLayer} ${styles.parallaxBase}`}>
                <div className={styles.content}>
                    <Work />
                </div>
            </div>
            <div className={`${styles.parallaxBack}`}>
                <div className={styles.content}>
                    <div className={styles.menu}>
                        <span className={styles.menuOne}>Exper</span>
                        <span className={styles.menuTwo}>ience</span>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.parallaxGroup}>
            <div className={`${styles.parallaxLayer} ${styles.parallaxBase}`}>
                <div className={styles.content}>
                    <Contact />
                </div>
            </div>

            <div className={`${styles.parallaxBack}`}>
            <div className={styles.content}>
                <div className={styles.menu}>
                    <span className={styles.menuOne}>Contact</span>
                    <span className={styles.menuTwo}>me</span>
                </div>
                </div>
            </div>
        </div>
        
        <div className={styles.parallaxGroup}>
            <div className={`${styles.parallaxLayer} ${styles.parallaxBase}`}>
                <div className={styles.content}>
                
                <span className={styles.footer}>© 2019 Marek Surak</span>
                        
                </div>
            </div>
        </div>
    </div>
    // <Layout>

    //     <div className={styles.viewportBox}>
    //         <Menu />

    //         <div className={styles.headerWrap}>
    //             <Header />
    //             <Subheader />
    //         </div>
    
    //         <span className={styles.scrollText}>Scroll down</span>            
    //     </div>
        
    //     <About />
    //     <Work />    
    //     <Contact />

    //     <span className={styles.footer}>© 2019 Marek Surak</span>
    //     <div className={styles.footerCircle}></div>

    //     {/* <Link to="/404">Dont click here! There is nothing to see.</Link> */}
    // </Layout>
)
