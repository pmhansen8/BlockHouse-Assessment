import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
   return (
       <>
        <Navbar />
        <div style={{ minHeight: '100vh', padding: '20px', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <h1 style={{ fontSize: '3em'}}>Hello Blockhouse team!</h1>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                padding: '20px',
                boxSizing: 'border-box'
            }}>
                <div style={{
                    flex: '1 1 45%',
                    maxWidth: '45%',
                    backgroundColor: 'white',
                    padding: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                }}>
                    <h2 style={{ color: "black" , textAlign: 'center' }}>Cover Letter</h2>
                    <p style={{ color: "black" }}>Thank you for considering me for the role of Full Stack Intern!
                        With my experience from Amazon and Creating Real I believe I can bring a great amount of
                        value to the company! Blockhouse's mission of bringing trading insights to companies sounds
                        like something I would love to be a part of! Again, thank you for your consideration and have
                        a wonderful day!  </p>
                </div>
                <div style={{
                    flex: '1 1 45%',
                    maxWidth: '45%',
                    backgroundColor: 'white',
                    padding: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                }}>
                    <h2 style={{color: "black", textAlign: 'center'}}>Contact Info</h2>
                    <div style={{display: 'flex'}}>
                        <FontAwesomeIcon icon={faPhone}
                                         style={{fontSize: '0.8rem', width: '5%', color: "black"}}/> {/* Adjust the size as needed */}
                        <span style={{fontSize: '1.5rem', marginLeft: '1%',color: "black" }}>917-526-7696</span>
                    </div>
                    <div style={{display: 'flex', }}>
                        <FontAwesomeIcon icon={faEnvelope}
                                         style={{fontSize: '0.8rem', width: '5%', color: "black"}}/> {/* Adjust the size as needed */}
                        <span style={{fontSize: '1.5rem', marginLeft: '1%', color: "black"}}>pmhansen8@gmail.com</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <FontAwesomeIcon icon={faLinkedin} style={{fontSize: '0.8rem', width: '5%', color: "black"}}/>
                        <a href="https://www.linkedin.com/in/patrick-hansen-69477526b/" target="_blank" rel="noopener noreferrer"
                           style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit'}}>
                            <span style={{fontSize: '1.5rem', marginLeft: '5.5%', color: "black"}}>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </>
   );
}
