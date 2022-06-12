import React, { useContext, useState } from 'react';
import useStyles from './MainContent.styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Link from '../Link/Link';
import { sideNavLinks } from '../../common/data';
import { SiteContext } from '../../utils/SiteContext';
import { getBodyComponent } from '../../utils/getComponents';
export type Props = {
  componentName: string;
};
const MainContent = ({ componentName }: Props) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const { bodyComponent } = useContext(SiteContext);
  const [bodyComponent, setBodyComponent] = useState(componentName);
  const drawer = (
    <div>
      <List>
        {sideNavLinks.map((item, index) => (
          // <ListItem button key={text}>
          //   <ListItemIcon>
          //     {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
          //   </ListItemIcon>
          //   <ListItemText primary={text} />
          // </ListItem>
          <ListItem button key={index}>
            <Link
              url={item.url}
              label={item.label}
              onClick={() => setBodyComponent(item.label)}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const x = getBodyComponent(bodyComponent);

  return (
    <div>
      <div className={classes.container}>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            {drawer}
          </Drawer>
        </nav>
        <main className={classes.content}>
          {getBodyComponent(bodyComponent)}
          {/*
           */}
        </main>
      </div>
    </div>
  );
};

export default MainContent;
