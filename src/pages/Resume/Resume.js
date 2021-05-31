import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import CustomButton from '../../components/Button/Button';
import SchoolIcon from '@material-ui/icons/School';
import Icon from '@material-ui/core/Icon';
import CustomTimeline, {
  CustomTimelineSeparator,
} from '../../components/Timeline/Timeline';
import './Resume.css';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import resumeData from '../../utils/resumeData';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const Resume = () => {
  return (
    <>
      {/*About me */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <h6 className='section_title_text'>Sobre mi</h6>
          <span style={{ width: '9%' }}></span>
          <Grid item>
            <Typography variant='body2' className='aboutme_text'>
              {resumeData.about}
            </Typography>
          </Grid>
        </Grid>

        {/*Education and experiences */}
        <Grid container className='section pb_45'>
          <Grid item className='section_title mb_30'>
            <h6 className='section_title_text'>Curriculum</h6>
            <span></span>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/* Experiences */}
            <Grid item sn={12} md={6}>
              <CustomTimeline title='Empleos' icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>
                        {experience.cargo}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'>
                        {experience.periodo}
                      </Typography>
                      <Typography
                        variant='body2'
                        className='timeline_description'
                      >
                        {experience.descripcion}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title='Educación' icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>
                        {education.title}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'>
                        {education.date}
                      </Typography>
                      <Typography
                        variant='body2'
                        className='timeline_description'
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*Servicios */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <h6 className='section_title_text top_20'>Servicios</h6>
          <span></span>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify='space-around'>
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className='service'>
                  <Icon className='service_icon'>{service.icon}</Icon>
                  <Typography className='service_title' variant='h6'>
                    {service.title}
                  </Typography>
                  <Typography
                    className='service_description  pb_45'
                    variant='body2'
                  >
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/*Skills */}
      {/* <Grid
        container
        spacing={3}
        justify='space-between'
        className='section graybg pb_45'
      >
        {resumeData.skills.map((skill) => (
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={0} />
            <Typography variant='h6' className='skills_title'>
              {skill.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
      Skills 
      <Grid container className='section graybg pb_45'></Grid>
      Contact 
      <Grid container className='section'></Grid> */}
      {/* Contact */}
      <Grid container spacing={8} className='section pt_45 pb_45'>
        {/* Contact Form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className='section_title mb_30'>
              <h6 className='section_title_text top_20'>Contacto</h6>
              <span></span>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='name' label='Nombre' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='name' label='Email' />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name='name'
                    label='Mensaje'
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text='Enviar' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Contact Information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className='section_title mb_30'>
              <h6 className='section_title_text top_20'>
                Información de contacto
              </h6>
              <span></span>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className='contactsinfo_item top_10'>
                    <span>Dirección: </span> {resumeData.addres}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactsinfo_item'>
                    <span>Celular: </span> {resumeData.celular}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactsinfo_item'>
                    <span>Email: </span> {resumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container className='contactinfo_socialscontainer'>
                {Object.keys(resumeData.social).map((key) => (
                  <Grid item className='contactinfo_social'>
                    <a href={resumeData.social[key].link} target='_blank'>
                      {resumeData.social[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
