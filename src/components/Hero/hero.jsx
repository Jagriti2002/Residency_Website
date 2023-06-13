import React from 'react'
import './hero.css'
import '../../index.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

const hero = () => {
  return (
    <section id='home' className="hero_wrapper">
        <div className="paddings innerwidth flexCenter hero-container">
            {/* Left Side */ }
            <div className="flexColStart hero-content">
                <div className="hero-title">
                    <div className="green-circle"/>
                    <h1>Discover<br/> Most Luxury<br/> Properties</h1>
                </div>
                <div className="flexColStart hero-des">
                    <p>Find a variety of properties that suit you very easilty</p>
                    <p>Forget all difficulties in finding a residence for you.</p>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--text-green)" size={25} />
                    <input type="text" placeholder='Search Properties...' />
                    <button className="button">Search</button>
                </div>
                <div className="flexCenter numbers">
                    <div className="flexColCenter number">
                        <span>
                            <CountUp start={0} end={9000} duration={5}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Product</span>
                    </div>
                    <div className="flexColCenter number">
                        <span>
                            <CountUp start={0} end={2000} duration={5}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customer</span>
                    </div>
                    <div className="flexColCenter number">
                        <span>
                            <CountUp start={0} end={28} duration={5}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winning</span>
                    </div>
                </div>
            </div>
            {/* Right Side */ }
            <div className="flexCenter hero-img">
                <img src="./hero-img.jpg" alt="hero-img" />
            </div>
        </div>
    </section>
  )
}

export default hero