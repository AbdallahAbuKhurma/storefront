import React from 'react';
import { AppBar, Typography, Toolbar, Link, Grid} from '@material-ui/core/';

function Header() {
  return (
    <AppBar position="sticky" color = 'default'>
      <Toolbar className = 'navbar'>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5" color="inherit" noWrap>
            <Link className = 'navbar-link' color= 'inherit' href="/">
              Storefront
            </Link>
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
