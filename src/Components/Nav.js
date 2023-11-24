import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Logo from '../assets/logo.png'

const Nav = ({ setProjectDisplay, handleInputChange, emailInfo, sendEmail }) => {
  const toggleProjectDisplay = () => {
    setProjectDisplay(false);
  }

  return (
    <nav>
        <div className='nav--logo-container'>
          <img
            src={Logo}
            alt="logo"
            className='nav--logo'
            onClick={toggleProjectDisplay}
          />
        </div>
        <div className='nav--links-container'>
          <FontAwesomeIcon
            className='nav--font-awesome-icon'
            icon={faEnvelope}
            onClick={sendEmail}
          />
          <a href="https://github.com/apurcell88"><FontAwesomeIcon className='nav--font-awesome-icon' icon={faGithub} /></a>
        </div>
    </nav>
  );
}

export default Nav;