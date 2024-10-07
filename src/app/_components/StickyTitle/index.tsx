import React from 'react';

import classes from "./index.module.scss";

const StickyTitle = (props) => {
    return (
        <div className={classes.titleContainer}>
            <h2>Film</h2>
            <h3>Direction</h3>
        </div>
    )
}

export default StickyTitle;