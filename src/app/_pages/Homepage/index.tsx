import React from 'react';
import SideNav from '../../_components/SideNav';
import Grid from '../../_components/Grid';
import HomepageHero from '../../_components/HomepageHero';
import GridItem from '@/app/_components/GridItem';

import classes from "./index.module.scss";

const Homepage = (props) => {

    const films = [
        {//GridItem 1
            id: 1,
            title: "My first film",
            releaseDate: "2014-11-09T00:00:00.000Z",
            coverImage: "https://placehold.co/1920x1080.png",
            freeText: "This is my first film that I made in 2014 blah blah blah",
            gallery: [
                { //page 1
                    title: "Film",
                    youtubeEmbedLink: 'https://www.youtube.com/watch?v=Ppjp09-XUyQ&list=PLVtco_at_bxqkbYNhAI2a1QbAeJcEmweU&index=6&ab_channel=K.K.Slider',
                },
                { //page 2
                    title: "Film Dos",
                    youtubeEmbedLink: 'https://www.youtube.com/watch?v=oPI4hxajStM&ab_channel=PomodoroCat',
                },
                {//page 3
                    title: "Film Poster",
                    imageUrl: "https://placehold.co/1920x1080.png"
                }
            ]
        },
        
        {//GridItem 2
            id: 2,
            title: "My second film",
            releaseDate: "2024-08-09T00:00:00.000Z",
            coverImage: "https://placehold.co/1920x1080.png",
            freeText: "This is my best",
            gallery: [
                {//page 1
                    title: "Main Video",
                    youtubeEmbedLink: 'https://www.youtube.com/watch?v=DLEHxCChQac'
                },
                {//page 2
                    title: "Behind the Scenes",
                    youtubeEmbedLink: 'https://www.youtube.com/watch?v=DLEHxCChQac',
                }
            ]
        },
        
        {//GridItem 3
            id: 3,
            title: "My third film",
            releaseDate: "2016-05-05T00:00:00.000Z",
            coverImage: "https://placehold.co/1920x1080.png",
            freeText: "I like this movie",
            gallery: [
                {//page 1
                    title: "Main Video",
                    youtubeEmbedLink: 'https://www.youtube.com/watch?v=DLEHxCChQac'
                },
                {//page 2
                    title: "Film Poster",
                    imageUrl: "https://placehold.co/1920x1080.png"
                }
            ]
        },

        {
            id: 4,
            title: "My fourth film",
            releaseDate: "2020-11-09T00:00:00.000Z",
            coverImage: "https://placehold.co/1920x1080.png",
            freeText: "2020 sucked",
            gallery: [
                {
                    title: "Main Video",
                    youtubeEmbedLink: 'https://www.youtube.com/watch?v=DLEHxCChQac'
                },
                {
                    title: "Notes",
                    body: "This is some text written inside the CMS to explain some work I've done"
                }
            ]
        }
    ];

    return (
        <div className={classes.homepageContainer}>
            <SideNav />

            <div className={classes.mainContent}>
                <section className={classes.section}>
                    {/* Main/Hero Section */}
                    <HomepageHero>
                        
                    </HomepageHero>
                </section>

                <section className={classes.section}>
                    {/* Film Section */}
                    <Grid>
                        {
                            films.map((film) => {
                                // format date to nice readable string
                                const date = new Date(film.releaseDate);
                                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                                const formattedDate = date.toLocaleDateString('en-GB', options);

                                return (
                                    <GridItem columnSpan={2} rowSpan={2} key={film.id} content={film}>
                                        <img src={film.coverImage} />
                                        <h2>{film.title}</h2>
                                        <p>{film.freeText}</p>
                                        <p>{formattedDate}</p>
                                    </GridItem>
                                )
                            })
                        }
                    </Grid>
                </section>

                <section className={classes.section}>
                    {/* Music Section */}
                    <Grid>
                        
                    </Grid>
                </section>

                <section className={classes.section}>
                    {/* Photography Section */}
                    <Grid>
                        
                    </Grid>
                </section>

                <section className={classes.section}>
                    {/* Professional Section */}
                    <Grid>
                        
                    </Grid>
                </section>

                <section className={classes.section}>
                    {/* About Section */}


                </section>

                <section className={classes.section}>
                    {/* Contact Section */}


                </section>
            </div>
        </div>
    )
}

export default Homepage;