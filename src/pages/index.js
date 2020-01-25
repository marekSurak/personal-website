import React from "react"
import Header from "../components/header/header"
import Subheader from "../components/subheader/subheader"
import Menu from "../components/menu/menu"
import Layout from "../components/layout/layout"
import styles from "./index.module.css"

import About from "../components/section/about/about"
import Work from "../components/section/work/work"
import Contact from "../components/section/contact/contact"
// import Section from "../components/section/section"
import ParallaxGroup from "../components/parallax/parallaxGroup/parallaxGroup"
import SectionMenu from "../components/section/sectionMenu/sectionMenu"
import Footer from "../components/footer/footer"

const pageStructure = [
    {
        baseContent: _renderMainSection(),
        backContent: null
    },
    {
        baseContent: <About />,
        backContent: <SectionMenu firstLine='About' secondLine='me' className='about'/>
    },
    {
        baseContent: <Work />,
        backContent: <SectionMenu firstLine='Exper' secondLine='ience' className='work'/>
    },
    {
        baseContent: <Contact />,
        backContent: <SectionMenu firstLine='Contact' secondLine='me' className='contact'/>
    },
    {
        baseContent: <Footer />,
        backContent: null
    }
]


export default () => (
    <Layout>
        <div className={styles.parallaxWrap}>
            {pageStructure.map(pageSection => {
                return (
                    <ParallaxGroup baseContent={pageSection.baseContent} backContent={pageSection.backContent} />
                )
            })}
        </div>
    </Layout>
)

function _renderMainSection() {
    return (
        <div className={styles.viewportBox}>
            <Menu />

            <div className={styles.headerWrap}>
                <Header />
                <Subheader />
            </div>

            <span className={styles.scrollText}>Scroll down</span>            
        </div>
    )
}
