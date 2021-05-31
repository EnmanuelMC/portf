import { Typography } from '@material-ui/core';
import React from 'react';
import './Footer.css';
import resumeData from '../../utils/resumeData';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name'>Alejandro Montero</Typography>
      </div>
      <div className='footer_right'>
        <Typography className='footer_copyright'>
          Designed and Developed by{' '}
          <a
            href='https://www.linkedin.com/in/enmanuel-marcano-597810181/'
            target='_blank'
            rel='noreferrer'
          >
            Enmanuel Marcano
          </a>
          .
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
