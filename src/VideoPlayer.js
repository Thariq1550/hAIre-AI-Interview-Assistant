import React, { useState } from 'react';

const VideoPlayer = ({ videos, onVideoEnd }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        if (currentVideoIndex < videos.length - 1) {
            setCurrentVideoIndex(currentVideoIndex + 1);
        } else {
            onVideoEnd(); // Notify parent when all videos are finished
        }
    };

    return (
        <div>
            <video
                src={videos[currentVideoIndex]}
                controls
                autoPlay
                onEnded={handleVideoEnd} // Triggered when the video ends
                style={{ width: '80%', maxWidth: '640px' }}
            ></video>
            <p>
                Video {currentVideoIndex + 1} of {videos.length}
            </p>
        </div>
    );
};

export default VideoPlayer;
