import React from 'react';

import classes from "./index.module.scss";

const GridGutter = (props) => {
    return (
        <div className={classes.contentGridContainer}>
            {props.children}
        </div>
    )
}

export default GridGutter;