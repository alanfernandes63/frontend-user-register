import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ListStyle from './style'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const MakeList = () => {


  const classes = ListStyle();

  return(
    <div className={ classes.list } role="presentation">

      {
        <TreeView
        defaultExpandIcon={ <ExpandMoreIcon /> }
        defaultCollapseIcon={ <ChevronRightIcon /> }>
          <TreeItem label="User">
            <TreeItem label="add"></TreeItem>
            <TreeItem label="list"></TreeItem>
          </TreeItem>
        </TreeView>

      }

      </div>
  )
}

export default function Mybutton(){
  return(
    <Drawer open={true}>
      { MakeList() }
    </Drawer>
  );
}