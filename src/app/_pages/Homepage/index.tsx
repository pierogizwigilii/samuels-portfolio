import React from 'react';
import SideNav from '../../_components/SideNav';
import Grid from '../../_components/Grid';

import classes from "./index.module.scss";

const Homepage = (props) => {
    return (
        <div className={classes.homepageContainer}>
            <SideNav />
            
            <div className={classes.mainContent}>
                <section className={classes.section}>
                    {/* Main/Hero Section */}
                    <Grid>

                    </Grid>
                </section>

                <section className={classes.section}>
                    {/* Film Section */}
                    <Grid>
                        
                    </Grid>
                </section>

                <section className={classes.section}>
                    {/* Photography Section */}

                </section>

                <section className={classes.section}>
                    {/* Music Section */}

                </section>

                <section className={classes.section}>
                    {/* About Section */}


                </section>
            </div>
        </div>
    )
}

export default Homepage;