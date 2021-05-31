import React from 'react';
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  LinkedIn,
  Instagram,
  Telegram,
} from '@material-ui/icons';
import { NavLink, withRouter } from 'react-router-dom';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/Button';
import './Header.css';

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand='lg' sticky='top' className='header'>
      <Nav.Link as={NavLink} to='/home' className='header_navlink'>
        <Navbar.Brand className='header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header_left'>
          {/* Resume Link*/}
          <Nav.Link
            as={NavLink}
            to='/resume'
            className={pathName === '/' ? 'header_link_active' : 'header_link'}
          >
            Resume
          </Nav.Link>

          {/* Portfolio Link*/}
          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={
              pathName === '/portfolio' ? 'header_link_active' : 'header_link'
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className='header_right'>
          {Object.keys(resumeData.social).map((key) => (
            <a
              href={resumeData.social[key].link}
              target='_blank'
              rel='noreferrer'
            >
              {resumeData.social[key].icon}
            </a>
          ))}
          <CustomButton text='Contratación' icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default withRouter(Header);
