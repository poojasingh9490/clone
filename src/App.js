import React from "react";
import './App.css';
import VideoRoll from "./VideoRoll";

function App() {
  return (

    //BEM name convention
    <div className="app">

      <div className="app__top">
         {/* image at top - logo 
          reels text */}
          <img
            className= "app__logo"
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" 
            alt=""
          />
          <h1>Reels</h1>
      </div>

      <div className="app__videos">
        <VideoRoll
          channel='kuchhbhi'
          avatarSrc='https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80'
          song='idk - unknown '
          url='https://assets.mixkit.co/videos/download/mixkit-winter-fashion-cold-looking-woman-concept-video-39874.mp4'
          likes = {748}
          shares = {34}
          comment={159}

        />

        <VideoRoll/>
        <VideoRoll/>
        <VideoRoll/>


         {/* container of app-videos(scrollbar container ) */} 
         {/* <Video/>
         <Video/>
         <Video/>
         <Video/>
         <Video/>
         <Video/> */}
      </div>
   

    </div>
  );
}

export default App;
