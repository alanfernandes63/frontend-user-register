import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import NestedList from './list/index';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { useSelector,useDispatch } from 'react-redux';

const useStyles = makeStyles( theme => (
    {
      drawPaper:{
        width:240
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      
    }
  )
);


export default function ComponentDrawer(){

  const dispatch = useDispatch();

  function handleDrawerClose(){
    dispatch({type:'CLOSE_DRAWER'});
  }
  
  const classes = useStyles();
  const store = useSelector(state => state);
  const isOpen = store.handleDrawer;


  return (
    
      <Drawer
      variant="persistent"
      classes={{paper:classes.drawPaper}}
      open={ isOpen }>
        <div className={classes.drawerHeader}>
          <IconButton onClick= { handleDrawerClose }>
             <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <NestedList></NestedList>
      </Drawer>
  );
}