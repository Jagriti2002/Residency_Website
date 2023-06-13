import { useState, React } from 'react'
import './header.css'
import '../../index.css'
import {BiMenuAltRight} from 'react-icons/bi'

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const getMenuStyles = (menuOpened) => {
        if(document.documentElement.clientWidth <= 991)
        {
            return{right: !menuOpened && "-100%"}
        }
    }
  return (
    <section className='header_wrapper'>
        <div className="flexCenter innerWidth paddings header-container">
            <div className="logo">
                <img src="./logo.png" alt="logo" width={150} />
            </div>
            <div className="flexCenter header-menu" style={getMenuStyles(menuOpened)}>
                <a href="#residencies">Residencies</a>
                <a href="#value">Our Value</a>
                <a href="#contact">Contact Us</a>
                <a href="#getstarted">Get Started</a>
                <button className='button'>
                    <a href="#">Contact</a>
                </button>
            </div>
            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                <BiMenuAltRight size={30}/>
            </div>
        </div>
    </section>
  )
}

export default Header