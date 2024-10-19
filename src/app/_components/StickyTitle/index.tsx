import React from 'react';

import classes from "./index.module.scss";

const StickyTitle = (props) => {
    return (
        <div className={classes.titleContainer}>
           {props.children}
        </div>
    )
}

export default StickyTitle;