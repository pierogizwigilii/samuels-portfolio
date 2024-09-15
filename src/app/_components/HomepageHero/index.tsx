import Image from 'next/image';
import React from 'react'; 
import portraitImage from 'src/images/portrait1.jpg';

import classes from "./index.module.scss";

const HomepageHero = (props) => {
    return (
        <div className={classes.heroImage}>
            <Image src={portraitImage} alt="A man with shoulder length hair and a jumper stands in front of a grey blurred background" />
        </div>
    )
}

export default HomepageHero;