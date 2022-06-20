import React, { useRef, useState } from "react";
import VideoHeader from "./VideoHeader";
import './VideoRoll.css';
import VideoFooter from "./VideoFooter"


function VideoRoll({ url, likes, shares,comment, channel, avatarSrc, song}){
    const [isVideoPlaying, setIsVideoPlaying] = 
    useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (isVideoPlaying){
            //stop video
            videoRef.current.pause();
            setIsVideoPlaying(false)
        }else{
            //play
            videoRef.current.play();
            setIsVideoPlaying(true)
        }

    }

    //useRef
    return(
        <div className="VideoRoll">
            <VideoHeader/>
            <video 
            ref = {videoRef}
            onClick = {onVideoPress}
            className= "VideoRoll__player"
            src={url}
            alt="IG reel video"
            loop
            />
            <VideoFooter
            channel={channel}
            likes = {likes}
            shares = {shares}
            avatarSrc = {avatarSrc}
            song = {song}
            comment = {comment}
            />

        </div>
    );
}

export default VideoRoll;