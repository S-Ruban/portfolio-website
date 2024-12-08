import React from 'react';
import { AppBar, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import resume from './RubanS_Resume_Dec_2024.pdf'

const relAlign = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  paddingLeft: '5%', 
  paddingRight: '5%',
};

const Navbar = () => {
  
  return (
    <div className="Navbar">
      <AppBar>
        <Grid container direction="row" style={relAlign}>
          <Grid item>
            <Typography variant="h4" color="inherit">
            Ruban's Portfolio Website
            </Typography>
          </Grid>
          <Grid item align="right" marginTop="4px">
            <Typography variant="h6" color="inherit" display="inline" marginRight="20px">
              <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }} >About</Link>
            </Typography>
            <Typography variant="h6" color="inherit" display="inline" marginRight="20px">|</Typography>
            <Typography variant="h6" color="inherit" display="inline" marginRight="20px">
              <Link to="/projects" style={{ color: '#FFF', textDecoration: 'none' }}>Projects</Link>
            </Typography>
            <Typography variant="h6" color="inherit" display="inline" marginRight="20px">|</Typography>
            <Typography variant="h6" color="inherit" display="inline" marginRight="20px">
            <a href="https://medium.com/@s.ruban2000/computer-architecture-blog-f9973ffae74c" target='_blank' rel='noopener noreferrer' style={{ color: '#FFF', textDecoration: 'none' }}>Blog</a>
            </Typography>
            <Typography variant="h6" color="inherit" display="inline" marginRight="20px">|</Typography>
            <Typography variant="h6" color="inherit" display="inline" marginRight="20px">
              <Link to="/contact" style={{ color: '#FFF', textDecoration: 'none' }}>Contact</Link>
            </Typography>
            <Typography variant="h6" color="inherit" display="inline" marginRight="20px">|</Typography>
            <Typography variant="h6" color="inherit" display="inline" marginRight="20px">
              <a href={resume} target='_blank' rel='noopener noreferrer' style={{ color: '#FFF', textDecoration: 'none' }}>Resume</a>
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
 
export default Navbar;