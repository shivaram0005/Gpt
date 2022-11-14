import React from "react";
import './herosection.css'
import groun81 from '../assets/Group 81.png'
import ai from '../assets/ai.png'

const Herosection = () => {
  return (
    <>
        <div className="herosection">
            <div className="herosection-left">
                <h2>Let's Build Something <br /> amazing with GPT-3  <br /> OpenAI</h2>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing. <br /> Not thooughts all exercise blessing. Indulgence way <br /> everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <div className="inputvalues">
                <input type="text" name="" id="" placeholder="Your Email Address" />
                <button>Get Started</button>
                </div>
                <div className="group">
                <img src={groun81} alt="" />
                <p>1600 people request access in the last 24 hours</p>

                </div>
            </div>
            <div className="herosection-right">
                <img src={ai} alt="" />
            </div>
        </div>
    </>
  )
}

export default Herosection