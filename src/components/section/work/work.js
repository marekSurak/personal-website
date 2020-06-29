import React from "react"
import styles from "./work.module.css"
import Section from "../section"

const techStackData = [
    'React.js','Node.js','Express', 'Rest API', 'Cypress.io','Ima.js','Webpack',
    'Docker','EcmaScript','eslint','stylelint','less'
]

const jobDescData = [
    'Building SPA fully responsive web apps',
    'Developing components and pages according UI/UX designs',
    'Configuration of Gitlab CI pipelines',
    'Reviewing the quality of code',
    'Performing functional and integration testing',
    'Using agile and scrum for effective and successful sprints',
    'Writing clean and reusable code '
]

export default function Work () {
    return (
        <Section className='work' title='Work / Do' subTitle='Where I / What I' id='work'>
            <div className={styles.text}>
                Since <b>7/2016</b> I have worked for
                <a className={styles.workTitle} href="https://o.seznam.cz/en"  rel="noopener noreferrer" target="_blank">
                &nbsp;<b>Seznam.cz</b>&nbsp;
                </a>
                #1 company on Czech internet
            </div>
            
            <span className={styles.text}>I am working on great projects with amazing an team, here are some of the <b>projects:</b></span>
            
            <div className={styles.projectsBox}>
                { _renderProjectInfo()}
                { _renderJobDesc() }
                { _renderTech() }
            </div>
        </Section>
    )
}

function _renderProjectInfo() {
    return (
        <div className={styles.project}>
            { _renderProjectTitle('https://www.sbazar.cz', 'www.sbazar.cz')}
            &
            { _renderProjectTitle('https://www.sauto.cz/prejit-na-mobil/', 'www.sauto.cz')}
            { _renderProjectImage('./img/sbazar.webp', './img/sbazar.jpg')}  
        </div>
    )
}

function _renderProjectTitle(link = '', title = '') {
    return <a className={styles.projectTitle} href={link}>{title}</a>
}

function _renderProjectImage(url = '', fallbackUrl ='', alt = '') {
    return (
        <picture>
            <source srcset={url} type="image/webp" />
            <source srcset={fallbackUrl} type="image/png" />
            <img src={fallbackUrl} alt={alt} className={styles.projectImage}  />
        </picture>
    )
}

function _renderJobDesc() {
    return (
        <div className={styles.projectDescription}>
            <span className={styles.projectDescriptionTitle}><b>Job description:</b></span>

            <ul>
                {jobDescData.map((job, index) => <li key={index}>{job}</li>)}
            </ul>
        </div>
    )
}

function _renderTech() {
    return (
        <div className={styles.projectTech}>
            <ul>
                {techStackData.map((technology, index) => <li key={index}>{technology}</li>)}
            </ul>
        </div>
    )
}