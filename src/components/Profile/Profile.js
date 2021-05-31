import React from 'react';
import { Typography } from '@material-ui/core';
import aleImg from '../../assets/images/ale.jpg';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import resumeData from '../../utils/resumeData';
import './Profile.css';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from '../Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className='timeline_content'>
        {link ? (
          <Typography className='timelineItem_text'>
            <span>{title}:</span>{' '}
            <a href={link} target='_blank' rel='noreferrer'>
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className='timelineItem_text'>
            <span>{title}:</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};
const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.nombre}</Typography>
        <Typography className='title'>{resumeData.prof}</Typography>
      </div>
      <figure className='profile_image'>
        <img src={aleImg} alt='alejandro' />
      </figure>
      <div className='profile_information'>
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title='Estudio' text={resumeData.estudio} />
          <CustomTimelineItem title='Email' text={resumeData.email} />
          <CustomTimelineItem title='Celular' text={resumeData.celular} />
          {Object.keys(resumeData.social).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.social[key].text}
              link={resumeData.social[key].link}
            />
          ))}
        </CustomTimeline>
        <div className='button_container'>
          <CustomButton text='Descargar Cv' icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};
export default Profile;
