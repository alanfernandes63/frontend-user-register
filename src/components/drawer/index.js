import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import NestedList from './list/index';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( theme => (
    {
      drawPaper:{
        width:240
      } 
    }
  )
);


export default function ComponentDrawer(){
  const classes = useStyles();
  console.log(classes.drawPaper)
  return (
    <div>
    <Drawer
    classes={{paper:classes.drawPaper}}
    open={true}>
      <NestedList></NestedList>
    </Drawer>
    </div>
  );
}