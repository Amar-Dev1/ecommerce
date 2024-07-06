import './About.css';
import Container from '../../components/Container/Container';
import MainTitle from '../../components/mainTitle/mainTitle';
const About = () => {
    return (
        <div className='about' id='about'>
            <Container>
                <MainTitle title="About Us" />
                <div className="content">
                    <h2>Who We Are ?!</h2>
                    <p>We Are a Proffessional online Shop that make shoppin easay to individual and make him happy with our products and our services .</p>
                </div>
            </Container>
        </div>
    )
}

export default About;
