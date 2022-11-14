import React from "react";
import './imagesection.css'
import google from '../assets/google.png'
import atlassian from '../assets/atlassian.png'
import shopify from '../assets/shopify.png'
import slack from '../assets/slack.png'
import dropbox from '../assets/dropbox.png'




const imagesection = () => {
  return (
    <>
    <div className="images">
        <img src={google} alt="" />
        <img src={atlassian} alt="" />
        <img src={shopify} alt="" />
        <img src={slack} alt="" />
        <img src={dropbox} alt="" />
    </div>
    </>
  )
}

export default imagesection