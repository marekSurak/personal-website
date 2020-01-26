import React from "react"
import styles from "./section.module.css"
import cn from "classnames";

export default function Section ({ id, title, subTitle, imageUrl, fallbackImageUrl, children, className }) {
    return (
        <div className={cn(styles.wrapper, styles[className])} id={id}>
            { imageUrl && _renderImage(imageUrl, fallbackImageUrl) }
            
            <div className={styles.contentWrapper}>
                { _renderTitle(title, subTitle) }
                { _renderContent(children) }
            </div>
        </div>
    )
}

function _renderImage(imageUrl, fallbackImageUrl) {
    return (
        <div className={styles.imageWrap}>
            <picture>
                <source srcset={imageUrl} type="image/webp" />
                <source srcset={fallbackImageUrl} type="image/png" />
                <img src={fallbackImageUrl} alt="profile-photo" className={styles.image} />
            </picture>
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