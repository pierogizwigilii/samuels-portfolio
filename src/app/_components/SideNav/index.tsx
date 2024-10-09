import React from "react";
import classes from "./index.module.scss";

const SideNav = (props) => {
    return (
         <div className={classes.sideNav}>
            <h1>Samuel Hart</h1>
            <p>creative person that does a lot</p>
            <nav>
                <ul>
                    <a id="film"><li>Film</li></a>
                    <a id="music"><li>Music</li></a>
                    <a id="graphicDesign"><li>Graphic design</li></a>
                    <a id="about"><li>About</li></a>
                    <a id="contact"><li>Contact</li></a>
                </ul>
            </nav>
         </div>
    )
}

export default SideNav;