import React from 'react'
import './VideoFooter.css'
import {Button, Avatar} from "@mui/material"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Ticker from "react-ticker";

function VideoFooter({ url, likes, shares,comment, channel, avatarSrc, song}) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
        <Avatar src = {avatarSrc}/>
        <h3>
            {channel} &#x2022;<Button>Follow</Button>
        </h3>
        </div>
        <div className='videoFooter__ticker'>
            <MusicNoteIcon fontSize = "medium"
            className = "videoFooter__icon"/>
            {/* <Ticker mode='smooth'>
              {({ index }) => (
                <>
                  <h1> {song} </h1>
                </>
                
                )} 
            </Ticker>  */}
        </div>
        <div className='videoFooter__actions'>
          {/* <div className='videoFooter__actionsLeft'>
            <FavoriteBorderOutlinedIcon fontSize = "medium"/>  
            <ModeCommentOutlinedIcon fontSize = "medium"/>
            <SendOutlinedIcon fontSize = "medium"/>
            <MoreVertOutlinedIcon fontsize = "large"/>    
          </div> */}
          <div className='videoFooter__actionsRight'>
            <div className='videoFooter__stat'>
              <FavoriteBorderOutlinedIcon/>
              <p>{likes}</p>
            </div>
            <div className='videoFooter__stat'>
              <ModeCommentOutlinedIcon/>
              <p>{comment}</p>
            </div>
            <div className='videoFooter__stat'>
              <SendOutlinedIcon/>
              <p>{shares}</p>
            </div>
            <div className='videoFooter__stat'>
              <MoreVertOutlinedIcon/>           
            </div>
          </div>
        </div>
    </div>
  );
}


export default VideoFooter