import React from "react";
import classes from "./index.module.scss";

const SideNav = (props) => {
    return (
         <div className={classes.sideNav}>
            <h1>Samuel Hart</h1>
            <p>creative person that does a lot</p>
            <nav>
                <ul>
                    <li>Film</li>
                    <li>Music</li>
                    <li>Graphic design</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
         </div>
    )
}

export default SideNav;