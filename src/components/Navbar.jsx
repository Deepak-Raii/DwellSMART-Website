import React, { useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import '../css/navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import Playstore from '../images/playstore.svg';
import AppStore from '../images/app-store.svg'

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const navigate=useNavigate();
    const location = useLocation();
    const path = location.pathname;
  return (
    <div className='container-fluid navbar'>
    <img onClick={()=>navigate('/')} className='logo' src='http://www.dwellsmart.co.in/resources/56ed99338809400a171c667b_logo.png' alt='logo' />
    <ul onClick={()=>setIsMobile(false)} className={isMobile ? "mobile-nav" : "web-nav"}>
        <li><Link className={path === '/' ? 'active' : 'unactive'} to='/'>Home</Link></li>
        <li><Link className={path === '/services' ? 'active' : 'unactive'} to='/services'>Services</Link></li>
        <li><Link className={path === '/products' ? 'active' : 'unactive'} to='/products'>Products</Link></li>      
        <li><Link className={path === '/contact_us' ? 'active' : 'unactive'} to='/contact_us'>Contact us</Link></li>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row', gap:'1rem'}}>
        <li><img src={Playstore} alt='img'/></li>
        <li><img src={AppStore} alt='img'/></li>
        </div>
    </ul>
    <button className='hamburgerBtn' onClick={()=>setIsMobile(!isMobile)}>
    {isMobile ? <ImCross color="black"/> : <GiHamburgerMenu color="black"/>}
    </button>
</div>

  )
}
