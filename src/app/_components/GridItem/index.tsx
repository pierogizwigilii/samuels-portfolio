'use client'
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player'
import classes from "./index.module.scss";

const GridItem = ({ rowSpan, columnSpan, children, content }) => {

    // const [ stateName, stateChanger ] = React.useState(defaultValue)
    const [ isOpen, setIsOpen ] = useState(false);
    const [ currentGalleryIndex, setCurrentGalleryIndex ] = useState(0); //tracking the state of the current gallery page

    const style = {
        gridColumn: `span ${columnSpan}`,
        gridRow: `span ${rowSpan}`,
    }

    const onClickGridItem = (event) => {
        event.stopPropagation()
        console.log('clicked grid item');
        setIsOpen(true);
    };

    const onClickCloseButton = (event) => {
        event.stopPropagation()
        console.log('clicked close button')
        setIsOpen(false);
    }

    //handling changing to next page
    const nextGalleryItem = () => {
        if (currentGalleryIndex < content.gallery.length - 1) { //content.gallery.length - 1 gives the index of the last item in the gallery (since array indices start at 0). Example: If the gallery has 3 items (content.gallery.length is 3), the last valid index is 2 (3 - 1). The condition ensures that you don't go beyond the last item in the gallery.
            setCurrentGalleryIndex(currentGalleryIndex + 1);
        }
    };

    //handling changing to previous page
    const prevGalleryItem = () => {
        if (currentGalleryIndex > 0) {
            setCurrentGalleryIndex(currentGalleryIndex - 1);
        }
    };

    const currentGalleryItem = content.gallery[currentGalleryIndex];

    return (
        <div
            className={classes.gridItem}
            style={style}
            onClick={onClickGridItem}
        >
            { children }

            <Modal isOpen={isOpen}>
                <button onClick={onClickCloseButton}>Close</button>
                <h2>{content.title}</h2>
                <p>{new Date(content.releaseDate).toLocaleDateString()}</p>
                <p>{content.freeText}</p>
                <div className={classes.mediaContent}>
                    {currentGalleryItem.youtubeEmbedLink ? (
                        <ReactPlayer url={currentGalleryItem.youtubeEmbedLink} playing={true} />
                        ) : currentGalleryItem.imageUrl ? (
                        <img src={currentGalleryItem.imageUrl} alt={currentGalleryItem.title} style={{ width: '100%', height: 'auto' }} />
                        ) : null
                    }
                </div>
                <div className={classes.paginationStyle} style={{ margin: '20px' }}>
                    <button onClick={prevGalleryItem} disabled={currentGalleryIndex === 0}>Previous</button>
                    <span style={{ margin: '0 10px' }}>
                        Page {currentGalleryIndex + 1} of {content.gallery.length}
                    </span>
                    <button onClick={nextGalleryItem} disabled={currentGalleryIndex === content.gallery.length - 1}>Next</button>
                </div>
            </Modal>
        </div>
    );
};

export default GridItem;