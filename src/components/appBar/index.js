import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';

/**
 * className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
*/
//className={clsx(classes.menuButton, open && classes.hide)}

export default function AplicationAppBar(){

  const dispatch = useDispatch();

  function handleDrawerOpen(){
    dispatch({type:'OPEN_DRAWER'});
  }
    return (
        <AppBar
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
    );
}