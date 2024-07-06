import './Header.css'
import { FaBars } from 'react-icons/fa6';
import { ImCross } from "react-icons/im";
import Container from '../../components/Container/Container';
import logo from '../../assets/tech.png'
import { useRef } from 'react';
const Header = () => {

  const barRef = useRef(null);
  const crossRef = useRef(null);
  const sideRef = useRef(null);

  //  .cross-icon {
  //   display: none;
  // }
  const showMenu = () => {
    sideRef.current.style.display = "flex";
    sideRef.current.style.width = "100%";
    sideRef.current.style.height = "100%";
    crossRef.current.style.display = "inline-block";
    barRef.current.style.display = "none";
  }

  const hideMenu = () => {
    sideRef.current.style.display = "none";
    crossRef.current.style.display = "none";
    barRef.current.style.display = "inline-block";
  }
  
  return (
    <div className='header'>
      <Container className="container">
        <a id='logo' href="#"><img src={logo} /></a>
        < FaBars ref={barRef} onClick={showMenu} className="bar-icon" />
        <ul className="sideBar" ref={sideRef}>

          <ImCross onClick={hideMenu} ref={crossRef} id="cross-icon"/>
          <li><a onClick={hideMenu} href="/">Home</a></li>
          <li><a onClick={hideMenu} href="#categories">Categories</a></li>
          <li><a onClick={hideMenu} href="#about">About</a></li>
          <li><a onClick={hideMenu} href="#contact">Contact us</a></li>
        </ul>
        <ul className="links">
          <li><a onClick={hideMenu} href="/">Home</a></li>
          <li><a onClick={hideMenu} href="#categories">Categories</a></li>
          <li><a onClick={hideMenu} href="#about">About</a></li>
          <li><a onClick={hideMenu} href="#contact">Contact us</a></li>
        </ul>
      </Container>
    </div>
  )
}

export default Header;
