import { useState, React } from 'react'
import './value.css'
import { 
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from'../../utils/accordion'

const value = () => {
  return (
    <section id='value' className="value_wrapper">
        <div className="paddings innerWidth flexCenter value-container">
            {/* Left side */}
            <div className=" flexColStart value-left">
                <div className="hero-img">
                    <img src="./value-img.jpg" alt="hero-img" />
                </div>
            </div>
            {/* Right side */}
            <div className="flexColStart right value-right">
                <span className='primaryText'>Our Value</span>
                <span className='greenText'>Value We Give To You</span>
                <span className='secondaryText'>
                    We always ready to help by providing the best services for you.<br></br>
                    We beleive a good blace to live can make your life better
                </span>
                <Accordion
                 className='accordion'
                 allowMultipleExpanded={false}
                 preExpanded={[0]}
                >
                    {
                        data.map((item, i)=> {
                            const [className, setClassName] = useState(null)
                            return(
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordion-button'>
                                            <AccordionItemState>
                                                {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                            </AccordionItemState>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="valueText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default value