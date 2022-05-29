import React from 'react';
import { AppBar, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () => {
  
  return (
    <div className="Navbar">
      <AppBar>
        <Grid container direction="row">
          <Grid item xs={4}>
            <Typography variant="h4" color="inherit">
            Ruban's Portfolio Website
          </Typography>
          </Grid>
          <Grid item xs={8} align="right" marginTop="4px">
            <Typography variant="h6" color="inherit" display="inline" marginRight="20px">
              <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }} >About</Link>
            </Typography>
            <Typography variant="h6" color="inherit" display="inline" marginRight="20px">|</Typography>
            <Typography variant="h6" color="inherit" display="inline" marginRight="20px">
              <Link to="/projects" style={{ color: '#FFF', textDecoration: 'none' }}>Projects</Link>
            </Typography>
            <Typography variant="h6" color="inherit" display="inline" marginRight="20px">|</Typography>
            <Typography variant="h6" color="inherit" display="inline" marginRight="20px">
              <Link to="/contact" style={{ color: '#FFF', textDecoration: 'none' }}>Contact</Link>
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
 
export default Navbar;