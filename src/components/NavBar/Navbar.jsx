import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/logo.png';
import chariot from '../../assets/chariotpng.png';

const Navbar = () => {
    const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={chariot} alt='' className='img-logo'/>
            <p>Echrini</p>
        </div>

        <div >
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}}to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
        </div>
        <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={chariot} alt=''/></Link>
        <div className='nav-cart-count'>0</div>
        </div>
       
    </div>
  )
}

export default Navbar