import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './Header.styles';
import Button from '../Button/Button';
import Link from '../Link/Link';

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
        <img src={logo.url} alt="logo" />
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        {/* <Button variant="primary" title="About" /> */}
        {/* <Button variant="primary" title="Articles" />
        <Button variant="primary" title="Login/Register" /> */}
        <Link url="/about" label="About" />
        <Link url="/articles" label="Articles" />
        <Link url="/login" label="Login" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
