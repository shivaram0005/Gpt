import React from 'react'
import './girlimagesection.css'
import featureimage from '../assets/Feature Image.png'

const Girlimagesection = () => {
  return (
   <>
    <div className='girlimagesection'>
        <div className='image'>
            <img src={featureimage} alt="" />
        </div>
        <div className="contentsection"> 
            <p className="contentone">
                Request Early Access to Get Started
            </p>
            <h2>
            The possibilities are beyond your imagination
            </h2>
            <p className="content-three">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <p className="content-four">
            Request Early Access to Get Started
            </p>
        </div>
    </div>
   </>
  )
}

export default Girlimagesection