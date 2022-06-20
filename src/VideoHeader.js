import React from 'react'
import './VideoHeader.css'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function VideoHeader() {
  return (
    <div className='videoHeader'>
        <ArrowBackIosIcon/>
        <h3>Reels</h3>
        <PhotoCameraIcon/>
    </div>
  )
}

export default VideoHeader;