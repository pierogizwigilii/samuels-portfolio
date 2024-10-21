import React from 'react';
//conditional rendering based on what field is selected in the MediaBlock
const MediaBlock = ({ mediaType, media, youtubeURL }) => { //using the mediaType prop for the radio button field to choose media or youtube video, media prop is the media upload field and the youtubeURL prop is the youtube video
  if (mediaType === 'upload' && media) {
    // Render the uploaded media
    return <img src={media.url} alt={media.alt || 'Media'} />;
  }

  if (mediaType === 'youtube' && youtubeURL) {
    // Extract YouTube video ID from the URL
    const videoID = youtubeURL.split('v=')[1]?.split('&')[0];

    return (
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoID}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    );
  }

  return null; // Catch-case if no valid media type selected
};

export default MediaBlock;