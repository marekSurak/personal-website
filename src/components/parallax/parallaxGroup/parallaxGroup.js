import React from "react"
import styles from "./parallaxGroup.module.css"
import cn from "classnames"

export default function ParallaxGroup({baseContent, backContent}) {
    return (
        <div className={styles.parallaxWrap}>
            { baseContent && _renderBaseLayer(baseContent) }
            { backContent && _renderBackLayer(backContent) }
        </div>
    )
}

function _renderBaseLayer(baseContent) {
    return (
        <div className={cn(styles.parallaxLayer, styles.parallaxBase)}>
            <div className={styles.content}>
                {baseContent}
            </div>
        </div>
    )
}

function _renderBackLayer(backContent) {
    return (
        <div className={styles.parallaxBack}>
            <div className={styles.content}>
                {backContent}
            </div>
        </div>
    )
}