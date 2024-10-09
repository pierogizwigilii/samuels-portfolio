import React from 'react';

import classes from "./index.module.scss";

const StickyTitle = (props) => {
    return (
        <div className={classes.titleContainer}>
            <a href="#film"><h2>Film</h2></a>
            <h3>Direction</h3>
        </div>
    )
}

export default StickyTitle;