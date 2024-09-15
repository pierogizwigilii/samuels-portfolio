'use client'
import React from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player'
import classes from "./index.module.scss";

const GridItem = ({ rowSpan, columnSpan, children, content }) => {

    // const [ stateName, stateChanger ] = React.useState(defaultValue)
    const [ isOpen, setIsOpen ] = React.useState(false);

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

    console.log(content.gallery[0].youtubeEmbedLink);

    return (
        <div
            className={classes.gridItem}
            style={style}
            onClick={onClickGridItem}
        >
            { children }

            <Modal isOpen={isOpen}>
                <button onClick={onClickCloseButton}>Close</button>
                <h2>This is the gallery view!</h2>
                <ReactPlayer url={content.gallery[0].youtubeEmbedLink} playing={true} />
            </Modal>
        </div>
    )
}

export default GridItem;