import React from "react";

import classes from "./index.module.scss";

const RegularImage = (props) => {
    return (
        <div className={classes.imageContainer}>
            <img src={props.src} />
        </div>
    )
}

export default RegularImage;