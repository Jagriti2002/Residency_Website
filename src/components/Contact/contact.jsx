import React from 'react'
import './contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const contact = () => {
  return (
    <section id='contact' className="contact_wrapper">
        <div className="paddings innerWidth flexCenter contact-container">
            {/*Left Side */}
            <div className="flexColStart contact-left">
                <span className='primaryText'>Our Contact</span>
                <span className='greenText'>Easy to contact us</span>
                <span className='secondaryText'>We always ready to help by providijng the best services for you. <br></br>We beleive a good blace to live can make your life better</span>

                <div className="flexColStart contactModes">
                    {/* First Row */}
                    <div className="flexStart row">
                        {/* FIRST MODE */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='call'>CALL</span>
                                    <span className='call-no'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                CALL NOW
                            </div>
                        </div>
                        {/* SECOND MODE */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='call'>CHAT</span>
                                    <span className='call-no'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                CHAT NOW
                            </div>
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className="flexStart row">
                        {/* FIRST MODE */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='call'>VIDEO CALL</span>
                                    <span className='call-no'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                CALL NOW
                            </div>
                        </div>
                        {/* SECOND MODE */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='call'>MESSAGE</span>
                                    <span className='call-no'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                MESSAGE NOW
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Right Side */}
            <div className="contact-right">
                <div className="hero-img">
                    <img src="./contact-img.webp" alt="hero-img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default contact