import React from 'react';

import classes from "./index.module.scss";

const ContentGrid = (props) => {
    return (
        <div className={classes.contentGridContainer}>
            {props.children}
        </div>
    )
}

export default ContentGrid;