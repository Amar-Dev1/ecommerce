
import Container from '../../components/Container/Container';
import MainTitle from '../../components/mainTitle/mainTitle';
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import './Contact.css';
const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className="overlay"></div>
            <Container>
                <MainTitle title="Get in Touch !" className="main-title" />
                <div className="content">
                    <form>
                        <input type="email" placeholder='Type Your Email' />
                        <textarea placeholder='Type a Message'></textarea>
                        <button id='submit' type='submit'>Send</button>
                    </form>
                    <div className="social-media">
                        <a href="#"><FaFacebook className='icon' /></a>
                        <a href="#"><FaInstagram className='icon' /></a>
                        <a href="#"><FaTiktok className='icon' /></a>
                        <a href="#"><FaTwitter className='icon' /></a>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact
