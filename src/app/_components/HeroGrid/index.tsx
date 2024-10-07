import React from 'react';

import classes from "./index.module.scss";

const HeroGrid = (props) => {
    return (
        <div className={classes.gridContainer}>
            {props.children}
        </div>
    )
}

export default HeroGrid;