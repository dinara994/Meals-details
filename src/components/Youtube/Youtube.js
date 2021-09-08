import React from 'react';

const Youtube = ({youTube}) => {
    return (
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youTube}`} title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
    );
};

export default Youtube;