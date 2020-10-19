import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Avatar, Card, CardHeader, CardContent, CardActions, Button, Typography, Link } from '@material-ui/core';

import DoWorkLogo from './getting.work.done.gif';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '25vh',
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    animation: 'App-logo-spin infinite 20s linear',
    alignSelf: 'center',
  },
  cardContent: {
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

const Home = () => {
  const classes = useStyles();

  const onCardLinkClick = () => {
    return window.open("https://github.com/David-Shibley/Site")
  }

  return (
    <Container className={classes.root} varient="outlined">
      <Card class="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
          <div class="front">
            <CardContent className={classes.cardContent}>
              <Typography>Page is currently being worked on</Typography>
              <Avatar src={DoWorkLogo} className={classes.avatar} alt="logo" tooltip="working" />
              <CardActions className={classes.cardActions}>
                <Typography>Hover here to learn more</Typography>
              </CardActions>
            </CardContent>
          </div>
          <div class="back">
            <CardContent className={classes.cardContent}>
              <Avatar src={DoWorkLogo} className={classes.avatar} style={{animation: 'none'}} alt="logo" tooltip="working" />
              <CardActions className={classes.cardActions}>
                <Button onClick={onCardLinkClick}>
                  See the code on github
                </Button>
              </CardActions>
            </CardContent>            
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default Home;