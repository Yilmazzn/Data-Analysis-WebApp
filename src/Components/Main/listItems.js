import React, { useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

export const MainListItems = (props) => {

  const { history } = props;

  const loadPage = url => {
    history.push(url);
  }

  return (
    <div>
      <ListItem button component="button" onClick={() => loadPage('/')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component="button" onClick={() => loadPage('/projects')}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Community" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
    </div>
    )
  };


export const SecondaryListItems = (props) => {
  
  const projects = useSelector(state => state.projects)
  const { history } = props;

  return (
    <div>
        {projects.map(project => (
          <ListItem button key={project.id} onClick={() => {history.push(`/projects/${project.id}`)}}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary={project.name} primaryTypographyProps={{noWrap: true}}/>
            
          </ListItem>
      ))}
    </div>
  );
};