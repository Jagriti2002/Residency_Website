import React from 'react'
import './getstarted.css'

const getstarted = () => {
  return (
    <section id='getstarted' className="getstarted_wrapper">
        <div className="paddings innerWidth getstarted-container">
            <div className="flexColCenter inner-container">
                <span className='getText'>GET STARTED WITH HOMESTAY</span>
                <span className='secondaryText'>Subscribe and find super attractive price quotes from us.<br></br>Find your residence soon</span>
                <button className="button">
                    <a href="mailto:jagritim2002@gmail.com">GET STARTED</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default getstarted