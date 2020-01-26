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
import { Helmet } from "react-helmet"

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
        { _renderTags() }

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

function _renderTags() {
    return (
        <Helmet>
            <title>Marek Surak, frontend web developer.</title>
            <meta charSet="utf-8" />
            <meta name="author" content="Marek Surak" />
            <meta name="description" content="I am frontend web developer. I use javascript, react.js 
                and much more to build creative and nice web apps. You can go to my website and check some of my work.
                Or you can contact me to ask for more information." />
            
            <meta property="og:image" content="http://mareksurak.com/img/profile_photo.png" />
            <meta property="og:description" content="I am frontend web developer. I use javascript, react.js 
                and much more to build creative and nice web apps. You can go to my website and check some of my work.
                Or you can contact me to ask for more information." />
            <meta property="og:title" content="I am Marcus and I create web apps." />
            <meta name="theme-color" content="#9a9a9a"/>
            <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon"></link>
        </Helmet>
    )
}