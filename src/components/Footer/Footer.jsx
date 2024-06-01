import React from 'react'
import './Footer.css'
import chariot from  '../../assets/chariotpng.png';
import insta from '../../assets/insta.png';
import pintrest from '../../assets/pintrest.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={chariot} alt='' />
            <p>Echrini</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icom">
            <div className="footer-icons-container">
                <img src={insta} alt='' className='icon'/>
            </div>
            <div className="footer-icons-container">
                <img src={pintrest} alt='' className='icon'/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer