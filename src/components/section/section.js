import React from "react"
import styles from "./section.module.css"
import cn from "classnames";

export default function Section ({ id, title, subTitle, imageUrl, children, className }) {
    return (
        <div className={cn(styles.wrapper, styles[className])} id={id}>
            { imageUrl && _renderImage(imageUrl) }
            
            <div className={styles.contentWrapper}>
                { _renderTitle(title, subTitle) }
                { _renderContent(children) }
            </div>
        </div>
    )
}

function _renderImage(imageUrl) {
    return (
        <div className={styles.imageWrap}>
            <img className={styles.image} src={imageUrl} alt='profile' />
        </div>
    )
}

function _renderTitle (title, subTitle) {
    return (
        <>
            <div className={styles.subTitle}>{subTitle}</div>
            <div className={styles.title} >{title}</div>
        </>
    )
}

function _renderContent (content) {
    return (
        <div className={styles.content}>
            {content}
        </div>
    )
}