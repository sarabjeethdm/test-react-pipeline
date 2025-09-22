import "./Navbar.css"
import { LinearGradient } from 'react-text-gradients'
import { useState } from "react"
import terminal from "../../assets/terminal.png"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  
  return (
    <>
      <div className="navbar">
        <div id="mobile" onClick={() => setToggleMenu(!toggleMenu)}>
          <i id="bar" className={toggleMenu ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className="left-navbar">
            <img src={terminal} alt="logo" className="navbar-logo" />
            <LinearGradient
              className='left-navbar-text'
              gradient={['to left', '#17acff ,#ff68f0']}
            >
              Linux-DEX
            </LinearGradient>
        </div>
        <div className={toggleMenu ? "right-navbar active" : "right-navbar"}>
          <ul>
            <li onClick={() => setToggleMenu(!toggleMenu)}>
              <a href="#Home">
                Home
              </a>
            </li>
            {/* <li onClick={() => setToggleMenu(!toggleMenu)}>
              <a href="#About">
                About
              </a>
            </li> */}
            <li onClick={() => setToggleMenu(!toggleMenu)}>
              <a href="#Skills">
                Skills
              </a>
            </li>
            <li onClick={() => setToggleMenu(!toggleMenu)}>
              <a href="#MyWork">
                My Work
              </a>
            </li>
            <li onClick={() => setToggleMenu(!toggleMenu)}>
              <a href="#Experience">
                Experience
              </a>
            </li>
            <li onClick={() => setToggleMenu(!toggleMenu)}>
              <a href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
