import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <section className="footer_wrapper">
        <div className="paddings innerWidth flexCenter footer-container">
            {/* Left Side */}
            <div className="flexColStart footer-left">
                <img src="./logo.png" alt="logo" width={120} />
                <span className='secondaryText'>Our vision is to make all people<br></br> the best place to live for them.</span>
            </div>
            {/* Right Side */}
            <div className="flexColEnd footer-right">
                <span className='design'>Designed & Developed By <span className='design-name'>Jagriti Mishra</span></span>
            </div>
        </div>
    </section>
  )
}

export default footer