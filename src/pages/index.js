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
    <Layout>

        <div className={styles.viewportBox}>
            <Menu />

            <div className={styles.headerWrap}>
                <Header />
                <Subheader />
            </div>

            <div className={styles.scrollWrap}>
                <img className={styles.scrollIcon} src="./arrow-down.png" alt="scroll down" />
                <span className={styles.scrollText}>Scroll down</span>
            </div>
        </div>
        
        <About />
        <Work />
        <Contact />

        <Link to="/404">Dont click here! There is nothing to see.</Link>
    </Layout>
)
