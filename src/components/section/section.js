import React from "react"
import SectionTitle from "./sectionTitle"
import SectionDescription from "./sectionDescription"
import sectionStyles from "./section.module.css"

export default ({ sectionTitle, sectionDescription}) => (
    <div className={sectionStyles.section}>
        <SectionTitle title={sectionTitle}/>
        <SectionDescription description={sectionDescription}/>
    </div>
)