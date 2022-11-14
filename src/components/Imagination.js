import React from 'react'
import './imagination.css'
import rectangle26 from '../assets/Rectangle 26.png'

const Imagination = () => {
  return (
        <>
            <div className="imagination">
               <div className="inside-imagination">
                     <div className="imagination-one">
                        <div className="whatisgpt">
                            <img src={rectangle26} alt="" />
                            <p>What is GPT-3</p>
                        </div>
                        <div className="gptcontent">
                            <p>
                            We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
                            </p>
                        </div>
                    </div>
                    <div className="imagination-two">
                        <div className="left-content">
                            <p>The possibilities are beyond your imagination</p>
                        </div>
                        <div className="right-content">
                            <p>Explore The library</p>
                        </div>
                    </div>
                    <div className="imagination-three">
                       <div>
                            <img src={rectangle26} alt="" />
                            <h2>Chatbots</h2>
                            <p>
                            We so opinion friends me message as delight. Whole front do of plate heard oh ought.
                            </p>
                       </div>
                       <div>
                       <img src={rectangle26} alt="" />
                            <h2>Knowledgebase</h2>
                            <p>
                            At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
                            </p>
                       </div>
                       <div>
                       <img src={rectangle26} alt="" />
                            <h2>Education</h2>
                            <p>
                            At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
                            </p>
                       </div>
                    </div>
               </div>
            </div>
        </>
  )
}

export default Imagination