import React from 'react'
import Header from '../Header/Header';
import './Hero.css'
import bade from '../../assets/bade.png'
import bar from '../../assets/bar.png'

const Hero =() => {
    return (
        <div className='hero'>
            <div className="left-h">
                
                <Header/>
                
                {/* the best ad */ }
                <div className="the-best-ad">
                <div></div>
                <span>the best fitness club in town</span>
                </div>

                {/* Hero Heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    <div></div>
                    <span>Ideal Body</span>                       
                    </div>

                    <div>
                        <span>In here we will help you shape and build your ideal body 
                            live up your life the fullest.
                        </span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+140 </span>
                        <span>expert coaches</span>
                        </div>
                        <div>
                        <span>+978  </span>
                        <span>members joined</span>
                        </div>
                        <div>
                        <span>+50 </span>
                        <span>fitness programs</span>
                        </div>

                </div>


                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>


            </div>
            <div className="right-h">
                <button className='btn'>
                    <button>Join Now</button>    
                </button>

                <div className='heart-rate'>
                  
                    <span>Heart Rate</span>
                    <span>Bpm 116</span>
                </div>

                {/* hero images */}
                <div className="hero-image">
                <img src= {bade} alt="" className='hero-image'/>
                </div>

                {/* Calories  */}
                <div className='calories-image'>
                    <img src={bar} alt="" className='calories-image' />

                </div>



            </div>
        </div>
    )
}

export default Hero;
