import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-record/dist/css/videojs.record.css';
import 'videojs-record/dist/videojs.record.js';
import 'webrtc-adapter';

const VideoRecorder = ({ onRecordingComplete }) => {
    const videoNode = useRef(null);
    const player = useRef(null);

    useEffect(() => {
        if (!videoNode.current) {
            console.warn('Video element not yet attached to the DOM.');
            return;
        }

        // Initialize Video.js with RecordRTC plugin
        player.current = videojs(videoNode.current, {
            controls: true,
            width: 640,
            height: 360,
            plugins: {
                record: {
                    audio: true,
                    video: true,
                    maxLength: 30, // Max recording length in seconds
                    debug: true,
                },
            },
        });

        // Add event listener for when the recording is finished
        player.current.on('finishRecord', () => {
            const recordedBlob = player.current.recordedData;
            onRecordingComplete(recordedBlob); // Pass the Blob to the parent component
        });

        // Cleanup the player on component unmount
        return () => {
            if (player.current) {
                player.current.dispose();
            }
        };
    }, [onRecordingComplete]);

    return (
        <div>
            <div data-vjs-player>
                <video
                    ref={videoNode}
                    className="video-js vjs-default-skin"
                    playsInline
                ></video>
            </div>
        </div>
    );
};

export default VideoRecorder;
