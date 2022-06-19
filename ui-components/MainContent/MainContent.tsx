import React, { useContext, useState } from 'react';
import useStyles from './MainContent.styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '../Link/Link';
import { sideNavLinks } from '../../common/data';
import { getBodyComponent } from '../../utils/getComponents';
import clsx from 'clsx';
import { useRouter } from 'next/router';

export type Props = {
  componentName: string;
};
const MainContent = ({ componentName }: Props) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();
  const [bodyComponent, setBodyComponent] = useState(componentName);

  const drawer = (
    <List className={classes.list}>
      {sideNavLinks.map((item, index) => (
        <ListItem
          key={index}
          className={clsx(
            classes.sidenavLinks,
            router.asPath?.toLowerCase() === item.url.toLowerCase()
              ? classes.activeItem
              : '',
          )}
        >
          <Link
            url={item.url}
            label={item.label}
            onClick={() => setBodyComponent(item.label)}
            variant="primary"
            icon={item.icon}
          />
        </ListItem>
      ))}
    </List>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
        <div className={classes.content}>
          {getBodyComponent(bodyComponent)}
          {/*
           */}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
