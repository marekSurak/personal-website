import React from "react"
import Header from "../components/header/header"
import Subheader from "../components/subheader/subheader"
import Menu from "../components/menu/menu"
import Section from "../components/section/section"
import Layout from "../components/layout/layout"
import styles from "./index.module.css"

import { Link } from "gatsby"

export default () => (
    <Layout>

        <div className={styles.viewportBox}>
            <Menu />

            <div className={styles.headerWrap}>
                <Header />
                <Subheader />
            </div>
        </div>
        
        <Section sectionTitle="About me" sectionDescription="something interesting about me"/>
        <Section sectionTitle="Work" sectionDescription="something about my zero work"/>
        <Section sectionTitle="Contact me" sectionDescription="call me maybe?"/>

        <Link to="/404">Dont click here! There is nothing to see.</Link>
    </Layout>
)
