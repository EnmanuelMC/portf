import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Tabs,
  Tab,
  CardActions,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Grow,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import './Portfolio.css';
import ImageGalery from '../../components/ImageGalery/ImageGalery';

function Portfolio() {
  const [tabValue, setTabValue] = useState('All');
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <>
      {/* Title*/}
      <Grid container spacing={1} className='section pb_45 pt_45'>
        <Grid item className='section_title mb_20'>
          <h6 className='section_title_text'>Portfolio</h6>
          <span></span>
        </Grid>
        {/* Tabs */}
        <Grid item xs={12}>
          <Tabs
            value={tabValue}
            indicatorColor='white'
            className='customTabs'
            onChange={(event, newValue) => setTabValue(newValue)}
          >
            <Tab
              label='Todos'
              value='All'
              className={
                tabValue === 'All'
                  ? 'customTabs_item active'
                  : 'customTabs_item'
              }
            />

            {[...new Set(resumeData.portfolio.map((item) => item.tag))].map(
              (tag) => (
                <Tab
                  label={tag}
                  value={tag}
                  className={
                    tabValue === tag
                      ? 'customTabs_item active'
                      : 'customTabs_item'
                  }
                />
              )
            )}
          </Tabs>
        </Grid>
        {/* projects */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {resumeData.portfolio.map((project) => (
              <>
                {tabValue === project.tag || tabValue === 'All' ? (
                  <Grid item xs={12} sm={6} md={4}>
                    <Grow in timeout={1000}>
                      <Card
                        className='customCard'
                        onClick={() => setProjectDialog(project)}
                      >
                        <CardActionArea>
                          <CardMedia
                            className='customCard_image'
                            image={project.image[0]}
                            title={project.title}
                          />
                          <CardContent>
                            <Typography
                              variant={'body2'}
                              className='customCard_title'
                            >
                              {project.title}
                            </Typography>
                            <Typography
                              variant='body2'
                              className='customCard_caption'
                            >
                              {project.caption}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grow>
                  </Grid>
                ) : null}
              </>
            ))}
          </Grid>
        </Grid>

        <Dialog
          open={Boolean(projectDialog)}
          onClose={() => setProjectDialog(false)}
          maxWidth={'lg'}
          fullWidth
          className='projectDialog'
        >
          <DialogTitle onClose={() => setProjectDialog(false)}>
            {projectDialog.title}
          </DialogTitle>
          <DialogContent style={{ height: '80vh' }}>
            {projectDialog.image && (
              <ImageGalery images={projectDialog.image} />
            )}
            <Typography className='projectDialog_description'>
              {projectDialog.description}
            </Typography>
          </DialogContent>
          <DialogActions className='projectDialog_actions'>
            {projectDialog?.links?.map((link) => (
              <a
                href={link.link}
                target='_blank'
                rel='noreferrer'
                className='projectDialog_icon'
              >
                {link.icon}
              </a>
            ))}
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
}

export default Portfolio;
