import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './Header.styles';
import Link from '../Link/Link';
import Image from 'next/image';

type Image = {
  url: string;
  altText: string;
};

type Props = {
  logo: Image;
  title?: string;
};

const Header = (props: Props) => {
  const { logo, title } = props;

  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Image src={logo.url} alt="logo" height={50} width={50} />
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <div className={classes.links}>
          <Link url="/about" label="About" variant="primary" />
          <Link url="/articles" label="Articles" variant="primary" />
          <Link label="Logout" variant="primary" url="/" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
